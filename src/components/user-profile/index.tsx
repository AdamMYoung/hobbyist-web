import ProfileIcon from '../profile-icon';
import { UserContainer } from './styles';

type Props = {
    src: string;
    alt?: string;
    onClick?: () => void;
    hasNotification?: boolean;
    active?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg';
};

const UserProfile: React.FC<Props> = (props) => {
    const { onClick, active, children, size = 'xs', ...rest } = props;

    return (
        <UserContainer>
            <ProfileIcon size={size} {...rest} onClick={() => onClick && onClick()} active={active} />
            {children}
        </UserContainer>
    );
};

export default UserProfile;
