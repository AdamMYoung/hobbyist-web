import styled, { css } from 'styled-components';
import tw from 'twin.macro';

export const Card = styled.div<{ active?: boolean }>`
    transition: filter 0.2s;
    ${tw`shadow-inner p-8`}

    ${(props) =>
        props.active &&
        css`
            &:hover {
                cursor: pointer;
                filter: brightness(85%);
            }

            &:active {
                filter: brightness(70%);
            }
        `}
`;
