import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import Button from '../../../components/button';
import Input from '../../../components/input';
import { Logo, NavBar } from './styles';
import ProfileIcon from '../../../components/profile-icon';

const Navigation = () => {
    const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
    const history = useHistory();

    return (
        <div className="sticky top-0 bg-white z-20 border-b-2 border-gray-200 h-20">
            <div className="lg:container">
                <NavBar>
                    <div
                        className="cursor-pointer"
                        onClick={() => (window.scrollY > 50 ? window.scrollTo({ top: 0 }) : history.push('/'))}
                    >
                        <Logo className="block sm:hidden">h.</Logo>
                        <Logo className="hidden sm:block">hobbyist.</Logo>
                    </div>

                    <Input
                        aria-label="Search"
                        type="text"
                        size={1}
                        className="mx-4 md:max-w-sm flex-grow"
                        placeholder="Search"
                    />

                    <div className="flex ml-auto">
                        {isAuthenticated && (
                            <Button className="hidden sm:block mr-4" variant="primary">
                                New Post
                            </Button>
                        )}
                        {isAuthenticated && <ProfileIcon src={user.image} alt={user.name} />}
                        {!isAuthenticated && !isLoading && (
                            <Button variant="primary" onClick={() => loginWithRedirect()}>
                                Sign In
                            </Button>
                        )}
                    </div>
                </NavBar>
            </div>
        </div>
    );
};

export default Navigation;
