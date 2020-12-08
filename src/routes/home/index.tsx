import React from 'react';
import SEO from '../../components/seo';
import CreatePost from '../../views/create-post';

import Feed from '../../views/feed';
import SplitPage from '../../views/split-page';

const Home = () => {
    const title = 'Feed.';

    return (
        <>
            <SEO description="Hobbyist is a community around your interests, connecting you to like-minded people with the same passions." />
            <SplitPage title={title}>
                <SplitPage.Center>
                    <h1 className="text-2xl font-bold">Create Post.</h1>
                    <CreatePost />
                    <SplitPage.Center.Header title={title} />
                    <div className="mt-4">
                        <Feed />
                    </div>
                </SplitPage.Center>
                <SplitPage.Right></SplitPage.Right>
            </SplitPage>
        </>
    );
};

export default Home;
