import styled from 'styled-components';
import tw from 'twin.macro';

export const Logo = styled.a`
    ${tw`text-3xl font-bold`}
`;

export const NavBar = styled.nav`
    ${tw`container flex flex-wrap py-4 px-8 border-b-2 border-gray-200 items-center justify-center`}
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
