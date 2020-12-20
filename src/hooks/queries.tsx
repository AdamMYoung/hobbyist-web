import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';

import { HobbyDetail } from '../types';
import { useAuthAxios } from './useAuthAxios';

/**
 *  Returns a query for the requested hobby.
 * @param slug Slug of the hobby to fetch.
 */
export const useHobby = (slug: string) => {
    const axios = useAuthAxios();
    const history = useHistory();

    const query = useQuery<HobbyDetail>(
        `hobby/${slug}`,
        async () => {
            const { data } = await axios.then((a) => a.get<HobbyDetail>(`/hobbies/${slug}`));
            return data;
        },
        { retry: false, refetchOnWindowFocus: false, onError: () => history.replace('/not-found') }
    );

    return query;
};
