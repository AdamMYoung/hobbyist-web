import React, { useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { FeedEntry } from '../../types';
import Card from '../card';
import Button from '../button';
import SocialControls from '../social-controls';
import ProfileLink from '../profile-link';
import { getMetadata } from '../../utils/userUtils';
import Modal from '../modal';
import { useMutateDeletePost } from '../../hooks/mutations';

dayjs.extend(relativeTime);

type Props = FeedEntry;

const PostCard: React.FC<Props> = (props) => {
    const { token, title, creationDate, hobbySlug, hobbyName, hobbyProfileSrc, children, profile } = props;

    const [isOpen, setOpen] = useState<boolean>(false);
    const { mutate: deletePost, isLoading } = useMutateDeletePost(hobbySlug, token);
    const history = useHistory();
    const { user } = useAuth0();

    return (
        <>
            <Card noCursor>
                <article className="min-h-32 max-h-92">
                    <div className="flex items-center">
                        <ProfileLink
                            size="md"
                            title={profile.username}
                            src={profile.profileSrc}
                            onClick={() => history.push(`/profile/${profile.username}`)}
                        >
                            <p className="text-left text-sm text-gray-500">{dayjs(creationDate).fromNow()}</p>
                        </ProfileLink>
                    </div>

                    <div onClick={() => history.push(`/hobby/${hobbySlug}/${token}`)} className="cursor-pointer pl-20">
                        <p className="mt-4 text-xl font-bold">{title}</p>
                        <div className="flex my-2 w-full">{children}</div>
                    </div>

                    <div className="pl-20 flex items-center mt-4">
                        <ProfileLink
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

                    <div
                        className={`items-center mt-2 ml-20 w-full -mb-2 ${
                            profile?.username === getMetadata(user, 'username') ? 'flex' : 'hidden'
                        }`}
                    >
                        <Button
                            className="text-gray-400 text-xs mr-2 hover:underline"
                            onClick={() => history.push(`/hobby/${hobbySlug}/${token}/edit`)}
                        >
                            Edit
                        </Button>
                        <Button className="text-gray-400 text-xs mx-2 hover:underline" onClick={() => setOpen(true)}>
                            Delete
                        </Button>
                    </div>
                </article>
            </Card>
            <Modal title="Delete Post" open={isOpen} onClose={() => setOpen(false)}>
                <p className="mb-4">Are you sure you want to delete this post? This cannot be undone.</p>
                <div className="flex">
                    <Button variant="secondary" onClick={() => deletePost()} disabled={isLoading}>
                        Delete
                    </Button>
                    <Button className="ml-auto" variant="primary" onClick={() => setOpen(false)} disabled={isLoading}>
                        Cancel
                    </Button>
                </div>
            </Modal>
        </>
    );
};

export default PostCard;
