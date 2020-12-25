import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useHistory } from 'react-router-dom';
import List from '../../components/list';

import UserProfile from '../../components/user-profile';
import { useComments } from '../../hooks/queries';
import { CommentEntry } from '../../types';
import TextEditor from '../text-editor';

dayjs.extend(relativeTime);

type Props = {
    hobbySlug: string;
    postToken: string;
};

const Comment = ({ entry }: { entry: CommentEntry }) => {
    const history = useHistory();

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
            <div className="my-2 ml-2">
                <List>
                    {entry.replies.map((r) => (
                        <List.Item>
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

    const { data: comments, isLoading } = useComments(hobbySlug, postToken);

    if (isLoading) return null;

    return (
        <List>
            {comments?.pages.map((p) =>
                p.items.map((comment) => (
                    <List.Item>
                        <Comment entry={comment} />
                    </List.Item>
                ))
            )}
        </List>
    );
};

export default Comments;
