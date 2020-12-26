import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useHistory } from 'react-router-dom';

import { Hobby, Post } from '../../types';
import UserProfile from '../user-profile';
import Card from '../card';
import CommentBox from '../../views/comment-box';
import Comments from '../../views/comments';

dayjs.extend(relativeTime);

type Props = Post & {
    hobby: Hobby;
};

const DetailPostCard: React.FC<Props> = (props) => {
    const { token, title, creationDate, profile, children, hobby } = props;
    const history = useHistory();

    return (
        <Card noCursor className="mb-32">
            <article className="py-4">
                <div className="px-12">
                    <p className="text-6xl font-bold text-center sm:text-left">{title}</p>

                    <div className="mt-8 flex flex-wrap flex-col sm:flex-row justify-items-center items-center">
                        <UserProfile
                            title={profile.username}
                            src={profile.profileSrc}
                            onClick={() => history.push(`/profile/${profile.username}`)}
                        >
                            <p className="text-sm text-gray-500">{dayjs(creationDate).fromNow()}</p>
                        </UserProfile>
                        <div className="flex-grow" />
                        <div className="mt-4 sm:mt-0">
                            <UserProfile
                                size="sm"
                                title={hobby.name}
                                src={hobby.profileSrc}
                                textClassName="text-2xl font-bold hover:underline"
                                onClick={() => history.push(`/hobby/${hobby.slug}`)}
                            />
                        </div>
                    </div>
                    <hr className="my-4" />
                    <div className="flex mt-4 w-full">{children}</div>
                </div>

                <hr className="my-6" />

                <div className="px-12">
                    <p className="text-3xl font-semibold">Discussion</p>
                    <CommentBox hobbySlug={hobby.slug} postToken={token} />

                    <hr className="my-4" />

                    <Comments hobbySlug={hobby.slug} postToken={token} />
                </div>
            </article>
        </Card>
    );
};

export default DetailPostCard;
