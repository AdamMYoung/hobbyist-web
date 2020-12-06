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
        <ProfileContainer active={active} size={size}>
            <Image src={src} alt={alt} onClick={() => active && onClick && onClick()} />
            {hasNotification && <Notification size={size} />}
        </ProfileContainer>
    );
};

export default ProfileIcon;
