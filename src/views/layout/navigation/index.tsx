import { Link } from 'react-router-dom';

import UserProfile from '../../../components/user-profile';
import { Logo, NavBar, NavMenu, NavItem } from './styles';

const Navigation = () => {
    return (
        <NavBar>
            <Link to="/">
                <Logo>hobbyist</Logo>
            </Link>

            <NavMenu className="mt-4 lg:mt-0 lg:ml-auto mr-6 order-1 lg:order-none w-full lg:w-auto">
                <NavItem>
                    <Link to="/home">Home</Link>
                </NavItem>
                <NavItem>Hobbies</NavItem>
                <NavItem>Meetups</NavItem>
            </NavMenu>

            <div className="ml-auto lg:ml-0 ">
                <UserProfile onClick={console.log} name="John Doe" src="https://via.placeholder.com/150" />
            </div>
        </NavBar>
    );
};

export default Navigation;
