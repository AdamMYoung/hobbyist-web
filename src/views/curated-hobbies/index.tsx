import { useHistory } from 'react-router-dom';
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
                <div className="w-full lg:w-1/2 lg:px-2">
                    <Card className="my-2">
                        <h2 className="text-2xl font-semibold my-2">{group.name}</h2>
                        <List active>
                            {group.hobbies.map((hobby) => (
                                <List.Item onClick={() => history.push(`/h/${hobby.id}`)}>
                                    <UserProfile src={hobby.src}>
                                        <p>{hobby.title}</p>
                                    </UserProfile>
                                    <p className="text-gray-400 mt-2">{`${hobby.memberCount} members`}</p>
                                    <p className="text-gray-400">{hobby.description}</p>
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
