import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { FeedEntry } from '../../types';
import Card from '../card';
import Button from '../button';
import SocialControls from '../social-controls';
import ProfileLink from '../profile-link';
import { getMetadata } from '../../utils/userUtils';

dayjs.extend(relativeTime);

type Props = FeedEntry;

const PostCard: React.FC<Props> = (props) => {
    const { token, title, creationDate, hobbySlug, hobbyName, hobbyProfileSrc, children, profile } = props;
    const history = useHistory();
    const { user } = useAuth0();

    return (
        <Card noCursor>
            <article className="min-h-32 max-h-92">
                <div className="flex items-center">
                    <ProfileLink
                        size="md"
                        title={profile.username}
                        src={profile.profileSrc}
                        onClick={() => history.push(`/profile/${profile.username}`)}
                    >
                        <p className="text-left text-sm text-gray-500">{dayjs(creationDate).fromNow()}</p>
                    </ProfileLink>
                </div>

                <div onClick={() => history.push(`/hobby/${hobbySlug}/${token}`)} className="cursor-pointer pl-20">
                    <p className="mt-4 text-xl font-bold">{title}</p>
                    <div className="flex my-2 w-full">{children}</div>
                </div>
                {profile?.username === getMetadata(user, 'username') && (
                    <div className="flex items-center ml-20 w-full mt-4">
                        <Button
                            className="text-gray-500 text-sm mr-2 hover:underline"
                            onClick={() => history.push(`/hobby/${hobbySlug}/${token}/edit`)}
                        >
                            Edit
                        </Button>
                        <Button className="text-gray-500 text-sm ml-2 hover:underline">Delete</Button>
                    </div>
                )}
                <div className="pl-20 flex items-center mt-4">
                    <ProfileLink
                        title={hobbyName}
                        src={hobbyProfileSrc}
                        onClick={() => history.push(`/hobby/${hobbySlug}`)}
                    />

                    <div className="ml-auto">
                        <SocialControls
                            onCommentsClicked={() => history.push(`/hobby/${hobbySlug}/${token}`)}
                            likeCount={0}
                            commentCount={0}
                        />
                    </div>
                </div>
            </article>
        </Card>
    );
};

export default PostCard;
