import ProfileIcon from '../profile-icon';
import { UserContainer } from './styles';

type Props = {
    src: string;
    name: string;
    alt?: string;
    onClick: () => void;
    hasNotification?: boolean;
};

const UserProfile = (props: Props) => {
    const { onClick, name, ...rest } = props;

    return (
        <UserContainer onClick={onClick}>
            <ProfileIcon size="sm" {...rest} />
            <p className="text-lg whitespace-nowrap">{name}</p>
        </UserContainer>
    );
};

export default UserProfile;
