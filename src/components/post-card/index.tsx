import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useHistory } from 'react-router-dom';

import Button from '../button';
import { Profile } from '../../types';
import Card from '../card';
import SocialControls from '../social-controls';
import UserProfile from '../user-profile';

dayjs.extend(relativeTime);

type Props = {
    title: string;
    id: string;
    hobbyId: string;
    created: Date;
    profile: Profile;
};

const PostCard: React.FC<Props> = (props) => {
    const { id, title, created, profile, hobbyId, children } = props;
    const history = useHistory();

    return (
        <Card>
            <article className="min-h-32 max-h-92">
                <UserProfile title={profile.name} src={profile.src} onClick={() => history.push(`/p/${profile.id}`)}>
                    <Button
                        variant="link"
                        onClick={() => history.push(`/h/${hobbyId}`)}
                        className="pl-2 text-sm text-gray-500"
                    >{`/h/${hobbyId} - ${dayjs(created).fromNow()}`}</Button>
                </UserProfile>
                <div className="pl-10">
                    <p className="mt-4 text-xl font-bold">{title}</p>
                    <div className="flex my-2 w-full">{children}</div>

                    <SocialControls
                        onCommentsClicked={() => history.push(`/h/${hobbyId}/p/${id}`)}
                        likeCount={0}
                        commentCount={0}
                    />
                </div>
            </article>
        </Card>
    );
};

export default PostCard;
