import { useHistory } from 'react-router-dom';
import List from '../../components/list';

import ProfileIcon from '../../components/profile-icon';
import { Hobby } from '../../types';

type Props = {
    hobbies: Hobby[];
};

const ProfileHobbies = (props: Props) => {
    const history = useHistory();

    return (
        <List narrow active>
            {props.hobbies.map((hobby) => (
                <List.Item onClick={() => history.push(`/hobby/${hobby.id}`)}>
                    <div className="flex items-center">
                        <ProfileIcon src={hobby.src} alt={hobby.title} />
                        <p className="ml-2">{hobby.title}</p>
                    </div>
                </List.Item>
            ))}
        </List>
    );
};

export default ProfileHobbies;
