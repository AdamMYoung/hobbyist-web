import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useInfiniteQuery, useQuery, useQueryClient } from 'react-query';
import { useHistory } from 'react-router-dom';

import {
    CommentEntry,
    FeedEntry,
    Hobby,
    HobbyDetail,
    PaginatedResult,
    PostTypes,
    ProfileDetail,
    TextPost,
} from '../types';
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
        `user/${username}/hobbies`,
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
        {
            retry: false,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            onError: () => history.replace('/not-found'),
        }
    );

    useEffect(() => {
        refetch();
    }, [isLoading, refetch]);

    return { ...rest };
};

export const useProfile = (username: string) => {
    const axios = useAuthAxios();
    const history = useHistory();

    const query = useQuery<ProfileDetail>(
        `user/${username}`,
        async () => {
            const { data } = await axios().then((a) => a.get<ProfileDetail>(`/users/${username}`));
            return data;
        },
        {
            retry: false,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            onError: () => history.replace('/not-found'),
        }
    );

    return query;
};

export const useFeed = (type: 'feed' | 'hobby' | 'user', slug?: string) => {
    const axios = useAuthAxios();
    const queryClient = useQueryClient();

    const urls = {
        feed: '/feed',
        hobby: `/feed/hobby/${slug}`,
        user: `/feed/user/${slug}`,
    };

    return useInfiniteQuery<PaginatedResult<FeedEntry[]>>(
        urls[type],
        async ({ continuationToken = null }: any) => {
            const { data } = await axios().then((a) =>
                a.get<PaginatedResult<FeedEntry[]>>(
                    `${urls[type]}${!!continuationToken ? `/${continuationToken}` : ''}`
                )
            );
            return data;
        },
        {
            retry: false,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            getNextPageParam: (lastPage: PaginatedResult<FeedEntry[]>) => lastPage.continuationToken,
            onSuccess: async (result) => {
                result.pages.forEach((page) => {
                    page.items.forEach((item) => {
                        queryClient.setQueryData<TextPost>(`hobby/${item.hobbySlug}/${item.token}`, {
                            profile: item.profile,
                            token: item.token,
                            slug: '',
                            title: item.title,
                            type: 'text',
                            content: item.content,
                            creationDate: item.creationDate,
                        });
                    });
                });
            },
        }
    );
};

export const useComments = (hobbySlug: string, postToken: string) => {
    const axios = useAuthAxios();

    return useInfiniteQuery<PaginatedResult<CommentEntry[]>>(
        `comments/${hobbySlug}/${postToken}`,
        async ({ continuationToken = null }: any) => {
            const { data } = await axios().then((a) =>
                a.get<PaginatedResult<CommentEntry[]>>(
                    `/comments/${hobbySlug}/${postToken}${!!continuationToken ? `/${continuationToken}` : ''}`
                )
            );
            return data;
        },
        {
            retry: false,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            getNextPageParam: (lastPage: PaginatedResult<CommentEntry[]>) => lastPage.continuationToken,
        }
    );
};
