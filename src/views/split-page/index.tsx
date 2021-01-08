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
    disableNavBar?: boolean;
    rightIcon?: IconProp;
    leftIcon?: IconProp;
};

type HeaderProps = {
    title?: string;
};

type BodyProps = {
    children?: React.ReactNode;
    disableProfileControls?: boolean;
    leftDrawerOpen?: boolean;
    onCloseLeftDrawer?: () => void;
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
            <div className="sm:px-3 hidden mt-2 sm:block w-2/6">{children}</div>
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
            <div className="sm:px-3 hidden mt-2 lg:block w-2/6">{children}</div>
            <Drawer open={isDrawerOpen ?? false} onClose={handleClose}>
                {children}
            </Drawer>
        </>
    );
};

const CenterColumn = (props: { children?: React.ReactNode }) => {
    const { children } = props;

    return (
        <div className="w-full sm:px-3 sm:mt-8">
            <LoadTransition>{children}</LoadTransition>
        </div>
    );
};

const Top = (props: { children?: React.ReactNode }) => {
    const { children } = props;

    return (
        <div className="w-full py-4">
            <LoadTransition>{children}</LoadTransition>
        </div>
    );
};

const Body = (props: BodyProps) => {
    const { children, disableProfileControls, leftDrawerOpen, onCloseLeftDrawer } = props;

    return (
        <div className="flex ">
            {!disableProfileControls && (
                <LeftColumn
                    isDrawerOpen={leftDrawerOpen}
                    onCloseDrawer={() => onCloseLeftDrawer && onCloseLeftDrawer()}
                >
                    <ProfileControls />
                </LeftColumn>
            )}
            {children}
        </div>
    );
};

const Header = (props: HeaderProps) => {
    const { title } = props;

    return <h1 className="text-2xl font-bold">{title}</h1>;
};

const CenterHeader: React.FC<HeaderProps> = (props) => {
    return (
        <div className="hidden sm:flex flex-wrap items-center mb-4">
            <Header {...props} />
            <div className="flex-grow" />
            {props.children}
        </div>
    );
};

const SplitPage = (props: Props) => {
    const [leftDrawerOpen, setLeftDrawerOpen] = useState<boolean>(false);
    const [rightDrawerOpen, setRightDrawerOpen] = useState<boolean>(false);
    const { title, rightIcon, leftIcon, children, disableNavBar, headerNavContent } = props;

    const renderProps: RenderProps = {
        leftDrawer: leftDrawerOpen,
        rightDrawer: rightDrawerOpen,
        closeLeftDrawer: () => setLeftDrawerOpen(false),
        closeRightDrawer: () => setRightDrawerOpen(false),
    };

    let currentLeftIcon = leftIcon;
    if (!currentLeftIcon) {
        currentLeftIcon = faUser;
    }

    return (
        <div className="relative">
            {!disableNavBar && (
                <nav
                    aria-label="Secondary navigation"
                    className={`flex flex-wrap fixed py-1 z-50 bg-gray-50 w-full items-center border-b-2 px-2 border-gray-200 lg:hidden ${
                        !rightIcon && 'sm:hidden'
                    } `}
                >
                    <IconButton
                        size="lg"
                        className="sm:hidden"
                        icon={currentLeftIcon}
                        onClick={() => setLeftDrawerOpen(true)}
                    />

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
                </nav>
            )}

            <div className={`pt-16 lg:pt-0 ${!rightIcon && 'sm:pt-0'}`}>
                {typeof children === 'function' ? children(renderProps) : children}
            </div>
        </div>
    );
};

CenterColumn.Header = CenterHeader;
SplitPage.Left = LeftColumn;
SplitPage.Right = RightColumn;
SplitPage.Center = CenterColumn;
SplitPage.Top = Top;
SplitPage.Body = Body;
SplitPage.Header = Header;

export default SplitPage;
