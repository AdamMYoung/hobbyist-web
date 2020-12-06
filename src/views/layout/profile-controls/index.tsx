import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import List from '../../../components/list';
import UserProfile from '../../../components/user-profile';

const ProfileControls = () => {
    const { isAuthenticated, isLoading, user, logout } = useAuth0();
    const history = useHistory();

    return (
        <>
            <List active>
                {isAuthenticated && (
                    <List.Item onClick={() => history.push('/profile')}>
                        <UserProfile src={user.image}>
                            <p>{user.name}</p>
                        </UserProfile>
                    </List.Item>
                )}
                {!isAuthenticated && !isLoading && <List.Item>Sign In</List.Item>}
                {isLoading && <List.Item>Loading...</List.Item>}
                <List.Item onClick={() => history.push('/')}>Feed</List.Item>
                <List.Item onClick={() => history.push('/hobbies')}>Hobbies</List.Item>
                <List.Item onClick={() => history.push('/meetups')}>Meetups</List.Item>
            </List>
            {isAuthenticated && (
                <List active>
                    <List.Item onClick={() => logout()}>Sign Out</List.Item>
                </List>
            )}
        </>
    );
};

export default ProfileControls;
