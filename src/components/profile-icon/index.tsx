import { Image, Notification, ProfileContainer } from './styles';

type Props = React.ComponentPropsWithoutRef<'div'> & {
    src: string;
    alt?: string;
    onClick?: () => void;
    active?: boolean;
    hasNotification?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg';
};

const ProfileIcon = (props: Props) => {
    const { src, onClick, alt, active, hasNotification = false, size = 'sm', ...rest } = props;

    return (
        <ProfileContainer {...rest} active={active} size={size} onClick={() => active && onClick && onClick()}>
            <Image src={src} alt={alt} />
            {hasNotification && <Notification size={size} />}
        </ProfileContainer>
    );
};

export default ProfileIcon;
