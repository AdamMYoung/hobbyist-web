import { useHistory } from 'react-router-dom';
import { Hobby } from '../../types';
import Card from '../card';
import ProfileIcon from '../profile-icon';

type Props = Hobby;

const HobbyCard = (props: Props) => {
    const { id, title, description, src, memberCount } = props;
    const history = useHistory();

    return (
        <Card active className="items-center" onClick={() => history.push(`/h/${id}`)}>
            <article className="block items-center">
                <div className="w-24 mx-auto">
                    <ProfileIcon size="md" src={src} />
                </div>
                <div className="mx-auto mt-2">
                    <p className=" text-xl font-semibold">{title}</p>
                    <p className="text-gray-500 ">{`${memberCount} members`}</p>
                    <p className="text-gray-400 mt-2">{description}</p>
                </div>
            </article>
        </Card>
    );
};

export default HobbyCard;
