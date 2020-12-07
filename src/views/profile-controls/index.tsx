import { useAuth0 } from '@auth0/auth0-react';
import { faBook, faComments, faMap, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/button';
import List from '../../components/list';
import UserProfile from '../../components/user-profile';
import { Hobby } from '../../types';

const Hobbies: Hobby[] = [
    {
        id: 'one',
        title: 'Drawing',
        src: 'https://via.placeholder.com/400',
        description: 'A thing where you do a hobby',
        memberCount: 1500,
    },
    {
        id: 'one',
        title: 'Drawing',
        src: 'https://via.placeholder.com/400',
        description: 'A thing where you do a hobby',
        memberCount: 1500,
    },
    {
        id: 'one',
        title: 'Drawing',
        src: 'https://via.placeholder.com/400',
        description: 'A thing where you do a hobby',
        memberCount: 1500,
    },
    {
        id: 'one',
        title: 'Drawing',
        src: 'https://via.placeholder.com/400',
        description: 'A thing where you do a hobby',
        memberCount: 1500,
    },
    {
        id: 'one',
        title: 'Drawing',
        src: 'https://via.placeholder.com/400',
        description: 'A thing where you do a hobby',
        memberCount: 1500,
    },
    {
        id: 'one',
        title: 'Drawing',
        src: 'https://via.placeholder.com/400',
        description: 'A thing where you do a hobby',
        memberCount: 1500,
    },
];

const FeaturedHobbies = () => {
    const history = useHistory();

    return (
        <>
            <h1 className="text-xl font-semibold">Featured Hobbies</h1>
            <List active>
                {Hobbies.map((hobby) => (
                    <List.Item key={hobby.id} onClick={() => history.push(`/h/${hobby.id}`)}>
                        <UserProfile size="xs" src={hobby.src} title={hobby.title} />
                    </List.Item>
                ))}
            </List>
        </>
    );
};

const UserHobbies = () => {
    const history = useHistory();

    return (
        <>
            <h1 className="text-xl font-semibold">Your Hobbies</h1>
            <List active>
                {Hobbies.map((hobby) => (
                    <List.Item key={hobby.id} onClick={() => history.push(`/h/${hobby.id}`)}>
                        <UserProfile size="xs" src={hobby.src} title={hobby.title} />
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
            <List noTopPadding active>
                {isAuthenticated && (
                    <List.Item onClick={() => history.push('/profile')}>
                        <div className="flex items-center">
                            <UserProfile size="sm" src={user.picture} title={user.name} />
                        </div>
                    </List.Item>
                )}
                {!isAuthenticated && !isLoading && (
                    <List.Item onClick={() => loginWithRedirect()}>
                        <FontAwesomeIcon className="mr-6" icon={faUser} />
                        Sign In
                    </List.Item>
                )}
                {isLoading && <List.Item>Loading...</List.Item>}
                <List.Item onClick={() => history.push('/')}>
                    <FontAwesomeIcon className="mr-5" icon={faComments} />
                    Feed
                </List.Item>
                <List.Item onClick={() => history.push('/hobbies')}>
                    <FontAwesomeIcon className="mr-6" icon={faBook} />
                    Hobbies
                </List.Item>
                <List.Item onClick={() => history.push('/meetups')}>
                    <FontAwesomeIcon className="mr-5" icon={faMap} />
                    Meetups
                </List.Item>
            </List>

            <hr className="mt-2 mb-6" />

            {isAuthenticated ? <UserHobbies /> : <FeaturedHobbies />}

            {isAuthenticated && (
                <Button variant="primary" className="block sm:hidden mt-4 mx-auto" onClick={() => logout()}>
                    Sign Out
                </Button>
            )}
        </>
    );
};

export default ProfileControls;
