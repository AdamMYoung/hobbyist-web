import React from 'react';
import { useParams } from 'react-router-dom';
import LoadTransition from '../../components/load-transition';
import SEO from '../../components/seo';
import SplitPage from '../../views/split-page';

const Post = () => {
    const { hobbyId, postId } = useParams<{ hobbyId: string; postId: string }>();

    return (
        <LoadTransition>
            <SEO title={postId} />
            <SplitPage disableProfileControls>
                <SplitPage.Center>
                    <h1>{hobbyId}</h1>
                    <h1>{postId}</h1>
                </SplitPage.Center>
                <SplitPage.Right></SplitPage.Right>
            </SplitPage>
        </LoadTransition>
    );
};

export default Post;
