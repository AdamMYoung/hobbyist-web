import React, { useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { paramCase } from 'param-case';

import api from '../../api';
import Button from '../../components/button';
import SplitPage from '../../views/split-page';
import EditableProfileHead from '../../components/profile-head-edit';
import { CreateHobbyRequest } from '../../api/hobbies';

import { toBase64 } from '../../utils/imageUtils';

const schema = yup.object().shape({
    slug: yup.string().required(),
    name: yup.string().required(),
    description: yup.string().required(),
    profileImgBase64: yup.string().required(),
    bannerImgBase64: yup.string().required(),
});

const NewHobby = () => {
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
            if (profileImg) {
                await toBase64(profileImg).then(setProfileImgBase64);
            }
        };

        parseImg();
    }, [profileImg]);

    /**
     * Parses the set banner image into a compressed base64 string.
     */
    useEffect(() => {
        const parseImg = async () => {
            if (bannerImg) {
                await toBase64(bannerImg).then(setBannerImgBase64);
            }
        };

        parseImg();
    }, [bannerImg]);

    /**
     * Uploads the current hobby entry to the API if the schema is valid.
     */
    const handleSubmit = async () => {
        //Hobby is cast as schema would be invalid if all properties weren't there.
        if (schemaValid) {
            api.hobbies.createHobby(hobbyRequest as CreateHobbyRequest);
        }
    };

    return (
        <SplitPage title="New Hobby.">
            <SplitPage.Center>
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

                <div className="mt-4 flex">
                    <Button className="ml-auto mr-4" variant="link" onClick={() => history.push('/')}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSubmit} disabled={!schemaValid}>
                        Create
                    </Button>
                </div>
            </SplitPage.Center>
        </SplitPage>
    );
};

export default NewHobby;
