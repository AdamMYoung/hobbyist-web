import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import LoadTransition from '../../components/load-transition';
import ProfileHead from '../../components/profile-head';
import SEO from '../../components/seo';
import { FeedSortType, Hobby } from '../../types';
import Feed from '../../views/feed';
import FeedSortButtons from '../../views/feed-sort-buttons';
import FeedSortDropdown from '../../views/feed-sort-dropdown';
import ProfileHobbies from '../../views/profile-hobbies';
import SplitPage, { RenderProps } from '../../views/split-page';

const Hobbies: Hobby[] = [
    {
        id: 'one',
        title: 'Drawing',
        src: 'https://via.placeholder.com/400',
        description: 'A thing where you do a hobby',
        memberCount: 1500,
    },
    {
        id: 'one',
        title: 'Drawing',
        src: 'https://via.placeholder.com/400',
        description: 'A thing where you do a hobby',
        memberCount: 1500,
    },
    {
        id: 'one',
        title: 'Drawing',
        src: 'https://via.placeholder.com/400',
        description: 'A thing where you do a hobby',
        memberCount: 1500,
    },
    {
        id: 'one',
        title: 'Drawing',
        src: 'https://via.placeholder.com/400',
        description: 'A thing where you do a hobby',
        memberCount: 1500,
    },
    {
        id: 'one',
        title: 'Drawing',
        src: 'https://via.placeholder.com/400',
        description: 'A thing where you do a hobby',
        memberCount: 1500,
    },
    {
        id: 'one',
        title: 'Drawing',
        src: 'https://via.placeholder.com/400',
        description: 'A thing where you do a hobby',
        memberCount: 1500,
    },
];

const Profile = () => {
    const { username } = useParams<{ username: string }>();
    const [feedSortType, setFeedSortType] = useState<FeedSortType>(FeedSortType.New);

    return (
        <LoadTransition>
            <SEO title={username} />

            <SplitPage
                rightIcon={faPaintBrush}
                headerNavContent={
                    <FeedSortDropdown disableFeedSort currentSortType={feedSortType} onSortChanged={setFeedSortType} />
                }
            >
                {({ rightDrawer, closeRightDrawer }: RenderProps) => (
                    <>
                        <SplitPage.Center>
                            <div className="sm:pt-4">
                                <ProfileHead
                                    title={username}
                                    description="This is the user's bio"
                                    profileSrc="https://via.placeholder.com/150"
                                    headerSrc="https://via.placeholder.com/150"
                                ></ProfileHead>
                            </div>
                            <SplitPage.Center.Header>
                                <FeedSortButtons
                                    disableFeedSort
                                    currentSortType={feedSortType}
                                    onSortChanged={setFeedSortType}
                                />
                            </SplitPage.Center.Header>
                            <Feed />
                        </SplitPage.Center>
                        <SplitPage.Right isDrawerOpen={rightDrawer} onCloseDrawer={closeRightDrawer}>
                            <div className="sm:mt-2 mb-4">
                                <SplitPage.Header title="Hobbies" />
                            </div>
                            <ProfileHobbies hobbies={Hobbies} />
                        </SplitPage.Right>
                    </>
                )}
            </SplitPage>
        </LoadTransition>
    );
};

export default Profile;
