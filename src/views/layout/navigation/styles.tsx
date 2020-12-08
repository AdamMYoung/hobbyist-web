import styled from 'styled-components';
import tw from 'twin.macro';

export const Logo = styled.p`
    ${tw`text-3xl font-bold select-none`}
`;

export const NavBar = styled.nav`
    ${tw`flex px-4 md:px-8 items-center w-full`}
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
