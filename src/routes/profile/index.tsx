import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import LoadTransition from '../../components/load-transition';
import ProfileHead from '../../components/profile-head';
import SEO from '../../components/seo';
import { useProfile } from '../../hooks/queries';
import { FeedSortType } from '../../types';
import { getMetadata } from '../../utils/userUtils';
import Feed from '../../views/feed';
import FeedSortButtons from '../../views/feed-sort-buttons';
import FeedSortDropdown from '../../views/feed-sort-dropdown';
import ProfileHobbies from '../../views/profile-hobbies';
import SplitPage, { RenderProps } from '../../views/split-page';

const Profile = () => {
    const { user } = useAuth0();
    const history = useHistory();

    const { username } = useParams<{ username: string }>();
    const [feedSortType, setFeedSortType] = useState<FeedSortType>(FeedSortType.New);

    const { data, isLoading } = useProfile(username);

    if (username === getMetadata(user, 'username')) {
        history.replace('/profile');
        return null;
    }

    return (
        <LoadTransition>
            <SEO title={username} />

            {!isLoading && (
                <SplitPage
                    headerNavContent={
                        <FeedSortDropdown
                            disableFeedSort
                            currentSortType={feedSortType}
                            onSortChanged={setFeedSortType}
                        />
                    }
                >
                    {({ leftDrawer, closeLeftDrawer }: RenderProps) => (
                        <>
                            <SplitPage.Top>
                                <ProfileHead
                                    title={data?.username ?? ''}
                                    description={data?.description}
                                    profileSrc={data?.profileSrc ?? ''}
                                    headerSrc={data?.bannerSrc}
                                ></ProfileHead>
                            </SplitPage.Top>
                            <SplitPage.Body leftDrawerOpen={leftDrawer} onCloseLeftDrawer={closeLeftDrawer}>
                                <SplitPage.Center>
                                    <h2 className="text-2xl font-semibold text-center sm:text-left mx-2">Hobbies</h2>
                                    <ProfileHobbies username={username} />

                                    <SplitPage.Center.Header>
                                        <div className="mt-4">
                                            <FeedSortButtons
                                                disableFeedSort
                                                currentSortType={feedSortType}
                                                onSortChanged={setFeedSortType}
                                            />
                                        </div>
                                    </SplitPage.Center.Header>

                                    <Feed type="user" slug={username} />
                                </SplitPage.Center>
                                <SplitPage.Right />
                            </SplitPage.Body>
                        </>
                    )}
                </SplitPage>
            )}
        </LoadTransition>
    );
};

export default Profile;
