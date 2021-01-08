import { faCog, faHamburger, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useMemo, useState } from 'react';
import * as yup from 'yup';

import List from '../../components/list';
import LoadTransition from '../../components/load-transition';
import EditableProfileHead from '../../components/profile-head-edit';
import SEO from '../../components/seo';
import Button from '../../components/button';
import { useUserProfile } from '../../hooks/queries';
import { CurrentProfileDetail, UpdateProfileRequest } from '../../types';
import { toBase64 } from '../../utils/imageUtils';
import SplitPage, { RenderProps } from '../../views/split-page';

enum SettingsPage {
    'Profile',
    'Account',
    'Support',
}

const schema = yup.object().shape({
    username: yup.string().required(),
    description: yup.string().required(),
    profileImgBase64: yup.string().required(),
    bannerImgBase64: yup.string().required(),
});

const ProfileSettings = () => {
    const [currentPage, setCurrentPage] = useState<SettingsPage>(SettingsPage.Profile);
    const { data, isLoading } = useUserProfile();

    const title = {
        [SettingsPage.Account]: 'Account.',
        [SettingsPage.Profile]: 'Profile.',
        [SettingsPage.Support]: 'Support.',
    };

    return (
        <LoadTransition>
            <SEO title="Profile Settings" />

            {!isLoading && (
                <SplitPage title={title[currentPage]} leftIcon={faHamburger}>
                    {({ leftDrawer, closeLeftDrawer }: RenderProps) => (
                        <SplitPage.Body
                            disableProfileControls
                            leftDrawerOpen={leftDrawer}
                            onCloseLeftDrawer={closeLeftDrawer}
                        >
                            <SplitPage.Left>
                                <List active>
                                    <List.Item
                                        isActive={currentPage === SettingsPage.Profile}
                                        onClick={() => setCurrentPage(SettingsPage.Profile)}
                                    >
                                        <FontAwesomeIcon className="mr-6" icon={faUser} />
                                        Profile
                                    </List.Item>
                                    <List.Item
                                        isActive={currentPage === SettingsPage.Account}
                                        onClick={() => setCurrentPage(SettingsPage.Account)}
                                    >
                                        <FontAwesomeIcon className="mr-6" icon={faCog} />
                                        Account
                                    </List.Item>
                                    <List.Item
                                        isActive={currentPage === SettingsPage.Support}
                                        onClick={() => setCurrentPage(SettingsPage.Support)}
                                    >
                                        <FontAwesomeIcon className="mr-6" icon={faStar} />
                                        Support
                                    </List.Item>
                                </List>
                            </SplitPage.Left>
                            <SplitPage.Center>
                                <SplitPage.Center.Header title={title[currentPage]} />

                                <div className="mt-4">
                                    {currentPage === SettingsPage.Profile && (
                                        <Profile profile={data as CurrentProfileDetail} />
                                    )}
                                    {currentPage === SettingsPage.Account && <Account />}
                                    {currentPage === SettingsPage.Support && <Support />}
                                </div>
                            </SplitPage.Center>
                            <SplitPage.Right />
                        </SplitPage.Body>
                    )}
                </SplitPage>
            )}
        </LoadTransition>
    );
};

const Profile = (props: { profile: CurrentProfileDetail }) => {
    const { username: profileUsername, description: profileDescription, profileSrc, bannerSrc } = props.profile;

    const [schemaValid, setSchemaValid] = useState<boolean>(false);
    const [username, setUsername] = useState<string>(profileUsername);
    const [description, setDescription] = useState<string | undefined>(profileDescription);
    const [profileImg, setProfileImg] = useState<File>();
    const [bannerImg, setBannerImg] = useState<File>();
    const [profileImgBase64, setProfileImgBase64] = useState<string>(profileSrc);
    const [bannerImgBase64, setBannerImgBase64] = useState<string | undefined>(bannerSrc);

    const profileRequest: Partial<UpdateProfileRequest> = useMemo(
        () => ({
            username,
            description,
            profileImgBase64,
            bannerImgBase64,
        }),
        [username, description, profileImgBase64, bannerImgBase64]
    );

    /**
     * Validates the existing schema when the hobby request object changes.
     */
    useEffect(() => {
        const validateSchema = async () => {
            await schema.isValid(profileRequest).then(setSchemaValid);
        };

        validateSchema();
    }, [profileRequest]);

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

    return (
        <>
            <EditableProfileHead
                name={username}
                description={description}
                profileImgBase64={profileImgBase64}
                bannerImgBase64={bannerImgBase64}
                onNameChanged={setUsername}
                onDescriptionChanged={setDescription}
                onProfileImgChanged={setProfileImg}
                onBannerImgChanged={setBannerImg}
            />
            <Button className="ml-auto mt-4" variant="primary" disabled={!schemaValid}>
                Save
            </Button>
        </>
    );
};

const Account = () => {
    return <div />;
};

const Support = () => {
    return <div />;
};

export default ProfileSettings;
