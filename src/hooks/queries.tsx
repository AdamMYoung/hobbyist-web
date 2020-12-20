import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';

import { Hobby, HobbyDetail } from '../types';
import { getMetadata } from '../utils/userUtils';
import { useAuthAxios } from './useAuthAxios';

/**
 *  Returns a query for the requested hobby.
 * @param slug Slug of the hobby to fetch.
 */
export const useHobby = (slug: string) => {
    const { isLoading } = useAuth0();
    const axios = useAuthAxios();
    const history = useHistory();

    const query = useQuery<HobbyDetail>(
        `hobby/${slug}`,
        async () => {
            const { data } = await axios().then((a) => a.get<HobbyDetail>(`/hobbies/${slug}`));
            return data;
        },
        { retry: false, refetchOnWindowFocus: false, enabled: !isLoading, onError: () => history.replace('/not-found') }
    );

    return query;
};

export const useUserHobbies = (username: string) => {
    const { isLoading } = useAuth0();
    const axios = useAuthAxios();
    const history = useHistory();

    const query = useQuery<Hobby[]>(
        `${username}/hobbies`,
        async () => {
            const { data } = await axios().then((a) => a.get<Hobby[]>(`/users/${username}/hobbies`));
            return data;
        },
        { retry: false, refetchOnWindowFocus: false, enabled: !isLoading, onError: () => history.replace('/not-found') }
    );

    return query;
};
