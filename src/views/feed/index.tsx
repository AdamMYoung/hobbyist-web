import { PostTypes } from '../../types';
import TextPostCard from '../../components/text-post-card';
import ImagePostCard from '../../components/image-post-card';

const posts: PostTypes[] = [
    {
        id: '1',
        hobbyId: 'knitting',
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
        hobbyId: 'knitting',
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
        hobbyId: 'knitting',
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
        hobbyId: 'knitting',
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
        hobbyId: 'knitting',
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
        hobbyId: 'knitting',
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
        hobbyId: 'knitting',
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
        hobbyId: 'knitting',
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
        hobbyId: 'knitting',
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
        hobbyId: 'knitting',
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
        hobbyId: 'knitting',
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
        hobbyId: 'knitting',
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
        hobbyId: 'knitting',
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
