import styled from 'styled-components';
import tw from 'twin.macro';

export const Card = styled.div<{ active?: boolean }>`
    transition: filter 0.2s;
    ${tw`shadow p-4 rounded-lg`}

    ${(props) => props.active && tw`hover:cursor-pointer hover:bg-gray-50 active:bg-gray-100`}
`;
