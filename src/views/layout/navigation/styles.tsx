import styled from 'styled-components';
import tw from 'twin.macro';

export const Logo = styled.a`
    ${tw`text-3xl font-bold`}
`;

export const NavBar = styled.nav`
    ${tw`flex py-4 px-4 md:px-8 md:items-center`}
`;

export const NavMenu = styled.ul``;

export const NavItem = styled.li`
    ${tw`text-lg mr-2 font-semibold text-gray-500 lg:p-2`}
    list-style-type: none;
    display: inline;

    &:hover {
        ${tw`text-gray-700`}
    }

    &:active {
        ${tw`text-gray-900 shadow`}
    }
`;
