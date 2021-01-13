import { useHistory } from 'react-router-dom';

import { Profile } from '../../types';
import Card from '../card';
import ProfileIcon from '../profile-icon';
import Button from '../button';
import List from '../list';
import { useFeed } from '../../hooks/queries';
import { useMemo } from 'react';

type Props = {
    profile: Profile;
    hobbySlug: string;
    token: string;
    className?: string;
};

const PostProfileCard = (props: Props) => {
    const { className, profile, hobbySlug, token } = props;
    const { username, profileSrc, description } = profile;

    const history = useHistory();
    const { data: userPosts, isSuccess } = useFeed('user', username);

    const otherPosts = useMemo(
        () => userPosts?.pages[0].items.filter((i) => i.hobbySlug !== hobbySlug && i.token !== token).slice(0, 5) ?? [],
        [hobbySlug, token, userPosts?.pages]
    );

    return (
        <div className={`relative w-full ${className}`}>
            <div className="absolute w-full">
                <ProfileIcon size="xl" className="z-10 mx-auto" src={profileSrc} alt={username} />
            </div>
            <Card noCursor className="absolute text-center w-full mt-16">
                <p className="text-lg font-bold mt-14">{username}</p>
                <p className="text-sm mt-2 text-gray-300">{description}</p>
                <Button variant="primary" className="mx-auto mt-4" onClick={() => history.push(`/profile/${username}`)}>
                    View Profile
                </Button>
                {isSuccess && otherPosts.length > 0 && (
                    <>
                        <hr className="my-4" />
                        <p className="text-lg font-semibold">Other posts</p>

                        <List>
                            {otherPosts.map((post) => (
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
