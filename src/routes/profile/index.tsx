import React from 'react';
import { useParams } from 'react-router-dom';

import LoadTransition from '../../components/load-transition';
import ProfileHead from '../../components/profile-head';
import SEO from '../../components/seo';
import Feed from '../../views/feed';
import SplitPage from '../../views/split-page';

const Profile = () => {
    const { username } = useParams<{ username: string }>();

    return (
        <LoadTransition>
            <SEO title={username} />
            <div className="sm:pt-4 pb-2">
                <ProfileHead
                    title={username}
                    description="This is the user's bio"
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
