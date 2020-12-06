import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React, { useState } from 'react';

import Drawer from '../../components/drawer';
import IconButton from '../../components/icon-button';
import ProfileControls from '../layout/profile-controls';

type ColumnProps = {
    children?: React.ReactNode;
    isDrawerOpen?: boolean;
    onCloseDrawer?: () => void;
};

type Props = {
    title?: string;
    children: React.ReactNode;
    disableProfileControls?: boolean;
    leftIcon?: IconProp;
    rightIcon?: IconProp;
};

type HeaderProps = {
    title: string;
};

export type RenderProps = {
    rightDrawer?: boolean;
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
            <div className="md:px-3 hidden sm:block w-2/6">{children}</div>
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
            <div className="md:px-3 hidden lg:block w-2/6">{children}</div>
            <Drawer open={isDrawerOpen ?? false} onClose={handleClose}>
                {children}
            </Drawer>
        </>
    );
};

const CenterColumn = (props: { children?: React.ReactNode }) => {
    const { children } = props;

    return <div className="w-full md:px-3">{children}</div>;
};

const Header = (props: HeaderProps) => {
    const { title } = props;

    return <h1 className="text-2xl font-bold">{title}</h1>;
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
    const { title, leftIcon, rightIcon, children, disableProfileControls } = props;

    const renderProps: RenderProps = {
        rightDrawer: rightDrawerOpen,
        closeRightDrawer: () => setRightDrawerOpen(false),
    };

    return (
        <>
            {title && (!!leftIcon || !!rightIcon) && (
                <div
                    className={`flex items-center border-b-2 py-1 px-2 border-gray-200 lg:hidden ${
                        !rightIcon && 'sm:hidden'
                    } `}
                >
                    {leftIcon && (
                        <IconButton
                            size="lg"
                            className="sm:hidden"
                            icon={leftIcon}
                            onClick={() => setLeftDrawerOpen(true)}
                        />
                    )}
                    <div className="ml-2 text-2xl font-bold my-auto sm:hidden">{title}</div>
                    <span className="flex-grow" />
                    {rightIcon && (
                        <IconButton
                            size="lg"
                            className="lg:hidden"
                            icon={rightIcon}
                            onClick={() => setRightDrawerOpen(true)}
                        />
                    )}
                </div>
            )}

            <div className="flex sm:pt-4">
                {!disableProfileControls && (
                    <LeftColumn isDrawerOpen={leftDrawerOpen} onCloseDrawer={() => setLeftDrawerOpen(false)}>
                        <ProfileControls />
                    </LeftColumn>
                )}
                {typeof children === 'function' ? children(renderProps) : children}
            </div>
        </>
    );
};

CenterColumn.Header = CenterHeader;
SplitPage.Left = LeftColumn;
SplitPage.Right = RightColumn;
SplitPage.Center = CenterColumn;
SplitPage.Header = Header;

export default SplitPage;
