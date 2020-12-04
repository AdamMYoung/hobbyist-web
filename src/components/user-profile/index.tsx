import ProfileIcon from '../profile-icon';
import { UserContainer } from './styles';

type Props = {
    src: string;
    name: string;
    alt?: string;
    onClick?: () => void;
    hasNotification?: boolean;
    active?: boolean;
};

const UserProfile = (props: Props) => {
    const { onClick, name, active, ...rest } = props;

    return (
        <UserContainer onClick={() => onClick && onClick()} active={active}>
            <ProfileIcon size="sm" {...rest} />
            <p className="text-lg whitespace-nowrap">{name}</p>
        </UserContainer>
    );
};

export default UserProfile;
