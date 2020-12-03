import { BrowserRouter } from 'react-router-dom';
import { ScrollLockProvider } from './providers/ScrollLockProvider';
import Layout from './views/layout';

const App = () => {
    return (
        <ScrollLockProvider>
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </ScrollLockProvider>
    );
};

export default App;
