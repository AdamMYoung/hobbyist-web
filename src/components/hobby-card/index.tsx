import Card from '../card';
import ProfileIcon from '../profile-icon';

type Props = {
    src: string;
    title: string;
    memberCount: number;
    description: string;
};

const HobbyCard = (props: Props) => {
    const { title, description, src, memberCount } = props;

    return (
        <Card active className="items-center">
            <article className="flex items-center">
                <ProfileIcon size="md" src={src} />

                <div className="mx-auto">
                    <p className=" text-xl font-semibold">{title}</p>
                    <p className="text-gray-500 ">{`${memberCount} members`}</p>
                    <p className="text-gray-400 mt-2">{description}</p>
                </div>
            </article>
        </Card>
    );
};

export default HobbyCard;
