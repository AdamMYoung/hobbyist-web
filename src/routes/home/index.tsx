import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/button';
import SEO from '../../components/seo';
import { FeedSortType } from '../../types';
import CreatePost from '../../views/create-post';

import Feed from '../../views/feed';
import FeedSortButtons from '../../views/feed-sort-buttons';
import FeedSortDropdown from '../../views/feed-sort-dropdown';
import SplitPage from '../../views/split-page';

const Home = () => {
    const history = useHistory();
    const [isCreatePost, setCreatePost] = useState<boolean>(false);
    const [feedSortType, setFeedSortType] = useState<FeedSortType>(FeedSortType.Feed);
    const title = 'Feed.';

    return (
        <>
            <SEO description="Hobbyist is a community around your interests, connecting you to like-minded people with the same passions." />
            <SplitPage
                title={title}
                headerNavContent={<FeedSortDropdown currentSortType={feedSortType} onSortChanged={setFeedSortType} />}
            >
                <SplitPage.Center>
                    <div className="mx-4 sm:mx-0">
                        {!isCreatePost && (
                            <div className="flex flex-wrap items-center mb-4">
                                <Button variant="primary" className="mt-2" onClick={() => setCreatePost(true)}>
                                    New Post
                                </Button>

                                <div className="ml-auto mt-2 flex items-center">
                                    <p>Can't find your hobby?</p>
                                    <Button className="ml-2" variant="link" onClick={() => history.push('/new-hobby')}>
                                        Create it!
                                    </Button>
                                </div>
                            </div>
                        )}

                        {isCreatePost && (
                            <>
                                <Button variant="link" className="mb-4" onClick={() => setCreatePost(false)}>
                                    Back
                                </Button>
                                <CreatePost />
                            </>
                        )}
                    </div>
                    <hr className="mb-8 border-gray-300" />
                    <SplitPage.Center.Header title={title}>
                        <FeedSortButtons currentSortType={feedSortType} onSortChanged={setFeedSortType} />
                    </SplitPage.Center.Header>

                    <Feed />
                </SplitPage.Center>
                <SplitPage.Right />
            </SplitPage>
        </>
    );
};

export default Home;
