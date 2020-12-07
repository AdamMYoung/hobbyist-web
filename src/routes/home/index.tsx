import React from 'react';
import Helmet from 'react-helmet';

import Feed from '../../views/feed';
import SplitPage from '../../views/split-page';

//

const Home = () => {
    const title = 'Feed.';

    return (
        <>
            <Helmet>
                <meta name="description" content="Recent posts from your hobbyist communities" />
            </Helmet>
            <SplitPage title={title}>
                <SplitPage.Center>
                    <SplitPage.Center.Header title={title} />
                    <Feed />
                </SplitPage.Center>
            </SplitPage>
        </>
    );
};

export default Home;
