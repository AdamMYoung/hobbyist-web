import { useMutation, QueryCache } from 'react-query';
import { useAuthAxios } from './useAuthAxios';

const queryClient = new QueryCache();

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

    const setFollowing = (following: boolean) => {
        if (following) {
            follow();
        } else {
            unfollow();
        }
    };

    return setFollowing;
};
