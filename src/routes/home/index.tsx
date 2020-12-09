import React, { useState } from 'react';
import SEO from '../../components/seo';
import { FeedSortType } from '../../types';
import CreatePost from '../../views/create-post';

import Feed from '../../views/feed';
import FeedSortButtons from '../../views/feed-sort-buttons';
import FeedSortDropdown from '../../views/feed-sort-dropdown';
import SplitPage from '../../views/split-page';

const Home = () => {
    const [feedSortType, setFeedSortType] = useState<FeedSortType>(FeedSortType.Feed);
    const title = 'Feed.';

    return (
        <div className="mt-8">
            <SEO description="Hobbyist is a community around your interests, connecting you to like-minded people with the same passions." />
            <SplitPage
                title={title}
                headerNavContent={<FeedSortDropdown currentSortType={feedSortType} onSortChanged={setFeedSortType} />}
            >
                <SplitPage.Center>
                    <div className="mt-8 sm:mt-0">
                        <CreatePost />
                    </div>

                    <SplitPage.Center.Header title={title}>
                        <FeedSortButtons currentSortType={feedSortType} onSortChanged={setFeedSortType} />
                    </SplitPage.Center.Header>

                    <Feed />
                </SplitPage.Center>
                <SplitPage.Right />
            </SplitPage>
        </div>
    );
};

export default Home;
