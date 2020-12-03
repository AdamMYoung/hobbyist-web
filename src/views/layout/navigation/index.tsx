import { Link } from 'react-router-dom';

import UserProfile from '../../../components/user-profile';
import { Logo, NavBar, NavMenu, NavItem } from './styles';

const Navigation = () => {
    return (
        <NavBar>
            <Link to="/">
                <Logo>hobbyist</Logo>
            </Link>

            <div className="flex sm:ml-auto w-full sm:w-auto items-center mt-4 sm:mt-0">
                <NavMenu className="mr-6">
                    <NavItem>
                        <Link to="/home">Home</Link>
                    </NavItem>
                    <NavItem>Hobbies</NavItem>
                    <NavItem>Meetups</NavItem>
                </NavMenu>

                <div className="ml-auto sm:ml-0">
                    <UserProfile onClick={console.log} name="John Doe" src="https://via.placeholder.com/150" />
                </div>
            </div>
        </NavBar>
    );
};

export default Navigation;
