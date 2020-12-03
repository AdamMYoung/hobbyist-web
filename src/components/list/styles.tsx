import styled from 'styled-components';
import tw from 'twin.macro';

export const ListGroup = styled.ul<{ active?: boolean }>`
    ${tw`divide-y-2 divide-solid w-full`}
    li {
        transition: filter 0.2s;
        ${(props) => props.active && tw`hover:cursor-pointer hover:bg-gray-50 active:bg-gray-200`}
    }
`;

export const ListItem = styled.li`
    ${tw`p-3`}
    list-style-type: none;
`;
