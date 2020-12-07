import React from 'react';
import SEO from '../../components/seo';

import Feed from '../../views/feed';
import SplitPage from '../../views/split-page';

//

const Home = () => {
    const title = 'Feed.';

    return (
        <>
            <SEO
                title="hobbyist."
                description="Hobbyist is a community around your interests, connecting you to like-minded people with the same passions."
            />
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
