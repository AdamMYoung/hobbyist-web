import { useAuth0 } from '@auth0/auth0-react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Node } from 'slate';

import Button from '../../components/button';
import List from '../../components/list';
import ProfileLink from '../../components/profile-link';
import { useMutateUpdateComment } from '../../hooks/mutations';
import { useComments } from '../../hooks/queries';
import { CommentEntry } from '../../types';
import { getMetadata } from '../../utils/userUtils';
import TextEditor from '../text-editor';

dayjs.extend(relativeTime);

type Props = {
    hobbySlug: string;
    postToken: string;
};

const Comment = ({ entry, hobbySlug, postToken }: { entry: CommentEntry; hobbySlug: string; postToken: string }) => {
    const history = useHistory();
    const { user } = useAuth0();

    const [isEditing, setEditing] = useState<boolean>(false);
    const [content, setContent] = useState<Node[]>(entry.content);
    const { mutate: updateComment, isLoading, isSuccess } = useMutateUpdateComment(hobbySlug, postToken, entry.uid);

    useEffect(() => {
        if (isSuccess) setEditing(false);
    }, [isSuccess]);

    const handleSave = () => {
        if (!!content) {
            updateComment({ content, rootUid: entry.rootUid });
        }
    };

    return (
        <div>
            <ProfileLink
                src={entry.profile?.profileSrc}
                title={entry.profile?.username}
                onClick={() => history.push(`/profile/${entry.profile?.username}`)}
            >
                <p className="text-sm text-left text-gray-500">{dayjs(entry.creationDate).fromNow()}</p>
            </ProfileLink>

            <div className="ml-14 mt-2 text-left w-full">
                <TextEditor readOnly={!isEditing} value={content} onChange={setContent} />
            </div>
            {entry.profile?.username === getMetadata(user, 'username') && (
                <div className="flex items-center ml-12 mt-2 w-full">
                    {!isEditing ? (
                        <>
                            <Button
                                className="text-gray-500 text-sm mx-2 hover:underline"
                                onClick={() => setEditing(true)}
                            >
                                Edit
                            </Button>
                            <Button className="text-gray-500 text-sm mx-2 hover:underline">Delete</Button>
                        </>
                    ) : (
                        <div className="flex items-center w-full">
                            <div className="flex-grow" />
                            <Button
                                className="text-gray-500 text-sm mr-2 hover:underline"
                                onClick={() => setEditing(false)}
                            >
                                Cancel
                            </Button>

                            <Button className="ml-2" variant="primary" disabled={isLoading} onClick={handleSave}>
                                Save
                            </Button>
                        </div>
                    )}
                </div>
            )}
            <div className="my-2 ml-2">
                <List>
                    {entry.replies.map((r) => (
                        <List.Item key={r.uid}>
                            <Comment entry={r} hobbySlug={hobbySlug} postToken={postToken} />
                        </List.Item>
                    ))}
                </List>
            </div>
        </div>
    );
};

const Comments = (props: Props) => {
    const { hobbySlug, postToken } = props;

    const { data: comments, isLoading, isSuccess } = useComments(hobbySlug, postToken);

    if (isLoading || !isSuccess) return null;

    return (
        <List>
            {comments?.pages.map(
                (p) =>
                    p.items &&
                    p.items.map((comment) => (
                        <List.Item key={comment.uid}>
                            <Comment entry={comment} hobbySlug={hobbySlug} postToken={postToken} />
                        </List.Item>
                    ))
            )}
        </List>
    );
};

export default Comments;
