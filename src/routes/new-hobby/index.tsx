import React, { useEffect, useMemo, useState } from 'react';
import * as yup from 'yup';
import { paramCase } from 'param-case';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

import Button from '../../components/button';
import SplitPage, { RenderProps } from '../../views/split-page';
import EditableProfileHead from '../../components/profile-head-edit';
import { CreateHobbyRequest } from '../../api/hobbies';

import { toBase64 } from '../../utils/imageUtils';
import PlaceholderFeed from '../../views/placeholder-feed';
import { useAuthAxios } from '../../hooks/useAuthAxios';
import { useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';

const schema = yup.object().shape({
    slug: yup.string().required(),
    name: yup.string().required(),
    description: yup.string().required(),
    profileImgBase64: yup.string().required(),
    bannerImgBase64: yup.string().required(),
});

const NewHobby = () => {
    const getAxios = useAuthAxios();
    const [mutate, { isLoading, isSuccess }] = useMutation<void, void, CreateHobbyRequest>(async (data) => {
        return await getAxios().then((axios) => axios.post('/hobbies', data));
    });

    const history = useHistory();
    const [schemaValid, setSchemaValid] = useState<boolean>(false);
    const [name, setName] = useState<string>();
    const [description, setDescription] = useState<string>();

    const [profileImg, setProfileImg] = useState<File>();
    const [bannerImg, setBannerImg] = useState<File>();
    const [profileImgBase64, setProfileImgBase64] = useState<string>();
    const [bannerImgBase64, setBannerImgBase64] = useState<string>();

    const hobbyRequest: Partial<CreateHobbyRequest> = useMemo(
        () => ({
            slug: paramCase(name ?? ''),
            name,
            description,
            profileImgBase64,
            bannerImgBase64,
        }),
        [name, description, profileImgBase64, bannerImgBase64]
    );

    useEffect(() => {
        if (isSuccess) history.replace(`/hobby/${hobbyRequest.slug}`);
    }, [isSuccess, history, hobbyRequest.slug]);

    /**
     * Validates the existing schema when the hobby request object changes.
     */
    useEffect(() => {
        const validateSchema = async () => {
            await schema.isValid(hobbyRequest).then(setSchemaValid);
        };

        validateSchema();
    }, [hobbyRequest]);

    /**
     * Parses the set profile image into a compressed base64 string.
     */
    useEffect(() => {
        const parseImg = async () => {
            if (profileImg) await toBase64(profileImg).then(setProfileImgBase64);
        };

        parseImg();
    }, [profileImg]);

    /**
     * Parses the set banner image into a compressed base64 string.
     */
    useEffect(() => {
        const parseImg = async () => {
            if (bannerImg) await toBase64(bannerImg).then(setBannerImgBase64);
        };

        parseImg();
    }, [bannerImg]);

    /**
     * Uploads the current hobby entry to the API if the schema is valid.
     */
    const handleSubmit = async () => {
        //Hobby is cast as schema would be invalid if all properties weren't there.
        if (schemaValid) {
            await mutate(hobbyRequest as CreateHobbyRequest);
        }
    };

    const title = 'Create Hobby.';

    const CreateButton = () => (
        <Button variant="primary" onClick={handleSubmit} disabled={!schemaValid || isLoading}>
            Create
        </Button>
    );

    return (
        <SplitPage title={title} headerNavContent={<CreateButton />} rightIcon={faQuestion}>
            {({ leftDrawer, rightDrawer, closeLeftDrawer, closeRightDrawer }: RenderProps) => (
                <SplitPage.Body leftDrawerOpen={leftDrawer} onCloseLeftDrawer={closeLeftDrawer}>
                    <SplitPage.Center>
                        <SplitPage.Center.Header title={title}>
                            <CreateButton />
                        </SplitPage.Center.Header>
                        <div className="my-4">
                            <EditableProfileHead
                                name={name}
                                description={description}
                                profileImgBase64={hobbyRequest.profileImgBase64}
                                bannerImgBase64={hobbyRequest.bannerImgBase64}
                                onNameChanged={setName}
                                onDescriptionChanged={setDescription}
                                onProfileImgChanged={setProfileImg}
                                onBannerImgChanged={setBannerImg}
                            />
                        </div>
                        <PlaceholderFeed />
                    </SplitPage.Center>

                    <SplitPage.Right isDrawerOpen={rightDrawer} onCloseDrawer={closeRightDrawer}>
                        <SplitPage.Header title="Help." />
                        <p className="mt-2 text-sm font-semibold">To create a new hobby, you'll need to provide:</p>

                        <p className="mt-4 text-lg font-bold">Name</p>
                        <p className="text-sm">
                            This will need to be unique, since this is how you'll find your community later on.
                        </p>

                        <p className="mt-2 text-lg font-bold">Description</p>
                        <p className="text-sm">A brief description to tell people what your hobby is all about.</p>

                        <p className="mt-2 text-lg font-bold">Header Photo</p>
                        <p className="text-sm">A profile picture to represent your hobby.</p>

                        <p className="mt-2 text-lg font-bold">Banner Photo</p>
                        <p className="text-sm">A banner photo to highlight your hobby.</p>

                        <hr className="my-4 border-gray-300" />
                        <p className="mt-2 text-sm">
                            Once you're done, click "Create" at the top of the screen, and your hobby page will be
                            created.
                        </p>

                        <Button variant="primary" className="mb-4 mt-6 w-full" onClick={() => history.replace('/')}>
                            Cancel
                        </Button>

                        <Button variant="primary" className="mt-2 w-full" onClick={() => history.push('/new-post')}>
                            New Post
                        </Button>
                    </SplitPage.Right>
                </SplitPage.Body>
            )}
        </SplitPage>
    );
};

export default NewHobby;
