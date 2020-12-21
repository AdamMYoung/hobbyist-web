import { TextPost } from '../../types';
import TextEditor from '../../views/text-editor';
import PostCard from '../post-card';

type Props = TextPost;

const TextPostCard = (props: Props) => {
    const { content, ...rest } = props;

    return (
        <PostCard {...rest}>
            <TextEditor readOnly initialValue={content} />
        </PostCard>
    );
};

export default TextPostCard;
