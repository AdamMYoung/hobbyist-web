import styled from 'styled-components';
import tw from 'twin.macro';

export const Logo = styled.a`
    ${tw`text-3xl font-bold`}
`;

export const NavBar = styled.nav`
    ${tw`container flex py-4 px-8 border-b-2 border-gray-200 items-center`}
`;

export const NavMenu = styled.ul``;

export const NavItem = styled.li`
    ${tw`text-lg mx-2 font-semibold text-gray-500`}
    list-style-type: none;
    display: inline;
`;
