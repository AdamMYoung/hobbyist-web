import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useHistory } from 'react-router-dom';

import Button from '../button';
import { Post } from '../../types';
import UserProfile from '../user-profile';
import Card from '../card';

dayjs.extend(relativeTime);

type Props = Post;

const DetailPostCard: React.FC<Props> = (props) => {
    const { title, creationDate, hobbySlug, hobbyName, profile, children } = props;
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
                        <Button
                            onClick={() => history.push(`/hobby/${hobbySlug}`)}
                            className="text-sm text-gray-500 hover:underline "
                        >{`${hobbyName} - ${dayjs(creationDate).fromNow()}`}</Button>
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
