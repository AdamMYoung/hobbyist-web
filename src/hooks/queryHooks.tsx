import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';

import { HobbyDetail } from '../types';
import { useAuthAxios } from './useAuthAxios';

export const useHobby = (slug: string) => {
    const getAxios = useAuthAxios();
    const history = useHistory();

    const query = useQuery<HobbyDetail>(
        `hobby/${slug}`,
        async () => {
            const { data } = await getAxios().then((axios) => axios.get<HobbyDetail>(`/hobbies/${slug}`));
            return data;
        },
        { retry: false, refetchOnWindowFocus: false, onError: () => history.replace('/not-found') }
    );

    return query;
};
