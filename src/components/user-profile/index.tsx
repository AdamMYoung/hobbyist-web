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
    const { onClick, active, children, size = 'xs', title, ...rest } = props;

    return (
        <UserContainer>
            <ProfileIcon size={size} alt={title} {...rest} active={active} />
            <div className="block ml-2">
                <div>
                    <Button variant="link" className=" text-sm" onClick={() => onClick && onClick()}>
                        {title}
                    </Button>
                </div>
                {children}
            </div>
        </UserContainer>
    );
};

export default UserProfile;
