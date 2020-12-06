import { PostTypes } from '../../types';
import TextPostCard from '../../components/text-post-card';
import ImagePostCard from '../../components/image-post-card';

const posts: PostTypes[] = [
    {
        id: '1',
        type: 'text',
        created: new Date(),
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
        id: '2',
        type: 'image',
        created: new Date(),
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
        id: '3',
        type: 'image',
        created: new Date(),
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
        id: '4',
        type: 'text',
        created: new Date(),
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
        id: '5',
        type: 'text',
        created: new Date(),
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
        id: '6',
        type: 'image',
        created: new Date(),
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
        id: '7',
        type: 'text',
        created: new Date(),
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
        id: '8',
        type: 'text',
        created: new Date(),
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
        id: '9',
        type: 'image',
        created: new Date(),
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
        id: '10',
        type: 'image',
        created: new Date(),
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
        id: '11',
        type: 'text',
        created: new Date(),
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
        id: '12',
        type: 'text',
        created: new Date(),
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
        id: '13',
        type: 'image',
        created: new Date(),
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
        <div className="mt-4">
            {posts.map((post) => (
                <div className="mb-4">
                    {post.type === 'text' ? <TextPostCard {...post} /> : <ImagePostCard {...post} />}
                </div>
            ))}
        </div>
    );
};

export default Feed;
