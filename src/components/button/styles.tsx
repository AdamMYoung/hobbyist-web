import styled from 'styled-components';
import tw from 'twin.macro';

export const ThemedButton = styled.button<{ variant: 'primary' | 'secondary' }>`
    ${tw`px-4 py-2 rounded-full`}
    cursor: pointer;
    transition: filter 0.1s;

    ${(props) => props.variant === 'primary' && tw`text-lg bg-blue-500 text-white font-bold`}
    ${(props) => props.variant === 'secondary' && tw`text-lg bg-yellow-500 text-white font-bold`}

    &:hover {
        filter: brightness(90%);
    }
`;
