import { useCallback } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useAuthAxios } from './useAuthAxios';

/**
 * Return a function to toggle the follow status of the hobby.
 * @param hobbySlug Slug to follow.
 */
export const useMutateHobbyFollowState = (hobbySlug: string) => {
    const axios = useAuthAxios();
    const queryClient = useQueryClient();

    const { mutate: follow, isLoading: isFollowLoading } = useMutation(
        async () => await axios.then((a) => a.put(`/users/follow/${hobbySlug}`)),
        {
            onSuccess: async () => await queryClient.invalidateQueries(`hobby/${hobbySlug}`),
        }
    );

    const { mutate: unfollow, isLoading: isUnfollowLoading } = useMutation(
        async () => await axios.then((a) => a.put(`/users/unfollow/${hobbySlug}`)),
        {
            onSuccess: async () => await queryClient.invalidateQueries(`hobby/${hobbySlug}`),
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
