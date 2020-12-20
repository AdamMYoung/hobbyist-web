import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import LoadTransition from '../../components/load-transition';
import ProfileHead from '../../components/profile-head';
import SEO from '../../components/seo';
import { FeedSortType } from '../../types';
import Feed from '../../views/feed';
import FeedSortButtons from '../../views/feed-sort-buttons';
import FeedSortDropdown from '../../views/feed-sort-dropdown';
import SplitPage, { RenderProps } from '../../views/split-page';

const Profile = () => {
    const { username } = useParams<{ username: string }>();
    const [feedSortType, setFeedSortType] = useState<FeedSortType>(FeedSortType.New);

    return (
        <LoadTransition>
            <SEO title={username} />

            <SplitPage
                headerNavContent={
                    <FeedSortDropdown disableFeedSort currentSortType={feedSortType} onSortChanged={setFeedSortType} />
                }
            >
                {({ leftDrawer, closeLeftDrawer }: RenderProps) => (
                    <>
                        <SplitPage.Top>
                            <ProfileHead
                                title={username}
                                description="This is the user's bio"
                                profileSrc="https://via.placeholder.com/150"
                                headerSrc="https://via.placeholder.com/150"
                            ></ProfileHead>
                        </SplitPage.Top>
                        <SplitPage.Body leftDrawerOpen={leftDrawer} onCloseLeftDrawer={closeLeftDrawer}>
                            <SplitPage.Center>
                                <h2 className="text-2xl font-semibold mx-2">Hobbies</h2>
                                {/* <ProfileHobbies hobbies={Hobbies} /> */}

                                <SplitPage.Center.Header>
                                    <div className="mt-4">
                                        <FeedSortButtons
                                            disableFeedSort
                                            currentSortType={feedSortType}
                                            onSortChanged={setFeedSortType}
                                        />
                                    </div>
                                </SplitPage.Center.Header>

                                <Feed />
                            </SplitPage.Center>
                            <SplitPage.Right />
                        </SplitPage.Body>
                    </>
                )}
            </SplitPage>
        </LoadTransition>
    );
};

export default Profile;
