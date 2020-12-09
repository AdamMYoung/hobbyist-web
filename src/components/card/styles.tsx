import styled from 'styled-components';
import tw from 'twin.macro';

export const Card = styled.div<{ active?: boolean; noCursor?: boolean }>`
    
    ${tw`transition shadow p-3 rounded-lg bg-white`}

    ${(props) => props.active && !props.noCursor && tw`cursor-pointer`}
    ${(props) => props.active && tw`border-2 border-transparent hover:border-gray-300`}
`;
