import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useHistory, useParams } from 'react-router-dom';

import Button from '../../components/button';
import IconButton from '../../components/icon-button';
import LoadTransition from '../../components/load-transition';
import ProfileHead from '../../components/profile-head';
import SEO from '../../components/seo';
import { useAuthAxios } from '../../hooks/useAuthAxios';
import { FeedSortType } from '../../types';
import Feed from '../../views/feed';
import FeedSortButtons from '../../views/feed-sort-buttons';
import FeedSortDropdown from '../../views/feed-sort-dropdown';
import SplitPage, { RenderProps } from '../../views/split-page';
import { Hobby as HobbyModel } from '../../types';

const Hobby: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();

    const history = useHistory();
    const [feedSortType, setFeedSortType] = useState<FeedSortType>(FeedSortType.Feed);
    const [following, setFollowing] = useState<boolean>(false);

    const getAxios = useAuthAxios();
    const { data, isLoading, isError, isSuccess } = useQuery(
        `hobby/${slug}`,
        async () => {
            const { data } = await getAxios().then((axios) => axios.get<HobbyModel>(`/hobbies/${slug}`));
            return data;
        },
        { retry: false, refetchOnWindowFocus: false }
    );

    useEffect(() => {
        if (isError) history.replace('/not-found');
    }, [isError, history]);

    useEffect(() => {}, [isLoading]);

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
                                        {following && (
                                            <Button className="m-1" variant="primary">
                                                New Post
                                            </Button>
                                        )}
                                        {following ? (
                                            <IconButton
                                                size="2x"
                                                onClick={() => setFollowing(false)}
                                                icon={faSignOutAlt}
                                                color="#8b5cf6"
                                                bgColor="purple"
                                            />
                                        ) : (
                                            <Button
                                                onClick={() => setFollowing(true)}
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
