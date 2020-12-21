import React, { useState } from 'react';

import SEO from '../../components/seo';
import { FeedSortType } from '../../types';
import Feed from '../../views/feed';
import FeedSortButtons from '../../views/feed-sort-buttons';
import FeedSortDropdown from '../../views/feed-sort-dropdown';
import SplitPage, { RenderProps } from '../../views/split-page';

const Home = () => {
    const [feedSortType, setFeedSortType] = useState<FeedSortType>(FeedSortType.Feed);
    const title = 'Feed.';

    return (
        <>
            <SEO description="Hobbyist is a community around your interests, connecting you to like-minded people with the same passions." />
            <SplitPage
                title={title}
                headerNavContent={<FeedSortDropdown currentSortType={feedSortType} onSortChanged={setFeedSortType} />}
            >
                {({ leftDrawer, closeLeftDrawer }: RenderProps) => (
                    <SplitPage.Body leftDrawerOpen={leftDrawer} onCloseLeftDrawer={closeLeftDrawer}>
                        <SplitPage.Center>
                            <SplitPage.Center.Header title={title}>
                                <FeedSortButtons currentSortType={feedSortType} onSortChanged={setFeedSortType} />
                            </SplitPage.Center.Header>
                            <div className="my-4">
                                <Feed />
                            </div>
                        </SplitPage.Center>

                        <SplitPage.Right />
                    </SplitPage.Body>
                )}
            </SplitPage>
        </>
    );
};

export default Home;
