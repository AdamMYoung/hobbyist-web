import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React, { useState } from 'react';

import Drawer from '../../components/drawer';
import IconButton from '../../components/icon-button';

type ColumnProps = {
    children?: React.ReactNode;
    isDrawerOpen?: boolean;
    onCloseDrawer?: () => void;
};

type Props = {
    title: string;
    children: React.ReactNode;
    leftIcon?: IconProp;
    rightIcon?: IconProp;
};

type HeaderProps = {
    title: string;
    description: string;
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
            <div className="px-3 hidden sm:block w-2/6 lg:w-1/6">{children}</div>
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
            <div className="px-3 hidden lg:block w-2/6">{children}</div>
            <Drawer open={isDrawerOpen ?? false} onClose={handleClose}>
                {children}
            </Drawer>
        </>
    );
};

const CenterColumn = (props: { children?: React.ReactNode }) => {
    const { children } = props;

    return <div className="w-full px-3">{children}</div>;
};

const Header = (props: HeaderProps) => {
    const { title, description } = props;

    return (
        <>
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-gray-400 mt-2">{description}</p>
        </>
    );
};

const CenterHeader = (props: HeaderProps) => {
    return (
        <div className="hidden sm:block mb-4">
            <Header {...props} />
        </div>
    );
};

const SplitPage = (props: Props) => {
    const [leftDrawerOpen, setLeftDrawerOpen] = useState<boolean>(false);
    const [rightDrawerOpen, setRightDrawerOpen] = useState<boolean>(false);
    const { title, leftIcon, rightIcon, children } = props;

    const renderProps: RenderProps = {
        leftDrawer: leftDrawerOpen,
        rightDrawer: rightDrawerOpen,
        closeLeftDrawer: () => setLeftDrawerOpen(false),
        closeRightDrawer: () => setRightDrawerOpen(false),
    };

    return (
        <>
            <div
                className={`flex items-center border-b-2 py-1 px-2 border-gray-200 lg:hidden ${
                    !rightIcon && 'sm:hidden'
                } `}
            >
                {leftIcon && (
                    <IconButton className="sm:hidden" icon={leftIcon} onClick={() => setLeftDrawerOpen(true)} />
                )}
                <div className="ml-2 text-2xl font-bold my-auto sm:hidden">{title}</div>
                <span className="flex-grow" />
                {rightIcon && (
                    <IconButton className="lg:hidden" icon={rightIcon} onClick={() => setRightDrawerOpen(true)} />
                )}
            </div>

            <div className="flex sm:pt-4">{typeof children === 'function' ? children(renderProps) : children}</div>
        </>
    );
};

CenterColumn.Header = CenterHeader;
SplitPage.Left = LeftColumn;
SplitPage.Right = RightColumn;
SplitPage.Center = CenterColumn;
SplitPage.Header = Header;

export default SplitPage;
