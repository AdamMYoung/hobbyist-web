import { useHistory } from 'react-router-dom';

import ProfileIcon from '../../components/profile-icon';
import { Hobby } from '../../types';

type Props = {
    hobbies: Hobby[];
};

const ProfileHobbies = (props: Props) => {
    const history = useHistory();

    return (
        <>
            {props.hobbies.map((hobby) => (
                <div className="flex items-center mt-3" onClick={() => history.push(`/hobby/${hobby.id}`)}>
                    <ProfileIcon src={hobby.src} alt={hobby.title} />
                    <p className="ml-2">{hobby.title}</p>
                </div>
            ))}
        </>
    );
};

export default ProfileHobbies;
