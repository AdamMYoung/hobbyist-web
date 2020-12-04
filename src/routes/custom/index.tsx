import { useAuth0 } from '@auth0/auth0-react';
import { Route } from 'react-router-dom';

type Props = React.ComponentPropsWithoutRef<typeof Route>;

export const AuthenticatedRoute = (props: Props) => {
    const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

    if (isAuthenticated) {
        return <Route {...props} />;
    }

    if (!isLoading && !isAuthenticated) {
        loginWithRedirect();
    }

    return null;
};
