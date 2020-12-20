import { useAuth0 } from '@auth0/auth0-react';
import { faBook, faComments, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/button';
import List from '../../components/list';
import LoadTransition from '../../components/load-transition';
import ProfileIcon from '../../components/profile-icon';
import UserProfile from '../../components/user-profile';
import { useUserHobbies } from '../../hooks/queries';
import { getMetadata } from '../../utils/userUtils';

type HobbiesProps = {
    title: string;
};

const ProfileHobbies = (props: HobbiesProps) => {
    const { user } = useAuth0();
    const history = useHistory();

    const { data, isSuccess } = useUserHobbies(getMetadata(user, 'username'));

    return (
        <>
            <h1 className="ml-2 text-xl font-semibold mb-2">{props.title}</h1>
            <List narrow active>
                {isSuccess &&
                    data?.map((hobby) => (
                        <List.Item key={hobby.slug} onClick={() => history.push(`/hobby/${hobby.slug}`)}>
                            <div className="flex items-center">
                                <ProfileIcon size="xs" src={hobby.profileSrc} alt={hobby.name} />
                                <p className="ml-2">{hobby.name}</p>
                            </div>
                        </List.Item>
                    ))}
            </List>
        </>
    );
};

const ProfileControls = () => {
    const { isAuthenticated, isLoading, user, logout, loginWithRedirect } = useAuth0();
    const history = useHistory();

    return (
        <>
            <List active>
                {isAuthenticated && (
                    <List.Item aria-label="My Profile" onClick={() => history.push('/profile')}>
                        <div className="flex items-center">
                            <LoadTransition>
                                <UserProfile size="sm" src={user.picture} title="My Profile" />
                            </LoadTransition>
                        </div>
                    </List.Item>
                )}
                {!isAuthenticated && !isLoading && (
                    <List.Item aria-label="Sign In" onClick={() => loginWithRedirect()}>
                        <FontAwesomeIcon className="mr-6" icon={faUser} />
                        Sign In
                    </List.Item>
                )}
                {isLoading && <List.Item aria-label="Loading">Loading...</List.Item>}
                <List.Item aria-label="Feed" onClick={() => history.push('/')}>
                    <FontAwesomeIcon className="mr-5" icon={faComments} />
                    Feed
                </List.Item>
                <List.Item aria-label="Hobbies" onClick={() => history.push('/hobbies')}>
                    <FontAwesomeIcon className="mr-6" icon={faBook} />
                    Hobbies
                </List.Item>
            </List>

            <div className="mt-6">
                <ProfileHobbies title={isAuthenticated ? 'Your Hobbies' : 'Featured Hobbies'} />
            </div>

            {isAuthenticated && (
                <LoadTransition>
                    <Button
                        aria-label="Sign Out"
                        variant="primary"
                        className="block sm:hidden mt-4 mx-auto"
                        onClick={() => logout()}
                    >
                        Sign Out
                    </Button>
                </LoadTransition>
            )}
        </>
    );
};

export default ProfileControls;
