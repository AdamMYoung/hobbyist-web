import React from 'react';
import { useParams } from 'react-router-dom';

import Button from '../../components/button';
import LoadTransition from '../../components/load-transition';
import ProfileHead from '../../components/profile-head';
import SEO from '../../components/seo';
import Feed from '../../views/feed';
import SplitPage from '../../views/split-page';

const Hobby: React.FC = () => {
    const { hobbyId } = useParams<{ hobbyId: string }>();

    return (
        <LoadTransition>
            <SEO title={hobbyId} />
            <div className="pb-8 sm:pb-4 sm:pt-4">
                <ProfileHead
                    title={hobbyId}
                    description="This is the description"
                    profileSrc="https://via.placeholder.com/150"
                    headerSrc="https://via.placeholder.com/150"
                >
                    <Button variant="primary" className="ml-4">
                        Follow
                    </Button>
                </ProfileHead>
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

export default Hobby;
