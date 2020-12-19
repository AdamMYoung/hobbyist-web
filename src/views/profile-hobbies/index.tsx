import { useHistory } from 'react-router-dom';

import ProfileIcon from '../../components/profile-icon';
import { Hobby } from '../../types';

type Props = {
    hobbies: Hobby[];
};

const ProfileHobbies = (props: Props) => {
    const history = useHistory();

    return (
        <div className="flex flex-wrap w-full">
            {props.hobbies.map((hobby) => (
                <div
                    className="my-2 mx-1 border rounded-lg p-2 transition bg-white hover:bg-gray-100 cursor-pointer"
                    onClick={() => history.push(`/hobby/${hobby.slug}`)}
                >
                    <div className="flex items-center">
                        <ProfileIcon src={hobby.profileSrc} alt={hobby.name} />
                        <p className="ml-2">{hobby.name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProfileHobbies;
