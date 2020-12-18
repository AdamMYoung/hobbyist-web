import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useCallback, useState } from 'react';

const options = {
    audience: `api.hobbyist.app`,
    scope:
        'edit:user_profile delete:user_profile create:user_post edit:user_post delete:user_post create:comment edit:user_comment delete:user_comment',
};

export function useApi<T>(url: string, query: 'POST' | 'PUT' | 'GET' | 'DELETE' = 'GET') {
    const { getAccessTokenSilently, getAccessTokenWithPopup } = useAuth0();

    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<any>(null);

    const submit = useCallback(
        async (body?: any) => {
            const accessToken = await getAccessTokenSilently(options).catch(async (error) => {
                if (error.error === 'consent_required') {
                    await getAccessTokenWithPopup(options);
                }
            });

            const axiosInstance = axios.create({
                baseURL: process.env.REACT_APP_API_URL,
                headers: { Authorization: `Bearer ${accessToken}` },
            });

            let axiosQuery;

            switch (query) {
                case 'GET':
                    axiosQuery = axiosInstance.get;
                    break;
                case 'PUT':
                    axiosQuery = axiosInstance.put;
                    break;
                case 'POST':
                    axiosQuery = axiosInstance.post;
                    break;
                case 'DELETE':
                    axiosQuery = axiosInstance.delete;
                    break;
            }

            setLoading(true);

            await axiosQuery<T>(url, body)
                .then((response) => setData(response.data))
                .catch((error) => setError(error))
                .finally(() => setLoading(false));
        },
        [getAccessTokenSilently, getAccessTokenWithPopup, query, url]
    );

    return { submit, loading, data, error };
}
