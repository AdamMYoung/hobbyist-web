import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useQueryClient } from 'react-query';

export const useInvalidateQueryOnAuth = (query: string) => {
    const { isAuthenticated } = useAuth0();
    const queryClient = useQueryClient();

    useEffect(() => {
        if (isAuthenticated) queryClient.invalidateQueries(query);
    }, [isAuthenticated, queryClient, query]);
};
