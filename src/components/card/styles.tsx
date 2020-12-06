import styled from 'styled-components';
import tw from 'twin.macro';

export const Card = styled.div<{ active?: boolean }>`
    transition: filter 0.2s;
    ${tw`shadow p-2 rounded-lg bg-white`}

    ${(props) => props.active && tw`hover:cursor-pointer border-2 border-transparent hover:border-gray-300`}
`;
