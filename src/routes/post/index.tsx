import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import DetailPostCard from '../../components/detail-post-card';
import IconButton from '../../components/icon-button';
import LoadTransition from '../../components/load-transition';
import SEO from '../../components/seo';
import { usePost } from '../../hooks/queries';
import { PostTypes, TextPost } from '../../types';
import SplitPage from '../../views/split-page';
import TextEditor from '../../views/text-editor';

const Post = () => {
    const { slug, token } = useParams<{ slug: string; token: string }>();

    const history = useHistory();
    const { data, isSuccess } = usePost(slug, token);

    return (
        <LoadTransition>
            <SEO title={isSuccess ? (data as PostTypes).title : 'Loading'} />
            {isSuccess && (
                <SplitPage>
                    <SplitPage.Body disableProfileControls>
                        <SplitPage.Center>
                            <IconButton
                                className="mb-2"
                                icon={faArrowLeft}
                                text="Back"
                                onClick={() => history.push(`/hobby/${slug}`)}
                            />

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
