import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { Profile } from '../../types';
import Card from '../card';
import SocialControls from '../social-controls';
import UserProfile from '../user-profile';

dayjs.extend(relativeTime);

type Props = {
    title: string;
    created: Date;
    profile: Profile;
};

const PostCard: React.FC<Props> = (props) => {
    const { title, created, profile, children } = props;

    return (
        <Card active>
            <article className="min-h-32 max-h-92">
                <UserProfile src={profile.src} onClick={console.log}>
                    <div>
                        <p className="text-sm my-0">{profile.name}</p>
                        <p className="text-sm my-0 text-gray-500">{dayjs(created).fromNow()}</p>
                    </div>
                </UserProfile>
                <div className="pl-10">
                    <p className="mt-4 text-xl font-bold">{title}</p>
                    <div className="flex my-2 w-full">{children}</div>

                    <SocialControls likeCount={0} commentCount={0} />
                </div>
            </article>
        </Card>
    );
};

export default PostCard;
