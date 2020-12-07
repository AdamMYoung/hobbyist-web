import styled, { css } from 'styled-components';
import tw from 'twin.macro';

export const ListGroup = styled.ul<{ active?: boolean; noTopPadding?: boolean }>`
    ${tw`w-full`}

    li {
        transition: filter 0.2s;
        ${tw`hover:text-blue-700 pb-3 px-2`}

        ${(props) =>
            props.noTopPadding
                ? css`
                      &:not(:first-child) {
                          ${tw`pt-3`}
                      }
                  `
                : tw`py-3`}
        

        ${(props) => props.active && tw`hover:cursor-pointer hover:bg-gray-200 active:bg-gray-300`}
    }
`;

export const ListItem = styled.li`
    list-style-type: none;
`;
