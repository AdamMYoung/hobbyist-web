import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Button from '../../components/button';
import Input from '../../components/input';
import LoadTransition from '../../components/load-transition';
import SEO from '../../components/seo';
import { useUserHobbies } from '../../hooks/queries';
import { Hobby } from '../../types';
import { getMetadata } from '../../utils/userUtils';
import HobbiesDropdown from '../../views/hobbies-dropdown';

import SplitPage, { RenderProps } from '../../views/split-page';
import TextEditor from '../../views/text-editor';

const title = 'Create Post.';

const NewPost = () => {
    const { slug } = useParams<{ slug?: string }>();
    const { user } = useAuth0();
    const history = useHistory();

    const { data: hobbies, isSuccess } = useUserHobbies(getMetadata(user, 'username'));

    const [postTitle, setPostTitle] = useState<string>();
    const [selectedHobby, setSelectedHobby] = useState<Hobby>();

    useEffect(() => {
        if (isSuccess) {
            setSelectedHobby(hobbies?.filter((h) => h.slug === slug)[0]);
        }
    }, [isSuccess, hobbies, slug]);

    const handleSubmit = () => {};

    return (
        <>
            <SEO description="Hobbyist is a community around your interests, connecting you to like-minded people with the same passions." />
            {isSuccess && (
                <SplitPage title={title}>
                    {({ leftDrawer, closeLeftDrawer }: RenderProps) => (
                        <SplitPage.Body leftDrawerOpen={leftDrawer} onCloseLeftDrawer={closeLeftDrawer}>
                            <SplitPage.Center>
                                <SplitPage.Center.Header title={title}>
                                    <Button variant="primary" onClick={handleSubmit} disabled={true}>
                                        Create
                                    </Button>
                                </SplitPage.Center.Header>

                                <div className="my-4">
                                    <div className="mb-8">
                                        <HobbiesDropdown
                                            hobbies={hobbies ?? []}
                                            selectedHobby={selectedHobby}
                                            onHobbyChange={setSelectedHobby}
                                            readOnly={!!slug}
                                        />

                                        <Input
                                            className="w-full mt-2"
                                            value={postTitle}
                                            placeholder="Title"
                                            onChange={(e) => setPostTitle(e.target.value)}
                                        />
                                        <TextEditor className="mt-2" />
                                    </div>
                                </div>
                            </SplitPage.Center>

                            <SplitPage.Right>
                                <LoadTransition>
                                    <SplitPage.Header title="Help." />

                                    <p className="mt-2 text-sm font-semibold">
                                        To create a new post, you'll need to provide:
                                    </p>

                                    <p className="mt-4 text-lg font-bold">Hobby</p>
                                    <p className="text-sm">Select a hobby you follow, that you want to post to.</p>

                                    <p className="mt-2 text-lg font-bold">Title</p>
                                    <p className="text-sm">A brief title to describe your post.</p>

                                    <p className="mt-2 text-lg font-bold">Content</p>
                                    <p className="text-sm">
                                        Submit the content you wish to show. This can be text, images or even links.
                                    </p>

                                    <hr className="my-4 border-gray-300" />
                                    <p className="mt-2 text-sm">
                                        Once you're done, click "Create" at the top of the screen, and your hobby page
                                        will be created.
                                    </p>
                                </LoadTransition>
                            </SplitPage.Right>
                        </SplitPage.Body>
                    )}
                </SplitPage>
            )}
        </>
    );
};

export default NewPost;
