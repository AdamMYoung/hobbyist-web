import styled, { css } from 'styled-components';
import tw from 'twin.macro';

export const ProfileContainer = styled.div<{ active?: boolean; size: 'xs' | 'sm' | 'md' | 'lg' }>`
    transition: filter 0.2s;    
    ${tw`relative p-0 lg:mx-0 border-white border-2 rounded-full`}    

    ${(props) => props.size === 'xs' && tw`w-8 h-8`}
    ${(props) => props.size === 'sm' && tw`w-12 h-12`}
    ${(props) => props.size === 'md' && tw`w-24 h-24`}
    ${(props) => props.size === 'lg' && tw`w-36 h-36`}

    ${(props) =>
        props.active &&
        css`
            &:hover {
                cursor: pointer;
                filter: brightness(70%);
            }

            &:active {
                filter: brightness(50%);
                transition: filter 0.1s;
            }
        `}
    
`;

export const Image = styled.img`
    ${tw`rounded-full absolute w-full h-full`}
`;

export const Notification = styled.circle<{ size: 'xs' | 'sm' | 'md' | 'lg' }>`
    ${tw`absolute rounded-full bg-red-400 top-0 right-0`}

    ${(props) => props.size === 'xs' && tw`w-2 h-2`}
    ${(props) => props.size === 'sm' && tw`w-4 h-4`}
    ${(props) => props.size === 'md' && tw`w-8 h-8`}
    ${(props) => props.size === 'lg' && tw`w-12 h-12`}
`;
