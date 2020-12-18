import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/button';
import LoadTransition from '../../components/load-transition';
import SEO from '../../components/seo';
import { FeedSortType } from '../../types';
import Feed from '../../views/feed';
import FeedSortButtons from '../../views/feed-sort-buttons';
import FeedSortDropdown from '../../views/feed-sort-dropdown';
import SplitPage, { RenderProps } from '../../views/split-page';

const Home = () => {
    const { isAuthenticated } = useAuth0();
    const history = useHistory();
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
                        <SplitPage.Right>
                            {isAuthenticated && (
                                <LoadTransition>
                                    <SplitPage.Header title="Home." />
                                    <p className="text-sm my-2 mb-4">
                                        Why not post something new, or create somewhere to share your passions?
                                    </p>

                                    <div className="ml-auto mb-4">
                                        <Button
                                            variant="primary"
                                            className="mt-2 w-full"
                                            onClick={() => history.push('/new-post')}
                                        >
                                            Create Post
                                        </Button>
                                    </div>

                                    <Button
                                        variant="primary"
                                        className="mt-2 w-full"
                                        onClick={() => history.push('/new-hobby')}
                                    >
                                        Create Hobby
                                    </Button>
                                </LoadTransition>
                            )}
                        </SplitPage.Right>
                    </SplitPage.Body>
                )}
            </SplitPage>
        </>
    );
};

export default Home;
