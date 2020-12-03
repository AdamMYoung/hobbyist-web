import { BrowserRouter } from 'react-router-dom';
import Layout from './views/layout';

const App = () => {
    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    );
};

export default App;
