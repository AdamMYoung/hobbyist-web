import ProfileIcon from '../profile-icon';
import { UserContainer } from './styles';

type Props = {
    src: string;
    name: string;
    onClick: () => void;
    hasNotification?: boolean;
};

const UserProfile = (props: Props) => {
    const { onClick, name, ...rest } = props;

    return (
        <UserContainer>
            <ProfileIcon size="sm" {...rest} />
            <p className="text-lg whitespace-nowrap">{name}</p>
        </UserContainer>
    );
};

export default UserProfile;
