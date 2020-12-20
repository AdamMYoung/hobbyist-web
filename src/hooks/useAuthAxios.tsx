import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const options = {
    audience: `api.hobbyist.app`,
    scope:
        'edit:user_profile delete:user_profile create:user_post edit:user_post delete:user_post create:comment edit:user_comment delete:user_comment',
};

export function useAuthAxios() {
    const { isAuthenticated, getAccessTokenSilently, getAccessTokenWithPopup } = useAuth0();

    return async () => {
        let accessToken;

        if (isAuthenticated) {
            accessToken = await getAccessTokenSilently(options).catch(async (error) => {
                if (error.error === 'consent_required') {
                    await getAccessTokenWithPopup(options);
                }
            });
        }

        return axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            headers: accessToken && { Authorization: `Bearer ${accessToken}` },
        });
    };
}
