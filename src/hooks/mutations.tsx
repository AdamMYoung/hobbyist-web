import { useCallback } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { CreateHobbyRequest } from '../api/hobbies';
import { Hobby } from '../types';
import { useAuthAxios } from './useAuthAxios';

/**
 * Return a function to toggle the follow status of the hobby.
 * @param hobbySlug Slug to follow.
 */
export const useMutateHobbyFollowState = (hobbySlug: string) => {
    const queryKey = `hobby/${hobbySlug}`;

    const axios = useAuthAxios();
    const queryClient = useQueryClient();

    const { mutate: follow, isLoading: isFollowLoading } = useMutation(
        async () => await axios().then((a) => a.put(`/users/follow/${hobbySlug}`)),
        {
            onSettled: async () => await queryClient.invalidateQueries(queryKey),
            onMutate: async () => {
                await queryClient.cancelQueries(queryKey);

                const previous = queryClient.getQueryData<Hobby>(queryKey);
                if (previous) queryClient.setQueryData<Hobby>(queryKey, { ...previous, following: true });

                return { previous };
            },
        }
    );

    const { mutate: unfollow, isLoading: isUnfollowLoading } = useMutation(
        async () => await axios().then((a) => a.put(`/users/unfollow/${hobbySlug}`)),
        {
            onSuccess: async () => await queryClient.invalidateQueries(`hobby/${hobbySlug}`),
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
    const axios = useAuthAxios();

    return useMutation<void, void, CreateHobbyRequest>(async (data) => {
        return await axios().then((a) => a.post('/hobbies', data));
    });
};
