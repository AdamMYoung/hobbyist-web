import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import Button from '../../components/button';
import Drawer from '../../components/drawer';

type ColumnProps = {
    children: React.ReactNode;
    isDrawerOpen: boolean;
    onCloseDrawer: () => void;
};

type Props = {
    title: string;
    children: React.ReactNode;
    leftIcon?: IconProp;
    rightIcon?: IconProp;
};

type CenterProps = {
    title: string;
    description: string;
};

export type RenderProps = {
    leftDrawer: boolean;
    rightDrawer: boolean;
    closeLeftDrawer: () => void;
    closeRightDrawer: () => void;
};

const LeftColumn = (props: ColumnProps) => {
    const { children, isDrawerOpen, onCloseDrawer } = props;

    return (
        <>
            <div className="lg:mt-0 px-2 hidden sm:block md:w-1/3 lg:w-1/6 px-2">{children}</div>
            <Drawer side="left" open={isDrawerOpen} onClose={onCloseDrawer}>
                {children}
            </Drawer>
        </>
    );
};

const RightColumn = (props: ColumnProps) => {
    const { children, isDrawerOpen, onCloseDrawer } = props;

    return (
        <>
            <div className="lg:mt-0 px-2 hidden lg:block lg:w-1/6 px-2">{children}</div>
            <Drawer open={isDrawerOpen} onClose={onCloseDrawer}>
                {children}
            </Drawer>
        </>
    );
};

const CenterColumn: React.FC<CenterProps> = (props) => {
    const { title, description, children } = props;

    return (
        <div className="w-full px-2 md:w-2/3 lg:w-4/6">
            <div className="hidden sm:block">
                <h1 className="text-4xl font-bold">{title}</h1>
                <p className="text-gray-400 mt-2">{description}</p>
            </div>
            {children}
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
            <div className="flex border-b-2 py-1 px-2 border-gray-200 lg:hidden">
                {leftIcon && (
                    <Button className="sm:hidden" onClick={() => setLeftDrawerOpen(true)}>
                        <FontAwesomeIcon size="lg" icon={leftIcon} />
                    </Button>
                )}
                <div className="text-2xl font-bold my-auto sm:hidden">{title}</div>
                <span className="flex-grow" />
                {rightIcon && (
                    <Button className="lg:hidden" onClick={() => setRightDrawerOpen(true)}>
                        <FontAwesomeIcon size="lg" icon={rightIcon} />
                    </Button>
                )}
            </div>
            <div className="flex sm:pt-4">{typeof children === 'function' ? children(renderProps) : children}</div>
        </>
    );
};

SplitPage.Left = LeftColumn;
SplitPage.Right = RightColumn;
SplitPage.Center = CenterColumn;

export default SplitPage;
