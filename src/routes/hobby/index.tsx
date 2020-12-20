import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Button from '../../components/button';
import IconButton from '../../components/icon-button';
import LoadTransition from '../../components/load-transition';
import ProfileHead from '../../components/profile-head';
import SEO from '../../components/seo';
import { FeedSortType } from '../../types';
import Feed from '../../views/feed';
import FeedSortButtons from '../../views/feed-sort-buttons';
import FeedSortDropdown from '../../views/feed-sort-dropdown';
import SplitPage, { RenderProps } from '../../views/split-page';
import { useHobby } from '../../hooks/queries';
import { useMutateHobbyFollowState } from '../../hooks/mutations';

const Hobby: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();

    const history = useHistory();
    const [feedSortType, setFeedSortType] = useState<FeedSortType>(FeedSortType.Feed);

    const { data, isSuccess } = useHobby(slug);
    const { setFollowing, isLoading } = useMutateHobbyFollowState(slug);

    return (
        <LoadTransition>
            <SEO title={data?.name ?? 'Loading'} />

            {isSuccess && (
                <SplitPage
                    headerNavContent={
                        <FeedSortDropdown currentSortType={feedSortType} onSortChanged={setFeedSortType} />
                    }
                >
                    {({ leftDrawer, closeLeftDrawer }: RenderProps) => (
                        <>
                            <SplitPage.Top>
                                <ProfileHead
                                    title={data?.name ?? 'Not Found'}
                                    description={data?.description}
                                    profileSrc={data?.profileSrc ?? ''}
                                    headerSrc={data?.bannerSrc ?? ''}
                                >
                                    <div className="flex flex-wrap sm:ml-auto sm:mr-4 lg:mr-0 mb-auto mt-2">
                                        {data?.following && (
                                            <Button
                                                className="m-1"
                                                variant="primary"
                                                onClick={() => history.push(`/new-post/${slug}`)}
                                            >
                                                New Post
                                            </Button>
                                        )}
                                        {data?.following ? (
                                            <IconButton
                                                size="2x"
                                                onClick={() => !isLoading && setFollowing(false)}
                                                icon={faSignOutAlt}
                                                color="#8b5cf6"
                                                bgColor="purple"
                                            />
                                        ) : (
                                            <Button
                                                onClick={() => !isLoading && setFollowing(true)}
                                                className="m-1"
                                                variant="primary"
                                            >
                                                Follow
                                            </Button>
                                        )}
                                    </div>
                                </ProfileHead>
                            </SplitPage.Top>
                            <SplitPage.Body onCloseLeftDrawer={closeLeftDrawer} leftDrawerOpen={leftDrawer}>
                                <SplitPage.Center>
                                    <SplitPage.Center.Header>
                                        <FeedSortButtons
                                            currentSortType={feedSortType}
                                            onSortChanged={setFeedSortType}
                                        />
                                    </SplitPage.Center.Header>

                                    <Feed />
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

export default Hobby;
