import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../../components/input';
import UserProfile from '../../../components/user-profile';
import { Logo, NavBar, NavMenu, NavItem } from './styles';
import Button from '../../../components/button';
import Drawer from '../../../components/drawer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import List from '../../../components/list';

const Navigation = () => {
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    return (
        <div className="sticky top-0 bg-white z-20 border-b-2 border-gray-200">
            <div className="lg:container">
                <NavBar>
                    <Link to="/">
                        <Logo>hobbyist.</Logo>
                    </Link>

                    <Input type="text" className="mx-4 md:max-w-sm flex-grow" placeholder="Search" />

                    <Button className="md:hidden" onClick={() => setDrawerOpen(true)}>
                        <FontAwesomeIcon size="lg" icon={faBars} />
                    </Button>

                    <div className="hidden md:flex flex-wrap sm:ml-auto w-auto items-center mt-4 md:mt-0">
                        <NavMenu className="mx-auto">
                            <NavItem>
                                <Link to="/home">Home</Link>
                            </NavItem>
                            <NavItem>Hobbies</NavItem>
                            <NavItem>Meetups</NavItem>
                        </NavMenu>

                        <div className="mx-auto sm:ml-0 lg:ml-4">
                            <UserProfile onClick={console.log} name="John Doe" src="https://via.placeholder.com/150" />
                        </div>
                    </div>
                </NavBar>
            </div>

            <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <UserProfile onClick={console.log} name="John Doe" src="https://via.placeholder.com/150" />
                <hr className="mt-4 mb-2 border-b-2" />
                <List active>
                    <List.Item>Home</List.Item>
                    <List.Item>Hobbies</List.Item>
                    <List.Item>Meetups</List.Item>
                </List>
            </Drawer>
        </div>
    );
};

export default Navigation;
