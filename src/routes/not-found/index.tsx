import { useHistory } from 'react-router-dom';

import SplitPage from '../../views/split-page';
import Button from '../../components/button';
import SEO from '../../components/seo';

const NotFound = () => {
    const history = useHistory();

    return (
        <>
            <SEO title="Page Not Found" />
            <SplitPage>
                <SplitPage.Body>
                    <SplitPage.Center>
                        <p className="text-2xl font-bold text-center">Page Not Found</p>

                        <Button className="mx-auto mt-4" variant="primary" onClick={() => history.replace('/')}>
                            Home
                        </Button>
                    </SplitPage.Center>
                </SplitPage.Body>
            </SplitPage>
        </>
    );
};

export default NotFound;
