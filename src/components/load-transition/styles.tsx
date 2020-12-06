import styled from 'styled-components';

export const VisibilityTransition = styled.div<{ isVisible: boolean }>`
    transition: opacity 0.2s;

    opacity: ${(props) => (props.isVisible ? '1' : '0')};
`;
