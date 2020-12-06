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
    size?: 'xs' | 'sm' | 'md' | 'lg';
};

const UserProfile: React.FC<Props> = (props) => {
    const { onClick, active, children, size = 'sm', title, ...rest } = props;

    return (
        <UserContainer>
            <ProfileIcon size={size} alt={title} {...rest} active={active} />
            <div className="block ml-2">
                <Button variant="link" className="font-semibold" onClick={() => onClick && onClick()}>
                    {title}
                </Button>
                {children}
            </div>
        </UserContainer>
    );
};

export default UserProfile;
