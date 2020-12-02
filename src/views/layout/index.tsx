import Routes from '../../routes';
import Footer from './footer';
import Navigation from './navigation';

const Layout = () => {
    return (
        <>
            <Navigation />
            <main className="container">
                <Routes />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
