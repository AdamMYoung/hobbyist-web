import React from 'react';
import { useParams } from 'react-router-dom';

import LoadTransition from '../../components/load-transition';
import ProfileHead from '../../components/profile-head';
import Feed from '../../views/feed';
import SplitPage from '../../views/split-page';

const Profile = () => {
    const { username } = useParams<{ username: string }>();

    return (
        <LoadTransition>
            <div className="py-4">
                <ProfileHead
                    title={username}
                    profileSrc="https://via.placeholder.com/150"
                    headerSrc="https://via.placeholder.com/150"
                ></ProfileHead>
            </div>
            <SplitPage disableProfileControls>
                <SplitPage.Center>
                    <Feed />
                </SplitPage.Center>
                <SplitPage.Right></SplitPage.Right>
            </SplitPage>
        </LoadTransition>
    );
};

export default Profile;
