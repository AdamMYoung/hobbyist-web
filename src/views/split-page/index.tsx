import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

import Drawer from '../../components/drawer';
import IconButton from '../../components/icon-button';
import LoadTransition from '../../components/load-transition';
import ProfileControls from '../profile-controls';

type ColumnProps = {
    children?: React.ReactNode;
    isDrawerOpen?: boolean;

    onCloseDrawer?: () => void;
};

type Props = {
    title?: string;
    headerNavContent?: React.ReactNode;
    children?: React.ReactNode;
    disableProfileControls?: boolean;
    disableNavBar?: boolean;
    rightIcon?: IconProp;
};

type HeaderProps = {
    title?: string;
};

export type RenderProps = {
    leftDrawer?: boolean;
    rightDrawer?: boolean;
    closeLeftDrawer?: () => void;
    closeRightDrawer?: () => void;
};

const LeftColumn = (props: ColumnProps) => {
    const { children, isDrawerOpen, onCloseDrawer } = props;

    const handleClose = () => {
        if (onCloseDrawer) {
            onCloseDrawer();
        }
    };

    return (
        <>
            <div className="sm:px-3 hidden sm:block w-2/6">{children}</div>
            <Drawer side="left" open={isDrawerOpen ?? false} onClose={handleClose}>
                {children}
            </Drawer>
        </>
    );
};

const RightColumn = (props: ColumnProps) => {
    const { children, isDrawerOpen, onCloseDrawer } = props;

    const handleClose = () => {
        if (onCloseDrawer) {
            onCloseDrawer();
        }
    };

    return (
        <>
            <div className="sm:px-3 hidden lg:block w-2/6">{children}</div>
            <Drawer open={isDrawerOpen ?? false} onClose={handleClose}>
                {children}
            </Drawer>
        </>
    );
};

const CenterColumn = (props: { children?: React.ReactNode }) => {
    const { children } = props;

    return (
        <div className="w-full sm:px-3">
            <LoadTransition>{children}</LoadTransition>
        </div>
    );
};

const Header = (props: HeaderProps) => {
    const { title } = props;

    return <h1 className="text-2xl font-bold">{title}</h1>;
};

const CenterHeader: React.FC<HeaderProps> = (props) => {
    return (
        <div className="hidden sm:flex mt-8 flex-wrap items-center">
            <Header {...props} />
            <div className="flex-grow" />
            {props.children}
        </div>
    );
};

const SplitPage = (props: Props) => {
    const [leftDrawerOpen, setLeftDrawerOpen] = useState<boolean>(false);
    const [rightDrawerOpen, setRightDrawerOpen] = useState<boolean>(false);
    const { title, rightIcon, children, disableNavBar, headerNavContent, disableProfileControls } = props;

    const renderProps: RenderProps = {
        leftDrawer: leftDrawerOpen,
        rightDrawer: rightDrawerOpen,
        closeLeftDrawer: () => setLeftDrawerOpen(false),
        closeRightDrawer: () => setRightDrawerOpen(false),
    };

    return (
        <div className="relative">
            {!disableNavBar && (
                <div
                    className={`flex flex-wrap fixed py-1 z-50 bg-gray-50 w-full items-center border-b-2 px-2 border-gray-200 lg:hidden ${
                        !rightIcon && 'sm:hidden'
                    } `}
                >
                    <IconButton size="lg" className="sm:hidden" icon={faUser} onClick={() => setLeftDrawerOpen(true)} />

                    <div className="ml-2 items-center text-2xl font-bold sm:hidden">{title}</div>
                    <span className="flex-grow" />
                    {headerNavContent && (
                        <div style={{ minWidth: '8rem' }} className="mx-2 text-lg font-bold sm:hidden">
                            {headerNavContent}
                        </div>
                    )}
                    {!!rightIcon && (
                        <IconButton
                            size="lg"
                            className="lg:hidden"
                            icon={rightIcon}
                            onClick={() => setRightDrawerOpen(true)}
                        />
                    )}
                </div>
            )}

            <div className={`flex pt-16 lg:pt-0 ${!rightIcon && 'sm:pt-0'}`}>
                {!disableProfileControls && (
                    <LeftColumn isDrawerOpen={leftDrawerOpen} onCloseDrawer={() => setLeftDrawerOpen(false)}>
                        <ProfileControls />
                    </LeftColumn>
                )}
                {typeof children === 'function' ? children(renderProps) : children}
            </div>
        </div>
    );
};

CenterColumn.Header = CenterHeader;
SplitPage.Left = LeftColumn;
SplitPage.Right = RightColumn;
SplitPage.Center = CenterColumn;
SplitPage.Header = Header;

export default SplitPage;
