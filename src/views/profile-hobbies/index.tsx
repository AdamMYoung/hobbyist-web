import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';

import ProfileIcon from '../../components/profile-icon';
import { useUserHobbies } from '../../hooks/queries';
import { getMetadata } from '../../utils/userUtils';

const ProfileHobbies = () => {
    const { user } = useAuth0();
    const history = useHistory();

    const { data, isSuccess } = useUserHobbies(getMetadata(user, 'username'));

    return (
        <div className="flex flex-wrap w-full">
            {isSuccess &&
                data?.map((hobby) => (
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
