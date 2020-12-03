import { PostTypes } from '../../types';
import TextPostCard from '../../components/text-post-card';
import ImagePostCard from '../../components/image-post-card';

const posts: PostTypes[] = [
    {
        type: 'text',
        profile: {
            id: 'Bob',
            name: 'John Doe',
            src: 'https://via.placeholder.com/150',
        },

        title: 'Test Post',
        content: 'This is the text content',
        likes: 0,
        commentCount: 0,
    },
    {
        type: 'image',
        profile: {
            id: 'Bob',
            name: 'John Doe',
            src: 'https://via.placeholder.com/150',
        },

        title: 'Test Post',
        images: ['https://via.placeholder.com/150'],
        likes: 0,
        commentCount: 0,
    },
    {
        type: 'image',
        profile: {
            id: 'Bob',
            name: 'John Doe',
            src: 'https://via.placeholder.com/150',
        },

        title: 'Test Post',
        images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
        likes: 0,
        commentCount: 0,
    },
    {
        type: 'text',
        profile: {
            id: 'Bob',
            name: 'John Doe',
            src: 'https://via.placeholder.com/150',
        },

        title: 'Test Post',
        content: 'This is the text content',
        likes: 0,
        commentCount: 0,
    },
    {
        type: 'text',
        profile: {
            id: 'Bob',
            name: 'John Doe',
            src: 'https://via.placeholder.com/150',
        },

        title: 'Test Post',
        content: 'This is the text content',
        likes: 0,
        commentCount: 0,
    },
    {
        type: 'image',
        profile: {
            id: 'Bob',
            name: 'John Doe',
            src: 'https://via.placeholder.com/150',
        },

        title: 'Test Post',
        images: [
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/150',
        ],
        likes: 0,
        commentCount: 0,
    },
    {
        type: 'text',
        profile: {
            id: 'Bob',
            name: 'John Doe',
            src: 'https://via.placeholder.com/150',
        },

        title: 'Test Post',
        content: 'This is the text content',
        likes: 0,
        commentCount: 0,
    },
    {
        type: 'text',
        profile: {
            id: 'Bob',
            name: 'John Doe',
            src: 'https://via.placeholder.com/150',
        },

        title: 'Test Post',
        content: 'This is the text content',
        likes: 0,
        commentCount: 0,
    },
    {
        type: 'image',
        profile: {
            id: 'Bob',
            name: 'John Doe',
            src: 'https://via.placeholder.com/150',
        },

        title: 'Test Post',
        images: [
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/150',
        ],
        likes: 0,
        commentCount: 0,
    },
    {
        type: 'image',
        profile: {
            id: 'Bob',
            name: 'John Doe',
            src: 'https://via.placeholder.com/150',
        },

        title: 'Test Post',
        images: [
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/150',
        ],
        likes: 0,
        commentCount: 0,
    },
    {
        type: 'text',
        profile: {
            id: 'Bob',
            name: 'John Doe',
            src: 'https://via.placeholder.com/150',
        },

        title: 'Test Post',
        content: 'This is the text content',
        likes: 0,
        commentCount: 0,
    },
    {
        type: 'text',
        profile: {
            id: 'Bob',
            name: 'John Doe',
            src: 'https://via.placeholder.com/150',
        },

        title: 'Test Post',
        content: 'This is the text content',
        likes: 0,
        commentCount: 0,
    },
    {
        type: 'image',
        profile: {
            id: 'Bob',
            name: 'John Doe',
            src: 'https://via.placeholder.com/150',
        },

        title: 'Test Post',
        images: [
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/150',
        ],
        likes: 0,
        commentCount: 0,
    },
];

const Feed = () => {
    return (
        <>
            <h1 className="text-4xl font-bold text-center mt-2">Feed.</h1>
            <p className="text-gray-400 mt-2 text-center">Recent posts from hobbies you're interested in.</p>
            {posts.map((post) => (
                <div className="my-4">
                    {post.type === 'text' ? <TextPostCard {...post} /> : <ImagePostCard {...post} />}
                </div>
            ))}
        </>
    );
};

export default Feed;
