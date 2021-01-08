import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { Hobby, Post } from '../../types';
import ProfileLink from '../profile-link';
import Card from '../card';
import Button from '../button';
import CommentBox from '../../views/comment-box';
import Comments from '../../views/comments';
import { getMetadata } from '../../utils/userUtils';

dayjs.extend(relativeTime);

type Props = Post & {
    hobby: Hobby;
};

const DetailPostCard: React.FC<Props> = (props) => {
    const { token, title, creationDate, profile, children, hobby } = props;
    const history = useHistory();
    const { user } = useAuth0();

    return (
        <Card noCursor className="mb-32">
            <article className="py-4">
                <div className="px-4 sm:px-12">
                    <p className="text-6xl font-bold text-center sm:text-left">{title}</p>

                    <div className="mt-8 flex flex-wrap flex-col sm:flex-row justify-items-center items-center">
                        <ProfileLink
                            title={profile.username}
                            src={profile.profileSrc}
                            onClick={() => history.push(`/profile/${profile.username}`)}
                        >
                            <p className="text-sm text-gray-500">{dayjs(creationDate).fromNow()}</p>
                        </ProfileLink>
                        <div className="flex-grow" />
                        <div className="mt-4 sm:mt-0">
                            <ProfileLink
                                size="sm"
                                title={hobby.name}
                                src={hobby.profileSrc}
                                textClassName="text-2xl font-bold hover:underline"
                                onClick={() => history.push(`/hobby/${hobby.slug}`)}
                            />
                        </div>
                    </div>
                    {profile?.username === getMetadata(user, 'username') && (
                        <>
                            <hr className="my-4" />
                            <div className="flex items-center">
                                <Button
                                    className="text-gray-500 mx-2 hover:underline"
                                    onClick={() => history.push(`/hobby/${hobby.slug}/${token}/edit`)}
                                >
                                    Edit
                                </Button>
                                <Button className="text-gray-500 mx-2 hover:underline">Delete</Button>
                            </div>
                        </>
                    )}
                    <hr className="my-4" />
                    <div className="flex mt-4 w-full">{children}</div>
                </div>

                <hr className="my-6" />

                <div className="px-4 sm:px-12">
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
