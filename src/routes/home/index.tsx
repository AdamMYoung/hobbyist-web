import React from 'react';

import Feed from '../../views/feed';
import SplitPage from '../../views/split-page';

//

const Home = () => {
    const title = 'Feed.';

    return (
        <SplitPage title={title}>
            <SplitPage.Center>
                <SplitPage.Center.Header title={title} />
                <Feed />
            </SplitPage.Center>
        </SplitPage>
    );
};

export default Home;
