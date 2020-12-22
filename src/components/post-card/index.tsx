import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useHistory } from 'react-router-dom';

import Button from '../button';
import { FeedEntry } from '../../types';
import Card from '../card';
import SocialControls from '../social-controls';
import UserProfile from '../user-profile';

dayjs.extend(relativeTime);

type Props = FeedEntry;

const PostCard: React.FC<Props> = (props) => {
    const { token, title, creationDate, slug, hobbyName, children, profile } = props;
    const history = useHistory();

    return (
        <Card noCursor active>
            <article className="min-h-32 max-h-92">
                <UserProfile
                    title={profile.username}
                    src={profile.profileSrc}
                    onClick={() => history.push(`/profile/${profile.username}`)}
                >
                    <Button
                        onClick={() => history.push(`/hobby/${slug}`)}
                        className="text-sm text-gray-500 hover:underline"
                    >{`${hobbyName} - ${dayjs(creationDate).fromNow()}`}</Button>
                </UserProfile>
                <div onClick={() => history.push(`/hobby/${slug}/${token}`)} className="cursor-pointer pl-14">
                    <p className="mt-4 text-xl font-bold">{title}</p>
                    <div className="flex my-2 w-full">{children}</div>
                </div>
                <div className="pl-14">
                    <SocialControls
                        onCommentsClicked={() => history.push(`/hobby/${slug}/${token}`)}
                        likeCount={0}
                        commentCount={0}
                    />
                </div>
            </article>
        </Card>
    );
};

export default PostCard;
