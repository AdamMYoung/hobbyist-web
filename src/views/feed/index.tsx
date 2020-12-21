import { PostTypes } from '../../types';
import TextPostCard from '../../components/text-post-card';
import ImagePostCard from '../../components/image-post-card';

const posts: PostTypes[] = [
    {
        token: '1',
        hobbyId: 'knitting',
        type: 'text',
        creationDate: new Date(),
        slug: '',
        title: 'Test Post',
        content: [],
    },
];

const Feed = () => {
    return (
        <div>
            {posts.map((post) => (
                <div key={post.token} className="mb-4">
                    {post.type === 'text' ? <TextPostCard {...post} /> : <ImagePostCard {...post} />}
                </div>
            ))}
        </div>
    );
};

export default Feed;
