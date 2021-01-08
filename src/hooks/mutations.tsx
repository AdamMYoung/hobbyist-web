import { useAuth0 } from '@auth0/auth0-react';
import { AxiosResponse } from 'axios';
import { useCallback } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useHistory } from 'react-router-dom';

import {
    Hobby,
    Post,
    CreateCommentRequest,
    CreateHobbyRequest,
    CreatePostRequest,
    UpdatePostRequest,
    UpdateCommentRequest,
    UpdateHobbyRequest,
} from '../types';
import { getMetadata } from '../utils/userUtils';
import { useAuthAxios } from './useAuthAxios';

/**
 * Return a function to toggle the follow status of the hobby.
 * @param hobbySlug Slug to follow.
 */
export const useMutateHobbyFollowState = (hobbySlug: string) => {
    const queryKey = `hobby/${hobbySlug}`;

    const { user } = useAuth0();
    const queryClient = useQueryClient();
    const axios = useAuthAxios();

    const { mutate: follow, isLoading: isFollowLoading } = useMutation(
        async () => await axios().then((a) => a.put(`/users/me/follow/${hobbySlug}`)),
        {
            onSettled: async () => {
                await queryClient.invalidateQueries(queryKey);
                await queryClient.invalidateQueries(`${getMetadata(user, 'username')}/hobbies`);
            },
            onMutate: async () => {
                await queryClient.cancelQueries(queryKey);

                const previous = queryClient.getQueryData<Hobby>(queryKey);
                if (previous) queryClient.setQueryData<Hobby>(queryKey, { ...previous, following: true });

                return { previous };
            },
        }
    );

    const { mutate: unfollow, isLoading: isUnfollowLoading } = useMutation(
        async () => await axios().then((a) => a.put(`/users/me/unfollow/${hobbySlug}`)),
        {
            onSuccess: async () => {
                await queryClient.invalidateQueries(`hobby/${hobbySlug}`);
                await queryClient.invalidateQueries(`${getMetadata(user, 'username')}/hobbies`);
            },
            onMutate: async () => {
                await queryClient.cancelQueries(queryKey);

                const previous = queryClient.getQueryData<Hobby>(queryKey);
                if (previous) queryClient.setQueryData<Hobby>(queryKey, { ...previous, following: false });

                return { previous };
            },
        }
    );

    const setFollowing = useCallback(
        (following: boolean) => {
            if (following) {
                follow();
            } else {
                unfollow();
            }
        },
        [follow, unfollow]
    );

    return { setFollowing, isLoading: isUnfollowLoading || isFollowLoading };
};

export const useMutateCreateHobby = () => {
    const { user } = useAuth0();
    const queryClient = useQueryClient();
    const axios = useAuthAxios();

    return useMutation<void, void, CreateHobbyRequest>(
        async (data) => {
            return await axios().then((a) => a.post('/hobbies', data));
        },
        {
            onSuccess: async () => await queryClient.invalidateQueries(`${getMetadata(user, 'username')}/hobbies`),
        }
    );
};

export const useMutateCreatePost = (slug: string) => {
    const axios = useAuthAxios();
    const history = useHistory();
    const queryClient = useQueryClient();

    return useMutation<AxiosResponse<Post>, void, CreatePostRequest>(
        async (data) => {
            return await axios().then((a) => a.post(`/hobbies/${slug}`, data));
        },
        {
            onSuccess: (res) => {
                const postQueryKey = `hobby/${slug}/${res.data.token}`;
                queryClient.setQueryData(postQueryKey, res.data);
                history.push(`/${postQueryKey}`);
            },
        }
    );
};

export const useMutateCreateComment = (hobbySlug: string, postToken: string) => {
    const axios = useAuthAxios();
    const queryClient = useQueryClient();

    return useMutation<void, void, CreateCommentRequest>(
        async (data) => {
            return await axios().then((a) => a.post(`/comments/${hobbySlug}/${postToken}`, data));
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(`comments/${hobbySlug}/${postToken}`);
            },
        }
    );
};

export const useMutateUpdateHobby = () => {
    const { user } = useAuth0();
    const queryClient = useQueryClient();
    const axios = useAuthAxios();

    return useMutation<void, void, UpdateHobbyRequest>(
        async (data) => {
            return await axios().then((a) => a.post('/hobbies', data));
        },
        {
            onSuccess: async () => await queryClient.invalidateQueries(`${getMetadata(user, 'username')}/hobbies`),
        }
    );
};

export const useMutateUpdatePost = (slug: string, postToken: string) => {
    const axios = useAuthAxios();
    const history = useHistory();
    const queryClient = useQueryClient();

    return useMutation<AxiosResponse<Post>, void, UpdatePostRequest>(
        async (data) => {
            return await axios().then((a) => a.put(`/hobbies/${slug}/${postToken}`, data));
        },
        {
            onSuccess: (res) => {
                const postQueryKey = `hobby/${slug}/${postToken}`;
                queryClient.setQueryData(postQueryKey, res.data);
                history.push(`/${postQueryKey}`);
            },
        }
    );
};

export const useMutateUpdateComment = (hobbySlug: string, postToken: string, commentId: string) => {
    const axios = useAuthAxios();
    const queryClient = useQueryClient();

    return useMutation<void, void, UpdateCommentRequest>(
        async (data) => {
            return await axios().then((a) => a.put(`/comments/${hobbySlug}/${postToken}/${commentId}`, data));
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(`comments/${hobbySlug}/${postToken}`);
            },
        }
    );
};
