import styled from 'styled-components';
import tw from 'twin.macro';

export const ThemedButton = styled.button<{ variant?: 'primary' | 'secondary' | 'icon' | 'link' }>`
    ${tw`rounded-full`}
    cursor: pointer;
    transition: filter 0.1s;

    ${(props) => props.variant === 'primary' && tw`px-4 py-2 bg-blue-500 text-white font-bold`}
    ${(props) => props.variant === 'secondary' && tw`px-4 py-2 bg-yellow-500 text-white font-bold`}
    ${(props) => props.variant === 'icon' && tw`px-4 py-2 rounded font-bold`}
    ${(props) => props.variant === 'link' && tw`hover:underline cursor-pointer`}

    &:hover {
        filter: brightness(90%);
    }
`;
