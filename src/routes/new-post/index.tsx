import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/button';
import LoadTransition from '../../components/load-transition';
import SEO from '../../components/seo';
import { FeedSortType } from '../../types';

import CreatePost from '../../views/create-post';
import FeedSortDropdown from '../../views/feed-sort-dropdown';
import SplitPage, { RenderProps } from '../../views/split-page';

const Home = () => {
    const history = useHistory();
    const [feedSortType, setFeedSortType] = useState<FeedSortType>(FeedSortType.Feed);
    const title = 'Create Post.';

    const handleSubmit = () => {};

    const CreateButton = () => (
        <Button variant="primary" onClick={handleSubmit} disabled={true}>
            Create
        </Button>
    );

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
                                <CreateButton />
                            </SplitPage.Center.Header>

                            <div className="my-4">
                                <CreatePost />
                            </div>
                        </SplitPage.Center>
                        <SplitPage.Right>
                            <LoadTransition>
                                <SplitPage.Header title="Help." />

                                <p className="mt-2 text-sm font-semibold">
                                    To create a new post, you'll need to provide:
                                </p>

                                <p className="mt-4 text-lg font-bold">Hobby</p>
                                <p className="text-sm">Select a hobby you follow, that you want to post to.</p>

                                <p className="mt-2 text-lg font-bold">Title</p>
                                <p className="text-sm">A brief title to describe your post.</p>

                                <p className="mt-2 text-lg font-bold">Content</p>
                                <p className="text-sm">
                                    Submit the content you wish to show. This can be text, images or even links.
                                </p>

                                <hr className="my-4 border-gray-300" />
                                <p className="mt-2 text-sm">
                                    Once you're done, click "Create" at the top of the screen, and your hobby page will
                                    be created.
                                </p>

                                <Button
                                    variant="primary"
                                    className="mb-4 mt-6 w-full"
                                    onClick={() => history.replace('/')}
                                >
                                    Cancel
                                </Button>

                                <Button
                                    variant="primary"
                                    className="mt-2 w-full"
                                    onClick={() => history.push('/new-hobby')}
                                >
                                    New Hobby
                                </Button>
                            </LoadTransition>
                        </SplitPage.Right>
                    </SplitPage.Body>
                )}
            </SplitPage>
        </>
    );
};

export default Home;
