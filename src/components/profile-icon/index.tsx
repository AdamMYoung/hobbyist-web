import { Image, Notification, ProfileContainer } from './styles';

type Props = {
    src: string;
    alt?: string;
    onClick?: () => void;
    active?: boolean;
    hasNotification?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg';
};

const ProfileIcon = (props: Props) => {
    const { src, onClick, alt, active, hasNotification = false, size = 'sm' } = props;

    return (
        <ProfileContainer active={active} size={size} onClick={() => active && onClick && onClick()}>
            <Image src={src} alt={alt} />
            {hasNotification && <Notification size={size} />}
        </ProfileContainer>
    );
};

export default ProfileIcon;
