import React from 'react';
import { useParams } from 'react-router-dom';

import Button from '../../components/button';
import LoadTransition from '../../components/load-transition';
import ProfileHead from '../../components/profile-head';
import SEO from '../../components/seo';
import CreatePost from '../../views/create-post';
import Feed from '../../views/feed';
import SplitPage from '../../views/split-page';

const Hobby: React.FC = () => {
    const { hobbyId } = useParams<{ hobbyId: string }>();

    return (
        <LoadTransition>
            <SEO title={hobbyId} />

            <SplitPage title={hobbyId}>
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

                    <CreatePost />

                    <h2 className="text-3xl ml-2 mt-4 sm:ml-0 font-semibold">Posts</h2>
                    <Feed />
                </SplitPage.Center>
                <SplitPage.Right>
                    <h1 className="text-3xl font-semibold">Members</h1>
                </SplitPage.Right>
            </SplitPage>
        </LoadTransition>
    );
};

export default Hobby;
