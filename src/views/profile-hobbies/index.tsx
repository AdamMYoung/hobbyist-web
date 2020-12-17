import { useHistory } from 'react-router-dom';

import ProfileIcon from '../../components/profile-icon';
import { Hobby } from '../../types';

type Props = {
    hobbies: Hobby[];
};

const ProfileHobbies = (props: Props) => {
    const history = useHistory();

    return (
        <div className="flex overflow-hidden overflow-x-auto justify-evenly">
            {props.hobbies.map((hobby) => (
                <div
                    className="my-2 mx-1 border rounded-lg p-2  transition hover:bg-gray-100 cursor-pointer"
                    onClick={() => history.push(`/hobby/${hobby.id}`)}
                >
                    <div className="flex items-center">
                        <ProfileIcon src={hobby.src} alt={hobby.title} />
                        <p className="ml-2">{hobby.title}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProfileHobbies;
