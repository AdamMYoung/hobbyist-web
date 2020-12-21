import { Suspense } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

import { useScrollLock } from '../../providers/ScrollLockProvider';
import Routes from '../../routes';
import SplitPage from '../split-page';

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
        <LockableDiv id="appBody" locked={locked}>
            <Navigation />

            <main className="xl:container min-h-screen">
                <Suspense
                    fallback={
                        <SplitPage>
                            <SplitPage.Center />
                        </SplitPage>
                    }
                >
                    <Routes />
                </Suspense>
            </main>
        </LockableDiv>
    );
};

export default Layout;
