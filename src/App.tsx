import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Auth0Provider } from '@auth0/auth0-react';
import ReactGA from 'react-ga';
import { hotjar } from 'react-hotjar';

import { ScrollLockProvider } from './providers/ScrollLockProvider';
import Layout from './views/layout';
import { QueryClient, QueryClientProvider } from 'react-query';

ReactGA.initialize('G-00M9LYJ67J');
hotjar.initialize(2162518, 6);

const history = createBrowserHistory();
history.listen((location) => {
    ReactGA.pageview(location.pathname);
});

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>
    );
};

export default App;
