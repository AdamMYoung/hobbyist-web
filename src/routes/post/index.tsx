import React from 'react';
import { useParams } from 'react-router-dom';

import DetailPostCard from '../../components/detail-post-card';
import LoadTransition from '../../components/load-transition';
import SEO from '../../components/seo';
import { useHobby, usePost } from '../../hooks/queries';
import { HobbyDetail, PostTypes, TextPost } from '../../types';
import PlaceholderPost from '../../views/placeholder-post';
import SplitPage from '../../views/split-page';
import TextEditor from '../../views/text-editor';

const Post = () => {
    const { slug, token } = useParams<{ slug: string; token: string }>();

    const { data: post, isLoading: getPostLoading } = usePost(slug, token);
    const { data: hobby, isLoading: getHobbyLoading } = useHobby(slug);

    const isLoading = getPostLoading && getHobbyLoading;

    return (
        <LoadTransition>
            <SEO title={!isLoading ? (post as PostTypes).title : 'Loading'} />
            {!isLoading ? (
                <SplitPage>
                    <SplitPage.Body disableProfileControls>
                        <SplitPage.Center>
                            <DetailPostCard {...(post as TextPost)} hobby={hobby as HobbyDetail}>
                                <TextEditor readOnly initialValue={(post as TextPost).content} />
                            </DetailPostCard>
                        </SplitPage.Center>
                        <SplitPage.Right />
                    </SplitPage.Body>
                </SplitPage>
            ) : (
                <SplitPage>
                    <SplitPage.Body disableProfileControls>
                        <SplitPage.Center>
                            <PlaceholderPost animated />
                        </SplitPage.Center>
                        <SplitPage.Right />
                    </SplitPage.Body>
                </SplitPage>
            )}
        </LoadTransition>
    );
};

export default Post;
