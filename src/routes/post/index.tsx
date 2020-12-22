import React from 'react';
import { useParams } from 'react-router-dom';

import DetailPostCard from '../../components/detail-post-card';
import IconButton from '../../components/icon-button';
import LoadTransition from '../../components/load-transition';
import ProfileHead from '../../components/profile-head';
import SEO from '../../components/seo';
import { useHobby, usePost } from '../../hooks/queries';
import { PostTypes, TextPost } from '../../types';
import SplitPage, { RenderProps } from '../../views/split-page';
import TextEditor from '../../views/text-editor';

const title = 'Post.';

const Post = () => {
    const { slug, token } = useParams<{ slug: string; token: string }>();

    const { data, isSuccess } = usePost(slug, token);
    const { data: hobbyData, isSuccess: hobbySuccess } = useHobby(slug);

    return (
        <LoadTransition>
            <SEO title={isSuccess ? (data as PostTypes).title : 'Loading'} />
            {isSuccess && hobbySuccess && (
                <SplitPage>
                    {({ leftDrawer, closeLeftDrawer }: RenderProps) => (
                        <>
                            <SplitPage.Top>
                                <ProfileHead
                                    title={hobbyData?.name ?? 'Not Found'}
                                    description={hobbyData?.description}
                                    profileSrc={hobbyData?.profileSrc ?? ''}
                                    headerSrc={hobbyData?.bannerSrc ?? ''}
                                />
                            </SplitPage.Top>
                            <SplitPage.Body onCloseLeftDrawer={closeLeftDrawer} leftDrawerOpen={leftDrawer}>
                                <SplitPage.Center>
                                    <DetailPostCard {...(data as TextPost)}>
                                        <TextEditor readOnly initialValue={(data as TextPost).content} />
                                    </DetailPostCard>
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

export default Post;
