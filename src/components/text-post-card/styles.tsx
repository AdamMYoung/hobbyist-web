import styled from 'styled-components';
import tw from 'twin.macro';

export const OverflowWrapper = styled.div`
    ${tw`max-h-36 w-full overflow-hidden`}

    background: 
    linear-gradient(#ffffff 33%, rgba(255,255,255, 0)),
    linear-gradient(rgba(255,255,255, 0), #ffffff 66%) 0 100%,
    radial-gradient(farthest-side at 50% 0, rgba(140,140,140, 0.5), rgba(0,0,0,0)),
    radial-gradient(farthest-side at 50% 100%, rgba(140,140,140, 0.5), rgba(0,0,0,0)) 0 100%;
    background-color: #ffffff;
    background-repeat: no-repeat;
    background-attachment: local, local, scroll, scroll;
    background-size: 100% 24px, 100% 24px, 100% 8px, 100% 8px;
`;
