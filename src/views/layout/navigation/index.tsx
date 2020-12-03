import { Link } from 'react-router-dom';

import UserProfile from '../../../components/user-profile';
import { Logo, NavBar, NavMenu, NavItem } from './styles';

const Navigation = () => {
    return (
        <NavBar>
            <Link to="/">
                <Logo>hobbyist</Logo>
            </Link>

            <div className="flex flex-wrap sm:ml-auto w-full sm:w-auto items-center  sm:mt-0">
                <NavMenu className="mx-auto mt-4">
                    <NavItem>
                        <Link to="/home">Home</Link>
                    </NavItem>
                    <NavItem>Hobbies</NavItem>
                    <NavItem>Meetups</NavItem>
                </NavMenu>

                <div className="mx-auto sm:ml-0 mt-4">
                    <UserProfile onClick={console.log} name="John Doe" src="https://via.placeholder.com/150" />
                </div>
            </div>
        </NavBar>
    );
};

export default Navigation;
