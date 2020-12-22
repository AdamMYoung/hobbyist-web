import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useHistory } from 'react-router-dom';

import { Post } from '../../types';
import UserProfile from '../user-profile';
import Card from '../card';

dayjs.extend(relativeTime);

type Props = Post;

const DetailPostCard: React.FC<Props> = (props) => {
    const { title, creationDate, profile, children } = props;
    const history = useHistory();

    return (
        <Card noCursor>
            <article className="py-4">
                <div className="px-12">
                    <p className="mb-4 text-6xl font-bold">{title}</p>

                    <UserProfile
                        title={profile.username}
                        src={profile.profileSrc}
                        onClick={() => history.push(`/profile/${profile.username}`)}
                    >
                        <p className="text-sm text-gray-500">{dayjs(creationDate).fromNow()}</p>
                    </UserProfile>

                    <div className="flex mt-4 w-full">{children}</div>
                </div>

                <hr className="my-6" />

                <div className="px-12">
                    <p className="text-3xl font-semibold">Discussion</p>
                </div>
            </article>
        </Card>
    );
};

export default DetailPostCard;
