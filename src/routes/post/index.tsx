import React from 'react';
import { useParams } from 'react-router-dom';

import DetailPostCard from '../../components/detail-post-card';

import LoadTransition from '../../components/load-transition';
import SEO from '../../components/seo';
import { usePost } from '../../hooks/queries';
import { PostTypes, TextPost } from '../../types';
import SplitPage from '../../views/split-page';
import TextEditor from '../../views/text-editor';

const Post = () => {
    const { slug, token } = useParams<{ slug: string; token: string }>();

    const { data, isSuccess } = usePost(slug, token);

    return (
        <LoadTransition>
            <SEO title={isSuccess ? (data as PostTypes).title : 'Loading'} />
            {isSuccess && (
                <SplitPage>
                    <SplitPage.Body disableProfileControls>
                        <SplitPage.Center>
                            <DetailPostCard {...(data as TextPost)}>
                                <TextEditor readOnly initialValue={(data as TextPost).content} />
                            </DetailPostCard>
                        </SplitPage.Center>
                        <SplitPage.Right />
                    </SplitPage.Body>
                </SplitPage>
            )}
        </LoadTransition>
    );
};

export default Post;
