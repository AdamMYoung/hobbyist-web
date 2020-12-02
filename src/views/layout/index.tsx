import Routes from '../../routes';
import Footer from './footer';
import Navigation from './navigation';

const Layout = () => {
    return (
        <>
            <Navigation />
            <main className="container min-h-screen mt-8">
                <Routes />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
