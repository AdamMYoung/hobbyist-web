import { Image, Notification, ProfileContainer } from './styles';

type Props = {
    src: string;
    onClick?: () => void;
    active?: boolean;
    hasNotification?: boolean;
    size?: 'sm' | 'md' | 'lg';
};

const ProfileIcon = (props: Props) => {
    const { src, onClick, active, hasNotification = false, size = 'sm' } = props;

    return (
        <ProfileContainer active={active} size={size}>
            <Image src={src} size={size} onClick={() => active && onClick && onClick()} />
            {hasNotification && <Notification size={size} />}
        </ProfileContainer>
    );
};

export default ProfileIcon;
