import ProfileIcon from '../profile-icon';

type Props = {
    headerSrc?: string;
    profileSrc: string;
    title: string;
    description?: string;
};

const ProfileHead: React.FC<Props> = (props) => {
    const { profileSrc, headerSrc, title, description, children } = props;

    return (
        <div className="relative h-48 w-full">
            <div className="absolute t-0 h-36 w-full">
                <div className="relative h-36 w-full">
                    <img
                        className="sm:rounded-t-lg absolute inset-0 w-full h-full object-cover"
                        src={headerSrc}
                        alt=""
                    />
                </div>
            </div>
            <hr className="absolute top-36 w-full border-gray-300" />
            <div className="absolute top-36 left-1/4 transform -translate-y-1/2 -translate-x-1/2">
                <ProfileIcon size="lg" src={profileSrc} alt="title"></ProfileIcon>
            </div>
            <div className="absolute flex items-center bottom-2 left-1/3 ml-8 transform translate-y-1/2 w-auto">
                <div>
                    <h1 className="text-4xl font-bold">{title}</h1>
                    {description && <p className="text-gray-400">{description}</p>}
                </div>
                {children}
            </div>
        </div>
    );
};

export default ProfileHead;
