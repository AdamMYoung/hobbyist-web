import React from 'react';

import Button from '../button';
import ProfileIcon from '../profile-icon';
import { UserContainer } from './styles';

type Props = {
    src: string;
    title: string;
    onClick?: () => void;
    hasNotification?: boolean;
    active?: boolean;
    textClassName?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg';
};

const UserProfile: React.FC<Props> = (props) => {
    const { onClick, active, children, size = 'sm', title, textClassName, ...rest } = props;

    return (
        <UserContainer>
            <ProfileIcon
                size={size}
                alt={title}
                {...rest}
                active={active}
                className={onClick && 'cursor-pointer'}
                onClick={() => onClick && onClick()}
            />
            <div className="block ml-4">
                <Button
                    className={textClassName ?? 'font-semibold hover:underline'}
                    onClick={() => onClick && onClick()}
                >
                    {title}
                </Button>
                {children}
            </div>
        </UserContainer>
    );
};

export default UserProfile;
