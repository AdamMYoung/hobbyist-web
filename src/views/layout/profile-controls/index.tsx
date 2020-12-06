import { useAuth0 } from '@auth0/auth0-react';
import { faBook, faComments, faMap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../../components/button';
import List from '../../../components/list';
import UserProfile from '../../../components/user-profile';

const ProfileControls = () => {
    const { isAuthenticated, isLoading, user, logout, loginWithRedirect } = useAuth0();
    const history = useHistory();

    return (
        <>
            <List active>
                {isAuthenticated && (
                    <List.Item onClick={() => history.push('/profile')}>
                        <div className="flex items-center my-2">
                            <UserProfile size="sm" src={user.image} alt={user.name}>
                                <p>{user.name}</p>
                            </UserProfile>
                            <Button variant="primary" className="hidden sm:block ml-auto" onClick={() => logout()}>
                                Sign Out
                            </Button>
                        </div>
                    </List.Item>
                )}
                {!isAuthenticated && !isLoading && <List.Item onClick={() => loginWithRedirect()}>Sign In</List.Item>}
                {isLoading && <List.Item>Loading...</List.Item>}
                <List.Item onClick={() => history.push('/')}>
                    <FontAwesomeIcon className="mr-2" icon={faComments} />
                    Feed
                </List.Item>
                <List.Item onClick={() => history.push('/hobbies')}>
                    <FontAwesomeIcon className="mr-2" icon={faBook} />
                    Hobbies
                </List.Item>
                <List.Item onClick={() => history.push('/meetups')}>
                    <FontAwesomeIcon className="mr-2" icon={faMap} />
                    Meetups
                </List.Item>
            </List>
            {isAuthenticated && (
                <Button variant="primary" className="block sm:hidden mt-4 mx-auto" onClick={() => logout()}>
                    Sign Out
                </Button>
            )}
        </>
    );
};

export default ProfileControls;
