import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useHistory } from 'react-router-dom';

import Button from '../button';
import { FeedEntry } from '../../types';
import Card from '../card';
import SocialControls from '../social-controls';
import ProfileIcon from '../profile-icon';
import UserProfile from '../user-profile';

dayjs.extend(relativeTime);

type Props = FeedEntry;

const PostCard: React.FC<Props> = (props) => {
    const { token, title, creationDate, hobbySlug, hobbyName, hobbyProfileSrc, children, profile } = props;
    const history = useHistory();

    return (
        <Card noCursor>
            <article className="min-h-32 max-h-92">
                <div className="flex items-center">
                    <UserProfile
                        size="md"
                        title={profile.username}
                        src={profile.profileSrc}
                        onClick={() => history.push(`/profile/${profile.username}`)}
                    >
                        <p className="text-left text-sm text-gray-500">{dayjs(creationDate).fromNow()}</p>
                    </UserProfile>
                </div>

                <div onClick={() => history.push(`/hobby/${hobbySlug}/${token}`)} className="cursor-pointer pl-20">
                    <p className="mt-4 text-xl font-bold">{title}</p>
                    <div className="flex my-2 w-full">{children}</div>
                </div>
                <div className="pl-20 flex items-center">
                    <UserProfile
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
