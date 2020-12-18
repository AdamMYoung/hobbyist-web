import styled from 'styled-components';
import tw from 'twin.macro';

export const ToolbarButton = styled.button<{ active?: boolean }>`
    ${tw`cursor-pointer p-1 m-1 rounded`};

    color: ${(props) => (props.active ? 'white' : '#aaa')};
    background-color: ${(props) => (props.active ? '#aaa' : 'white')};
`;
