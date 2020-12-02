import { Link } from 'react-router-dom';
import Button from '../../../components/button';
import UserProfile from '../../../components/user-profile';
import { Logo, NavBar, NavMenu, NavItem } from './styles';

const Navigation = () => {
    return (
        <NavBar>
            <Link to="/">
                <Logo>hobbyist</Logo>
            </Link>

            <NavMenu className="ml-auto mr-6">
                <NavItem>
                    <Link to="/home">Home</Link>
                </NavItem>
                <NavItem>Hobbies</NavItem>
                <NavItem>Meetups</NavItem>
            </NavMenu>

            <UserProfile onClick={console.log} name="John Doe" src="https://via.placeholder.com/150" />
        </NavBar>
    );
};

export default Navigation;
