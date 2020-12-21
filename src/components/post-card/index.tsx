import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useHistory } from 'react-router-dom';

import Button from '../button';
import { Post } from '../../types';
import Card from '../card';
import SocialControls from '../social-controls';
import UserProfile from '../user-profile';

dayjs.extend(relativeTime);

type Props = Post;

const PostCard: React.FC<Props> = (props) => {
    const { token, title, creationDate, hobbyId, children } = props;
    const history = useHistory();

    return (
        <Card noCursor active>
            <article className="min-h-32 max-h-92">
                <UserProfile title={''} src={''} onClick={() => history.push(`/profile/${123}`)}>
                    <Button
                        onClick={() => history.push(`/hobby/${hobbyId}`)}
                        className="text-sm text-gray-500 hover:underline"
                    >{`${hobbyId} - ${dayjs(creationDate).fromNow()}`}</Button>
                </UserProfile>
                <div onClick={() => history.push(`/hobby/${hobbyId}/${token}`)} className="cursor-pointer pl-14">
                    <p className="mt-4 text-xl font-bold">{title}</p>
                    <div className="flex my-2 w-full">{children}</div>
                </div>
                <div className="pl-14">
                    <SocialControls
                        onCommentsClicked={() => history.push(`/hobby/${hobbyId}/${token}`)}
                        likeCount={0}
                        commentCount={0}
                    />
                </div>
            </article>
        </Card>
    );
};

export default PostCard;
