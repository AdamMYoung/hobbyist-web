import styled from 'styled-components';
import tw from 'twin.macro';

const Typography = styled.div`
    ol {
        ${tw`list-decimal list-inside`}
    }

    ul {
        ${tw`list-disc list-inside`}
    }

    h1 {
        ${tw`text-2xl`}
    }

    h2 {
        ${tw`text-xl`}
    }
`;

export default Typography;
