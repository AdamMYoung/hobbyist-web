import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Auth0Provider } from '@auth0/auth0-react';

import { ScrollLockProvider } from './providers/ScrollLockProvider';
import Layout from './views/layout';

const history = createBrowserHistory();

const App = () => {
    return (
        <Router history={history}>
            <Auth0Provider
                domain={process.env.REACT_APP_AUTH0_DOMAIN ?? ''}
                clientId={process.env.REACT_APP_AUTH0_CLIENT_ID ?? ''}
                redirectUri={window.location.origin}
            >
                <ScrollLockProvider>
                    <Layout />
                </ScrollLockProvider>
            </Auth0Provider>
        </Router>
    );
};

export default App;
