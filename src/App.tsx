import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { ScrollLockProvider } from './providers/ScrollLockProvider';
import Layout from './views/layout';

const history = createBrowserHistory();

const App = () => {
    return (
        <ScrollLockProvider>
            <Router history={history}>
                <Layout />
            </Router>
        </ScrollLockProvider>
    );
};

export default App;
