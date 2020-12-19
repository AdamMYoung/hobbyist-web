import { useCallback } from 'react';
import { useMutation, QueryCache } from 'react-query';
import { useAuthAxios } from './useAuthAxios';

const queryClient = new QueryCache();

/**
 * Return a function to toggle the follow status of the hobby.
 * @param hobbySlug Slug to follow.
 */
export const useMutateHobbyFollowState = (hobbySlug: string) => {
    const getAxios = useAuthAxios();

    const [follow] = useMutation(
        async () => await getAxios().then((axios) => axios.put(`/users/follow/${hobbySlug}`)),

        { onSuccess: async () => await queryClient.invalidateQueries(`/hobby/${hobbySlug}`) }
    );

    const [unfollow] = useMutation(
        async () => await getAxios().then((axios) => axios.put(`/users/unfollow/${hobbySlug}`)),

        { onSuccess: async () => await queryClient.invalidateQueries(`/hobby/${hobbySlug}`) }
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

    return setFollowing;
};
