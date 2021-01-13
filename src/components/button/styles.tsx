import styled from 'styled-components';
import tw from 'twin.macro';

export const ThemedButton = styled.button<{ variant?: 'primary' | 'secondary' | 'icon' | 'link'; active?: boolean }>`
    ${tw`block rounded-full`}
    
    cursor: pointer;
    transition: filter 0.1s;

    ${(props) =>
        props.variant === 'primary' &&
        tw`px-4 py-2 bg-purple-500 hover:bg-purple-700 transition text-white font-bold focus:outline-none focus:ring`}
    ${(props) =>
        props.variant === 'secondary' &&
        tw`px-4 py-2 bg-red-500 transition text-white font-bold focus:outline-none focus:ring`}
    ${(props) => props.variant === 'icon' && tw`px-4 py-2 rounded font-bold hover:bg-gray-300`}
    ${(props) => props.variant === 'link' && tw`underline cursor-pointer`}

    ${(props) => (props.variant === 'primary' || props.variant === 'secondary') && 'min-width: 8rem;'}

    ${(props) => {
        if (props.active) {
            switch (props.variant) {
                case 'primary':
                    return tw`bg-purple-700`;
                case 'secondary':
                    return tw`bg-red-700`;
                case 'link':
                    return 'text-gray-600';
            }
        }
    }}

    &:disabled {
        ${tw`cursor-default`}
        filter: brightness(100%);

        ${(props) => props.variant === 'primary' && tw` text-purple-200 bg-purple-400`}
        ${(props) => props.variant === 'secondary' && tw`text-red-200 bg-red-400`}
    }
`;
