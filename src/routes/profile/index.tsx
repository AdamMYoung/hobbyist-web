import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useParams } from 'react-router-dom';

import LoadTransition from '../../components/load-transition';
import ProfileHead from '../../components/profile-head';
import SEO from '../../components/seo';
import { Hobby } from '../../types';
import Feed from '../../views/feed';
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

    return (
        <LoadTransition>
            <SEO title={username} />

            <SplitPage title={username} rightIcon={faPaintBrush}>
                {({ rightDrawer, closeRightDrawer }: RenderProps) => (
                    <>
                        <SplitPage.Center>
                            <div className="sm:pt-4 pb-2">
                                <ProfileHead
                                    title={username}
                                    description="This is the user's bio"
                                    profileSrc="https://via.placeholder.com/150"
                                    headerSrc="https://via.placeholder.com/150"
                                ></ProfileHead>
                            </div>
                            <h2 className="text-3xl ml-2 sm:ml-0 mt-8 font-semibold">Posts</h2>
                            <Feed />
                        </SplitPage.Center>
                        <SplitPage.Right isDrawerOpen={rightDrawer} onCloseDrawer={closeRightDrawer}>
                            <div className="sm:mt-2">
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
