import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import LoadTransition from '../../components/load-transition';
import ProfileHead from '../../components/profile-head';
import SEO from '../../components/seo';
import Feed from '../../views/feed';
import SplitPage, { RenderProps } from '../../views/split-page';

const UserProfile = () => {
    const { user } = useAuth0();

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
                                headerSrc="https://via.placeholder.com/150"
                            ></ProfileHead>
                        </SplitPage.Top>
                        <SplitPage.Body leftDrawerOpen={leftDrawer} onCloseLeftDrawer={closeLeftDrawer}>
                            <SplitPage.Center>
                                <Feed />
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
