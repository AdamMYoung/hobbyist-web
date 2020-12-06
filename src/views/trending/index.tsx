import HobbyCard from '../../components/hobby-card';
import { Hobby } from '../../types';

const Hobbies: Hobby[] = [
    {
        id: '1',
        src: 'https://via.placeholder.com/400',
        title: 'Title 1',
        description: 'Description 1',
        memberCount: 150,
    },
    {
        id: '2',
        src: 'https://via.placeholder.com/400',
        title: 'Title 1',
        description: 'Description 1',
        memberCount: 150,
    },
    {
        id: '3',
        src: 'https://via.placeholder.com/400',
        title: 'Title 1',
        description: 'Description 1',
        memberCount: 150,
    },
    {
        id: '4',
        src: 'https://via.placeholder.com/400',
        title: 'Title 1',
        description: 'Description 1',
        memberCount: 150,
    },
    {
        id: '5',
        src: 'https://via.placeholder.com/400',
        title: 'Title 1',
        description: 'Description 1',
        memberCount: 150,
    },
    {
        id: '6',
        src: 'https://via.placeholder.com/400',
        title: 'Title 1',
        description: 'Description 1',
        memberCount: 150,
    },
    {
        id: '7',
        src: 'https://via.placeholder.com/400',
        title: 'Title 1',
        description: 'Description 1',
        memberCount: 150,
    },
    {
        id: '8',
        src: 'https://via.placeholder.com/400',
        title: 'Title 1',
        description: 'Description 1',
        memberCount: 150,
    },
];

type Props = {
    vertical?: boolean;
};

const Trending = (props: Props) => {
    const { vertical } = props;

    return (
        <div className="flex flex-wrap">
            {Hobbies.map((hobby) => (
                <div key={hobby.id} className={`${vertical ? 'w-full my-2' : 'items-center m-2'}`}>
                    <HobbyCard {...hobby} />
                </div>
            ))}
        </div>
    );
};

export default Trending;
