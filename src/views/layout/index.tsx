import styled, { css } from 'styled-components';
import tw from 'twin.macro';

import { useScrollLock } from '../../providers/ScrollLockProvider';
import Routes from '../../routes';

import Navigation from './navigation';

const LockableDiv = styled.div<{ locked: boolean }>`
    ${tw`bg-gray-50`}

    ${(props) =>
        props.locked &&
        css`
            height: 100vh;
            overflow: hidden;
        `}
`;

const Layout = () => {
    const { locked } = useScrollLock();

    return (
        <LockableDiv locked={locked}>
            <Navigation />
            <div className="">
                <main className="lg:container min-h-screen">
                    <Routes />
                </main>
            </div>
        </LockableDiv>
    );
};

export default Layout;
