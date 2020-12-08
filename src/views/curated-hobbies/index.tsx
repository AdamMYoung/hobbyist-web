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
                id: 'one',
                title: 'Drawing',
                src: 'https://via.placeholder.com/400',
                description: 'A thing where you do a hobby',
                memberCount: 1500,
            },
            {
                id: 'one',
                title: 'Drawing',
                src: 'https://via.placeholder.com/400',
                description: 'A thing where you do a hobby',
                memberCount: 1500,
            },
            {
                id: 'one',
                title: 'Drawing',
                src: 'https://via.placeholder.com/400',
                description: 'A thing where you do a hobby',
                memberCount: 1500,
            },
        ],
    },
    {
        id: 'group',
        name: 'Art',
        hobbies: [
            {
                id: 'one',
                title: 'Drawing',
                src: 'https://via.placeholder.com/400',
                description: 'A thing where you do a hobby',
                memberCount: 1500,
            },
            {
                id: 'one',
                title: 'Drawing',
                src: 'https://via.placeholder.com/400',
                description: 'A thing where you do a hobby',
                memberCount: 1500,
            },
            {
                id: 'one',
                title: 'Drawing',
                src: 'https://via.placeholder.com/400',
                description: 'A thing where you do a hobby',
                memberCount: 1500,
            },
        ],
    },
    {
        id: 'group',
        name: 'Art',
        hobbies: [
            {
                id: 'one',
                title: 'Drawing',
                src: 'https://via.placeholder.com/400',
                description: 'A thing where you do a hobby',
                memberCount: 1500,
            },
            {
                id: 'one',
                title: 'Drawing',
                src: 'https://via.placeholder.com/400',
                description: 'A thing where you do a hobby',
                memberCount: 1500,
            },
            {
                id: 'one',
                title: 'Drawing',
                src: 'https://via.placeholder.com/400',
                description: 'A thing where you do a hobby',
                memberCount: 1500,
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
                                <List.Item key={hobby.id} onClick={() => history.push(`/hobby/${hobby.id}`)}>
                                    <div className="flex items-center">
                                        <UserProfile title={hobby.title} src={hobby.src}>
                                            <p className="text-gray-400">{`${hobby.memberCount} members`}</p>
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
