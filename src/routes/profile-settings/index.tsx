import { faCog, faStar, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
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
import PlaceholderFeed from '../../views/placeholder-feed';
import { useAuth0 } from '@auth0/auth0-react';
import Input from '../../components/input';
import axios from 'axios';

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

const title = {
    [SettingsPage.Account]: 'Account.',
    [SettingsPage.Profile]: 'Profile.',
    [SettingsPage.Support]: 'Support.',
};

const ProfileSettings = () => {
    const [currentPage, setCurrentPage] = useState<SettingsPage>(SettingsPage.Profile);
    const { data, isLoading } = useUserProfile();

    return (
        <LoadTransition>
            <SEO title="Profile Settings" />

            {!isLoading && (
                <SplitPage title={title[currentPage]} leftIcon={faBars}>
                    {({ leftDrawer, closeLeftDrawer }: RenderProps) => {
                        const handleDrawerInput = (func: () => any) => {
                            func();
                            closeLeftDrawer && closeLeftDrawer();
                        };

                        return (
                            <SplitPage.Body disableProfileControls>
                                <SplitPage.Left isDrawerOpen={leftDrawer} onCloseDrawer={closeLeftDrawer}>
                                    <List active>
                                        <List.Item
                                            isActive={currentPage === SettingsPage.Profile}
                                            onClick={() =>
                                                handleDrawerInput(() => setCurrentPage(SettingsPage.Profile))
                                            }
                                        >
                                            <FontAwesomeIcon className="mr-6" icon={faUser} />
                                            Profile
                                        </List.Item>
                                        <List.Item
                                            isActive={currentPage === SettingsPage.Account}
                                            onClick={() =>
                                                handleDrawerInput(() => setCurrentPage(SettingsPage.Account))
                                            }
                                        >
                                            <FontAwesomeIcon className="mr-6" icon={faCog} />
                                            Account
                                        </List.Item>
                                        <List.Item
                                            isActive={currentPage === SettingsPage.Support}
                                            onClick={() =>
                                                handleDrawerInput(() => setCurrentPage(SettingsPage.Support))
                                            }
                                        >
                                            <FontAwesomeIcon className="mr-6" icon={faStar} />
                                            Support
                                        </List.Item>
                                    </List>
                                </SplitPage.Left>
                                <SplitPage.Center>
                                    <div className="mx-2 sm:mx-0">
                                        <h1 className="text-2xl font-bold">{title[currentPage]}</h1>

                                        {currentPage === SettingsPage.Profile && (
                                            <Profile profile={data as CurrentProfileDetail} />
                                        )}
                                        {currentPage === SettingsPage.Account && <Account />}
                                        {currentPage === SettingsPage.Support && <Support />}
                                    </div>
                                </SplitPage.Center>
                            </SplitPage.Body>
                        );
                    }}
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
            <h2 className="mb-8">Adjust your profile page content and more.</h2>
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
            <Button className="ml-auto w-full sm:w-auto mt-4" variant="primary" disabled={!schemaValid}>
                Save
            </Button>

            <PlaceholderFeed count={2} />
        </>
    );
};

const Account = () => {
    const { user } = useAuth0();
    const [passwordResetStatus, setPasswordResetStatus] = useState<'initial' | 'loading' | 'success'>('initial');

    const handleResetPassword = async () => {
        setPasswordResetStatus('loading');

        await axios
            .post(
                'https://hobbyist.eu.auth0.com/dbconnections/change_password',
                {
                    client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
                    email: user.email,
                    connection: 'Username-Password-Authentication',
                },
                { headers: { 'content-type': 'application/json' } }
            )
            .then((res) => res.status === 200 && setPasswordResetStatus('success'));
    };

    return (
        <>
            <h2 className="mb-8">Edit account details such as your email address, password or mail preferences.</h2>

            <label>
                Name:
                <Input disabled className="block mt-2 w-full" id="emailAddress" value={user.name} />
            </label>
            <Button
                disabled={passwordResetStatus !== 'initial'}
                className="mt-3"
                variant="primary"
                onClick={() => handleResetPassword()}
            >
                Change Name
            </Button>

            <hr className="my-6" />

            <label>
                Email Address:
                <Input disabled className="block mt-2 w-full" id="emailAddress" value={user.email} />
            </label>

            <div className="mt-6">
                <label>
                    Password:
                    <Input disabled className="block mt-2 w-full" id="emailAddress" value="****************" />
                </label>

                {user.sub.includes('auth0|') && (
                    <Button
                        disabled={passwordResetStatus !== 'initial'}
                        className="mt-3"
                        variant="primary"
                        onClick={() => handleResetPassword()}
                    >
                        Change Password
                    </Button>
                )}
                {passwordResetStatus === 'success' && (
                    <LoadTransition>
                        <p className="p-3 mt-2  bg-green-200 border rounded-lg">
                            Password reset sent. Please check your inbox for further instructions.
                        </p>
                    </LoadTransition>
                )}
            </div>

            <hr className="my-6" />
        </>
    );
};

const Support = () => {
    return (
        <>
            <h2 className="mb-8 ">Consider supporting the maintenance and active development of the site.</h2>

            <p>
                Thanks for using hobbyist. This site is developed by one developer in their spare time. If you fancy
                giving a coffee or contributing towards hosting the site, consider becoming a supporter below. You'll
                get a <b>cool badge</b> on your profile, <b>zero ads</b> and potentially more (I'm always open to
                feature suggestions).
            </p>

            <p className="text-xl mt-4">
                Supporter Status: <span className="text-yellow-500">Not Active</span>
            </p>
            <Button className="mt-4" variant="primary">
                Become a supporter!
            </Button>
        </>
    );
};

export default ProfileSettings;
