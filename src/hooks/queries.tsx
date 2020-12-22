import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';

import { FeedEntry, Hobby, HobbyDetail, PaginatedResult, PostTypes } from '../types';
import { useAuthAxios } from './useAuthAxios';

/**
 *  Returns a query for the requested hobby.
 * @param slug Slug of the hobby to fetch.
 */
export const useHobby = (slug: string) => {
    const { isLoading } = useAuth0();
    const axios = useAuthAxios();
    const history = useHistory();

    const { refetch, ...rest } = useQuery<HobbyDetail>(
        `hobby/${slug}`,
        async () => {
            const { data } = await axios().then((a) => a.get<HobbyDetail>(`/hobbies/${slug}`));
            return data;
        },
        { retry: false, refetchOnWindowFocus: false, onError: () => history.replace('/not-found') }
    );

    useEffect(() => {
        refetch();
    }, [isLoading, refetch]);

    return { ...rest };
};

export const useUserHobbies = (username: string) => {
    const { isLoading } = useAuth0();
    const axios = useAuthAxios();

    const query = useQuery<Hobby[]>(
        `${username}/hobbies`,
        async () => {
            const { data } = await axios().then((a) => a.get<Hobby[]>(`/users/${username}/hobbies`));
            return data;
        },
        { retry: false, refetchOnWindowFocus: false, enabled: !isLoading }
    );

    return query;
};

/**
 *  Returns a query for the requested post.
 * @param slug Slug of the hobby to fetch.
 * @param token Token of the post to fetch.
 */
export const usePost = (slug: string, token: string) => {
    const { isLoading } = useAuth0();
    const axios = useAuthAxios();
    const history = useHistory();

    const { refetch, ...rest } = useQuery<PostTypes>(
        `hobby/${slug}/${token}`,
        async () => {
            const { data } = await axios().then((a) => a.get<PostTypes>(`/hobbies/${slug}/${token}`));
            return data;
        },
        { retry: false, refetchOnWindowFocus: false, onError: () => history.replace('/not-found') }
    );

    useEffect(() => {
        refetch();
    }, [isLoading, refetch]);

    return { ...rest };
};

export const useFeed = (hobbySlug?: string) => {
    const axios = useAuthAxios();

    const url = hobbySlug ? `/feed/hobby/${hobbySlug}` : '/feed';
    const queryKey = hobbySlug ? `feed/${hobbySlug}` : 'feed';

    return useInfiniteQuery<PaginatedResult<FeedEntry[]>>(
        queryKey,
        async ({ continuationToken = null }: any) => {
            const { data } = await axios().then((a) =>
                a.get<PaginatedResult<FeedEntry[]>>(!continuationToken ? url : `${url}/${continuationToken}`)
            );
            return data;
        },
        {
            retry: false,
            refetchOnWindowFocus: false,
            getNextPageParam: (lastPage: PaginatedResult<FeedEntry[]>) => lastPage.continuationToken,
        }
    );
};
