import styled from 'styled-components';
import tw from 'twin.macro';

export const ButtonGroup = styled.div`
    ${tw`flex justify-end`}

    button {
        ${tw`rounded-none min-w-min`}

        &:first-child {
            ${tw`rounded-l-full`}
        }

        &:last-child {
            ${tw`rounded-r-full`}
        }
    }
`;
