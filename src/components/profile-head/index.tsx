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
        <div>
            <div className={`relative h-36 w-full`}>
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
            </div>
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left sm:w-2/3 sm:ml-auto w-auto mt-20 sm:mt-0">
                <div className="sm:mx-8 xl:mx-2 sm:mx-none">
                    <h1 className="text-5xl font-bold">{title}</h1>
                    {description && <p className="mt-1 text-gray-400">{description}</p>}
                </div>
                {children}
            </div>
        </div>
    );
};

export default ProfileHead;
