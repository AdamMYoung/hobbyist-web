import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Node } from 'slate';

import Button from '../../components/button';
import Input from '../../components/input';
import SEO from '../../components/seo';
import { useMutateUpdatePost } from '../../hooks/mutations';
import { usePost, useUserHobbies } from '../../hooks/queries';
import { Hobby, TextPost } from '../../types';
import { getMetadata } from '../../utils/userUtils';
import HobbiesDropdown from '../../views/hobbies-dropdown';

import SplitPage, { RenderProps } from '../../views/split-page';
import TextEditor from '../../views/text-editor';

const title = 'Edit Post.';

const EditPost = () => {
    const { slug, token } = useParams<{ slug: string; token: string }>();
    const { user } = useAuth0();

    const { data: hobbies, isSuccess: isHobbiesLoaded } = useUserHobbies(getMetadata(user, 'username'));
    const { data: post, isSuccess: isPostLoaded } = usePost(slug, token);

    const [selectedHobby, setSelectedHobby] = useState<Hobby>();
    const [content, setContent] = useState<Node[]>();

    const { mutate: updatePost, isLoading } = useMutateUpdatePost(slug, token);

    useEffect(() => {
        if (isHobbiesLoaded) setSelectedHobby(hobbies?.filter((h) => h.slug === slug)[0]);
    }, [isHobbiesLoaded, hobbies, slug]);

    useEffect(() => {
        if (isPostLoaded) setContent((post as TextPost).content);
    }, [isPostLoaded, post]);

    const handleSubmit = () => {
        if (!!content) {
            updatePost({ content: content ?? [] });
        }
    };

    const SaveButton = () => (
        <Button className="w-full sm:w-auto" variant="primary" onClick={handleSubmit} disabled={!content || isLoading}>
            Save
        </Button>
    );

    const isLoaded = isHobbiesLoaded && isPostLoaded;

    return (
        <>
            <SEO
                title="Edit Post"
                description="Hobbyist is a community around your interests, connecting you to like-minded people with the same passions."
            />
            {isLoaded && (
                <SplitPage title={title}>
                    {({ leftDrawer, closeLeftDrawer }: RenderProps) => (
                        <SplitPage.Body leftDrawerOpen={leftDrawer} onCloseLeftDrawer={closeLeftDrawer}>
                            <SplitPage.Center>
                                <SplitPage.Center.Header title={title}>
                                    <SaveButton />
                                </SplitPage.Center.Header>

                                <div className="block sm:hidden mb-4 mx-2">
                                    <SaveButton />
                                </div>

                                <div className="my-4">
                                    <div className="mb-8">
                                        <HobbiesDropdown
                                            hobbies={hobbies ?? []}
                                            selectedHobby={selectedHobby}
                                            readOnly
                                        />

                                        <Input
                                            className="w-full mt-2"
                                            value={post?.title}
                                            placeholder="Title"
                                            disabled
                                        />
                                        <TextEditor className="mt-2" onChange={setContent} value={content} />
                                    </div>
                                </div>
                            </SplitPage.Center>
                        </SplitPage.Body>
                    )}
                </SplitPage>
            )}
        </>
    );
};

export default EditPost;
