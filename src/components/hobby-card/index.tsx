import { useHistory } from 'react-router-dom';
import { Hobby } from '../../types';
import Card from '../card';
import ProfileIcon from '../profile-icon';

type Props = Hobby;

const HobbyCard = (props: Props) => {
    const { slug, name, description, profileSrc } = props;
    const history = useHistory();

    return (
        <Card active className="items-center" onClick={() => history.push(`/hobby/${slug}`)}>
            <article className="block items-center">
                <div className="w-24 mx-auto">
                    <ProfileIcon size="md" src={profileSrc} />
                </div>
                <div className="mx-auto mt-2">
                    <p className=" text-xl font-semibold">{name}</p>
                    <p className="text-gray-500 ">{`${1} members`}</p>
                    <p className="text-gray-400 mt-2">{description}</p>
                </div>
            </article>
        </Card>
    );
};

export default HobbyCard;
