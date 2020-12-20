import HobbyCard from '../../components/hobby-card';
import { Hobby } from '../../types';

const Hobbies: Hobby[] = [
    {
        slug: 'one',
        name: 'Drawing',
        profileSrc: 'https://via.placeholder.com/400',
        bannerSrc: 'https://via.placeholder.com/400',
        description: 'A thing where you do a hobby',
        following: true,
    },
    {
        slug: 'one',
        name: 'Drawing',
        profileSrc: 'https://via.placeholder.com/400',
        bannerSrc: 'https://via.placeholder.com/400',
        description: 'A thing where you do a hobby',
        following: true,
    },
    {
        slug: 'one',
        name: 'Drawing',
        profileSrc: 'https://via.placeholder.com/400',
        bannerSrc: 'https://via.placeholder.com/400',
        description: 'A thing where you do a hobby',
        following: true,
    },
    {
        slug: 'one',
        name: 'Drawing',
        profileSrc: 'https://via.placeholder.com/400',
        bannerSrc: 'https://via.placeholder.com/400',
        description: 'A thing where you do a hobby',
        following: true,
    },
    {
        slug: 'one',
        name: 'Drawing',
        profileSrc: 'https://via.placeholder.com/400',
        bannerSrc: 'https://via.placeholder.com/400',
        description: 'A thing where you do a hobby',
        following: true,
    },
    {
        slug: 'one',
        name: 'Drawing',
        profileSrc: 'https://via.placeholder.com/400',
        bannerSrc: 'https://via.placeholder.com/400',
        description: 'A thing where you do a hobby',
        following: true,
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
                <div key={hobby.slug} className={`${vertical ? 'w-full my-2' : 'items-center m-2'}`}>
                    <HobbyCard {...hobby} />
                </div>
            ))}
        </div>
    );
};

export default Trending;
