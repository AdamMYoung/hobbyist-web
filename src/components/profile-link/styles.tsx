import styled, { css } from 'styled-components';
import tw from 'twin.macro';

export const UserContainer = styled.div<{ active?: boolean }>`
    transition: filter 0.2s, text-decoration 0.2s;

    ${tw`flex items-center`}

    ${(props) =>
        props.active &&
        css`
            &:hover {
                cursor: pointer;
                filter: brightness(70%);

                ${tw`underline`}
            }

            &:active {
                filter: brightness(50%);
                transition: filter 0.1s;
            }
        `}
`;
