import { TextPost } from '../../types';
import PostCard from '../post-card';

type Props = TextPost;

const TextPostCard = (props: Props) => {
    const { content, ...rest } = props;

    return <PostCard {...rest}>{content}</PostCard>;
};

export default TextPostCard;
