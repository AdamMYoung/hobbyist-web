import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import LoadTransition from '../../components/load-transition';
import ProfileHead from '../../components/profile-head';
import SEO from '../../components/seo';
import { useUserProfile } from '../../hooks/queries';
import { getMetadata } from '../../utils/userUtils';
import Feed from '../../views/feed';
import SplitPage, { RenderProps } from '../../views/split-page';

const UserProfile = () => {
    const { user } = useAuth0();
    const { data: userData } = useUserProfile();

    return (
        <LoadTransition>
            <SEO title="Your Profile" />

            <SplitPage>
                {({ leftDrawer, closeLeftDrawer }: RenderProps) => (
                    <>
                        <SplitPage.Top>
                            <ProfileHead
                                title={user.name}
                                profileSrc={user.picture}
                                headerSrc={userData?.bannerSrc ?? ''}
                            ></ProfileHead>
                        </SplitPage.Top>
                        <SplitPage.Body leftDrawerOpen={leftDrawer} onCloseLeftDrawer={closeLeftDrawer}>
                            <SplitPage.Center>
                                <Feed type="user" slug={getMetadata(user, 'username')} />
                            </SplitPage.Center>
                            <SplitPage.Right></SplitPage.Right>
                        </SplitPage.Body>
                    </>
                )}
            </SplitPage>
        </LoadTransition>
    );
};

export default UserProfile;
