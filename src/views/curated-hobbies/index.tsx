import { useHistory } from 'react-router-dom';

import Button from '../../components/button';
import Card from '../../components/card';
import List from '../../components/list';
import UserProfile from '../../components/user-profile';
import { HobbyCategory } from '../../types';

const Groups: HobbyCategory[] = [
    {
        id: 'group',
        name: 'Art',
        hobbies: [
            {
                slug: 'one',
                name: 'Drawing',
                profileSrc: 'https://via.placeholder.com/400',
                bannerSrc: 'https://via.placeholder.com/400',
                description: 'A thing where you do a hobby',
            },
            {
                slug: 'one',
                name: 'Drawing',
                profileSrc: 'https://via.placeholder.com/400',
                description: 'A thing where you do a hobby',
                bannerSrc: 'https://via.placeholder.com/400',
            },
            {
                slug: 'one',
                name: 'Drawing',
                profileSrc: 'https://via.placeholder.com/400',
                description: 'A thing where you do a hobby',
                bannerSrc: 'https://via.placeholder.com/400',
            },
        ],
    },
    {
        id: 'group',
        name: 'Art',
        hobbies: [
            {
                slug: 'one',
                name: 'Drawing',
                profileSrc: 'https://via.placeholder.com/400',
                description: 'A thing where you do a hobby',
                bannerSrc: 'https://via.placeholder.com/400',
            },
            {
                slug: 'one',
                name: 'Drawing',
                profileSrc: 'https://via.placeholder.com/400',
                description: 'A thing where you do a hobby',
                bannerSrc: 'https://via.placeholder.com/400',
            },
            {
                slug: 'one',
                name: 'Drawing',
                profileSrc: 'https://via.placeholder.com/400',
                description: 'A thing where you do a hobby',
                bannerSrc: 'https://via.placeholder.com/400',
            },
        ],
    },
    {
        id: 'group',
        name: 'Art',
        hobbies: [
            {
                slug: 'one',
                name: 'Drawing',
                profileSrc: 'https://via.placeholder.com/400',
                description: 'A thing where you do a hobby',
                bannerSrc: 'https://via.placeholder.com/400',
            },
            {
                slug: 'one',
                name: 'Drawing',
                profileSrc: 'https://via.placeholder.com/400',
                description: 'A thing where you do a hobby',
                bannerSrc: 'https://via.placeholder.com/400',
            },
            {
                slug: 'one',
                name: 'Drawing',
                profileSrc: 'https://via.placeholder.com/400',
                description: 'A thing where you do a hobby',
                bannerSrc: 'https://via.placeholder.com/400',
            },
        ],
    },
];

const CuratedHobbies = () => {
    const history = useHistory();

    return (
        <div className="flex flex-wrap">
            {Groups.map((group) => (
                <div key={group.id} className="w-full lg:w-1/2 lg:px-2">
                    <Card className="my-2">
                        <h2 className="text-2xl font-semibold my-2">{group.name}</h2>
                        <List active>
                            {group.hobbies.map((hobby) => (
                                <List.Item key={hobby.slug} onClick={() => history.push(`/hobby/${hobby.slug}`)}>
                                    <div className="flex items-center">
                                        <UserProfile title={hobby.name} src={hobby.profileSrc}>
                                            <p className="text-gray-400">{`${1} members`}</p>
                                        </UserProfile>

                                        <Button className="ml-auto" variant="primary">
                                            Follow
                                        </Button>
                                    </div>

                                    <p className="text-gray-400 mt-2">{hobby.description}</p>
                                </List.Item>
                            ))}
                        </List>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default CuratedHobbies;
