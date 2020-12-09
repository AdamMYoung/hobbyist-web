import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../../components/button';
import LoadTransition from '../../components/load-transition';
import ProfileHead from '../../components/profile-head';
import SEO from '../../components/seo';
import { FeedSortType } from '../../types';
import Feed from '../../views/feed';
import FeedSortButtons from '../../views/feed-sort-buttons';
import FeedSortDropdown from '../../views/feed-sort-dropdown';
import SplitPage, { RenderProps } from '../../views/split-page';

const Hobby: React.FC = () => {
    const { hobbyId } = useParams<{ hobbyId: string }>();
    const [feedSortType, setFeedSortType] = useState<FeedSortType>(FeedSortType.Feed);

    return (
        <LoadTransition>
            <SEO title={hobbyId} />

            <SplitPage
                rightIcon={faCalendarAlt}
                headerNavContent={<FeedSortDropdown currentSortType={feedSortType} onSortChanged={setFeedSortType} />}
            >
                {({ rightDrawer, closeRightDrawer }: RenderProps) => (
                    <>
                        <SplitPage.Center>
                            <div className="pb-8 sm:py-4 mx-2">
                                <ProfileHead
                                    title={hobbyId}
                                    description="This is the description"
                                    profileSrc="https://via.placeholder.com/150"
                                    headerSrc="https://via.placeholder.com/150"
                                >
                                    <Button variant="primary" className="sm:ml-auto sm:mr-4 lg:mr-0 mb-auto mt-2">
                                        Follow
                                    </Button>
                                </ProfileHead>
                            </div>

                            <SplitPage.Center.Header>
                                <FeedSortButtons currentSortType={feedSortType} onSortChanged={setFeedSortType} />
                            </SplitPage.Center.Header>

                            <Feed />
                        </SplitPage.Center>
                        <SplitPage.Right isDrawerOpen={rightDrawer} onCloseDrawer={closeRightDrawer}>
                            <div className="sm:mt-2">
                                <SplitPage.Header title="Upcoming Events" />
                            </div>
                        </SplitPage.Right>
                    </>
                )}
            </SplitPage>
        </LoadTransition>
    );
};

export default Hobby;
