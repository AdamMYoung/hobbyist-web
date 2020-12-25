import UserProfile from '../../components/user-profile';
import { useComments } from '../../hooks/queries';
import { CommentEntry } from '../../types';
import TextEditor from '../text-editor';

type Props = {
    hobbySlug: string;
    postToken: string;
};

const Comment = ({ entry }: { entry: CommentEntry }) => {
    return (
        <div>
            <UserProfile src={entry.profile?.profileSrc} title={entry.profile?.username} />
            <TextEditor readOnly initialValue={entry.content} />
            <div className="mt-2 ml-2">
                {entry.replies.map((r) => (
                    <Comment entry={r} />
                ))}
            </div>
        </div>
    );
};

const Comments = (props: Props) => {
    const { hobbySlug, postToken } = props;

    const { data: comments, isLoading } = useComments(hobbySlug, postToken);

    if (isLoading) return null;

    return <>{comments?.pages.map((p) => p.items.map((comment) => <Comment entry={comment} />))}</>;
};

export default Comments;
