import { useAuth0 } from '@auth0/auth0-react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useHistory } from 'react-router-dom';

import Button from '../../components/button';
import List from '../../components/list';
import UserProfile from '../../components/user-profile';
import { useComments } from '../../hooks/queries';
import { CommentEntry } from '../../types';
import { getMetadata } from '../../utils/userUtils';
import TextEditor from '../text-editor';

dayjs.extend(relativeTime);

type Props = {
    hobbySlug: string;
    postToken: string;
};

const Comment = ({ entry }: { entry: CommentEntry }) => {
    const history = useHistory();
    const { user } = useAuth0();

    return (
        <div>
            <UserProfile
                src={entry.profile?.profileSrc}
                title={entry.profile?.username}
                onClick={() => history.push(`/profile/${entry.profile?.username}`)}
            >
                <p className="text-sm text-left text-gray-500">{dayjs(entry.creationDate).fromNow()}</p>
            </UserProfile>

            <div className="ml-14 mt-2 text-left">
                <TextEditor readOnly initialValue={entry.content} />
            </div>
            {entry.profile?.username === getMetadata(user, 'username') && (
                <div className="flex items-center mt-2">
                    <Button className="text-gray-500 text-sm mx-2 hover:underline">Edit</Button>
                    <Button className="text-gray-500 text-sm mx-2 hover:underline">Delete</Button>
                </div>
            )}
            <div className="my-2 ml-2">
                <List>
                    {entry.replies.map((r) => (
                        <List.Item key={r.uid}>
                            <Comment entry={r} />
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
                            <Comment entry={comment} />
                        </List.Item>
                    ))
            )}
        </List>
    );
};

export default Comments;
