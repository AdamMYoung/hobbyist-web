import styled from 'styled-components';
import tw from 'twin.macro';

export const Card = styled.div<{ noCursor?: boolean }>`
    ${tw`transition shadow p-3 rounded-sm bg-white`}

    ${(props) => !props.noCursor && tw`cursor-pointer`}
`;
