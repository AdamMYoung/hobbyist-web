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

const DetailPostCard: React.FC<Props> = (props) => {
    const { title, creationDate, hobbyId, children } = props;
    const history = useHistory();

    return (
        <Card noCursor>
            <article className={`min-h-32`}>
                <UserProfile title={''} src={''} onClick={() => history.push(`/profile/${123}`)}>
                    <Button
                        onClick={() => history.push(`/hobby/${hobbyId}`)}
                        className="text-sm text-gray-500 hover:underline"
                    >{`${hobbyId} - ${dayjs(creationDate).fromNow()}`}</Button>
                </UserProfile>
                <div className="pl-14">
                    <p className="mt-4 text-xl font-bold">{title}</p>
                    <div className="flex my-2 w-full">{children}</div>
                </div>
                <div className="pl-14">
                    <SocialControls likeCount={0} commentCount={0} />
                </div>
            </article>
        </Card>
    );
};

export default DetailPostCard;
