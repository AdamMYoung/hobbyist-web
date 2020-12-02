import styled from 'styled-components';
import tw from 'twin.macro';

export const UserContainer = styled.div`
    transition: filter 0.2s, text-decoration 0.2s;

    ${tw`flex ml-6 items-center`}

    p {
        ${tw`ml-2 font-semibold`}
    }

    &:hover {
        cursor: pointer;
        filter: brightness(70%);

        ${tw`underline`}
    }

    &:active {
        filter: brightness(50%);
        transition: filter 0.1s;
    }
`;
