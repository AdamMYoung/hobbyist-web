import { useHistory } from 'react-router-dom';

import { Profile } from '../../types';
import Card from '../card';
import ProfileIcon from '../profile-icon';
import Button from '../button';
import List from '../list';
import { useFeed } from '../../hooks/queries';

type Props = {
    profile: Profile;
    className?: string;
};

const PostProfileCard = (props: Props) => {
    const { className, profile } = props;
    const { username, profileSrc, description } = profile;

    const history = useHistory();
    const { data: userPosts, isSuccess } = useFeed('user', username);

    return (
        <div className={`relative w-full ${className}`}>
            <div className="absolute w-full">
                <ProfileIcon size="xl" className="z-50 mx-auto" src={profileSrc} alt={username} />
            </div>
            <Card noCursor className="absolute text-center w-full mt-16">
                <p className="text-lg font-bold mt-14">{username}</p>
                <p className="text-sm mt-2 text-gray-300">{description}</p>
                <Button variant="primary" className="mx-auto mt-4" onClick={() => history.push(`/profile/${username}`)}>
                    View Profile
                </Button>
                {isSuccess && (
                    <>
                        <hr className="my-4" />
                        <p className="text-lg font-semibold">Other posts</p>

                        <List>
                            {userPosts?.pages[0].items.slice(0, 5).map((post) => (
                                <List.Item className="w-full text-left" key={`${post.hobbySlug}/${post.token}`}>
                                    <div className="block ml-4 ">
                                        <Button
                                            className={'font-semibold hover:underline text-left w-full'}
                                            onClick={() => history.push(`/hobby/${post.hobbySlug}/${post.token}`)}
                                        >
                                            {post.title}
                                        </Button>
                                    </div>
                                </List.Item>
                            ))}
                        </List>
                    </>
                )}
            </Card>
        </div>
    );
};

export default PostProfileCard;
