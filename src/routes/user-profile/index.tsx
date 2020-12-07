import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import LoadTransition from '../../components/load-transition';
import ProfileHead from '../../components/profile-head';
import SEO from '../../components/seo';
import Feed from '../../views/feed';
import SplitPage from '../../views/split-page';

const UserProfile = () => {
    const { user } = useAuth0();

    return (
        <LoadTransition>
            <SEO title="Your Profile" />
            <div className="py-4">
                <ProfileHead
                    title={user.name}
                    profileSrc="https://via.placeholder.com/150"
                    headerSrc="https://via.placeholder.com/150"
                ></ProfileHead>
            </div>
            <SplitPage>
                <SplitPage.Center>
                    <Feed />
                </SplitPage.Center>
                <SplitPage.Right></SplitPage.Right>
            </SplitPage>
        </LoadTransition>
    );
};

export default UserProfile;
