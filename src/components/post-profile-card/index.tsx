import { Profile } from '../../types';
import Card from '../card';
import ProfileIcon from '../profile-icon';
import Button from '../button';
import { useHistory } from 'react-router-dom';

type Props = {
    profile: Profile;
    className?: string;
};

const PostProfileCard = (props: Props) => {
    const { className, profile } = props;
    const { username, profileSrc, description } = profile;

    const history = useHistory();

    return (
        <div className={`relative w-full ${className}`}>
            <div className="absolute w-full">
                <ProfileIcon size="xl" className="z-50 mx-auto" src={profileSrc} alt={username} />
            </div>
            <Card noCursor className="absolute text-center w-full mt-16">
                <p className="text-lg font-bold mt-14">{username}</p>
                <p className="text-sm mt-2 text-gray-300">{description}</p>
                <Button variant="primary" className="mx-auto mt-4" onClick={() => history.push(`/profile/${username}`)}>
                    View
                </Button>
                <hr className="my-2" />
                <p className="text-lg font-semibold">Other posts</p>
            </Card>
        </div>
    );
};

export default PostProfileCard;
