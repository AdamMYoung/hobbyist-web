import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import Button from '../../../components/button';
import Input from '../../../components/input';
import UserProfile from '../../../components/user-profile';
import { Logo, NavBar, NavMenu, NavItem } from './styles';
import Drawer from '../../../components/drawer';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import List from '../../../components/list';
import IconButton from '../../../components/icon-button';

const Navigation = () => {
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const history = useHistory();
    const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();

    const Profile = () => {
        if (isAuthenticated) {
            return (
                <UserProfile
                    onClick={() => history.push('/profile')}
                    name={user.name}
                    src={user.picture}
                    alt={user.name}
                />
            );
        }

        if (isLoading) {
            return <p className="mx-2 text-xl font-semibold">Loading...</p>;
        }

        return (
            <Button className="mx-2" variant="primary" onClick={() => loginWithRedirect()}>
                Login
            </Button>
        );
    };

    return (
        <div className="sticky top-0 bg-white z-20 border-b-2 border-gray-200">
            <div className="lg:container">
                <NavBar>
                    <Link to="/">
                        <Logo className="block sm:hidden">h.</Logo>
                        <Logo className="hidden sm:block">hobbyist.</Logo>
                    </Link>

                    <Input type="text" size={1} className="mx-4 md:max-w-sm flex-grow" placeholder="Search" />
                    <IconButton className="md:hidden" icon={faBars} onClick={() => setDrawerOpen(true)} />

                    <div className="hidden md:flex sm:ml-auto w-auto items-center mt-4 md:mt-0">
                        <NavMenu className="mx-auto">
                            <NavItem>
                                <Link to="/">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/hobbies">Hobbies</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/meetups">Meetups</Link>
                            </NavItem>
                        </NavMenu>

                        <div className="mx-auto ml-2">
                            <Profile />
                        </div>
                    </div>
                </NavBar>
            </div>

            <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <Profile />
                <hr className="mt-4 mb-2 border-b-2" />
                <List active>
                    <List.Item>
                        <Link to="/">Home</Link>
                    </List.Item>
                    <List.Item>
                        <Link to="/hobbies">Hobbies</Link>
                    </List.Item>
                    <List.Item>
                        <Link to="/meetups">Meetups</Link>
                    </List.Item>
                </List>
                <hr className="mt-4 mb-2 border-b-2" />
                <List active>
                    <List.Item onClick={() => logout()}>Logout</List.Item>
                </List>
            </Drawer>
        </div>
    );
};

export default Navigation;
