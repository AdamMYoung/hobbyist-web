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
        <div className={`relative ${description ? 'h-80' : 'h-72'} sm:h-48 w-full`}>
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
            <div className="absolute top-36 left-1/2 sm:left-1/4 transform -translate-y-1/2 -translate-x-1/2">
                <ProfileIcon size="lg" src={profileSrc} alt={title}></ProfileIcon>
            </div>
            <div
                className={`absolute flex text-center flex-col sm:flex-row items-center sm:text-left left-0 right-0 sm:flex ${
                    description ? 'bottom-10 sm:bottom-2' : 'bottom-12 sm:bottom-4'
                } sm:left-1/3 transform translate-y-1/2 w-auto`}
            >
                <div className="sm:ml-4 sm:mx-none">
                    <h1 className="text-5xl font-bold">{title}</h1>
                    {description && <p className="mt-1 text-gray-400">{description}</p>}
                </div>
                {children}
            </div>
        </div>
    );
};

export default ProfileHead;
