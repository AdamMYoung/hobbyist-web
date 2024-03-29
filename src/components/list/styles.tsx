import styled, { css } from 'styled-components';
import tw from 'twin.macro';

export const ListGroup = styled.ul<{ active?: boolean; noTopPadding?: boolean; narrow?: boolean }>`
    ${tw`w-full`}

    li {
        
        ${tw`transition  pb-3 px-2`}

        ${(props) =>
            props.noTopPadding
                ? css`
                      &:not(:first-child) {
                          ${props.narrow ? tw`pt-2` : tw`pt-3`}
                      }
                  `
                : props.narrow
                ? tw`py-2`
                : tw`py-3`}
        

        ${(props) => props.active && tw`hover:cursor-pointer hover:text-blue-700 hover:bg-gray-200 active:bg-gray-300`}
    }
`;

export const ListItem = styled.li`
    list-style-type: none;
    ${tw`focus:ring-blue-700`}
`;
