import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TextPost } from '../../types';
import Button from '../button';
import Card from '../card';
import UserProfile from '../user-profile';

type Props = TextPost;

const TextPostCard = (props: Props) => {
    const { profile, title, content, commentCount, likes, liked } = props;

    return (
        <Card active>
            <article className="min-h-32 max-h-64">
                <p className="mt-2 text-xl font-bold">{title}</p>
                <p className="mt-2 my-4 text-md">{content}</p>

                <hr className="mt-2" />

                <div className="flex mt-4">
                    <UserProfile name={profile.name} src={profile.src} onClick={console.log} />

                    <div className="flex-grow" />
                    <Button className="flex items-center">
                        <FontAwesomeIcon size="lg" icon={faComments} />
                        <p className="ml-2 text-lg font-semibold">{commentCount}</p>
                    </Button>
                    <Button className="flex items-center">
                        <FontAwesomeIcon size="lg" icon={faHeart} color={liked ? 'transparent' : 'red'} />
                        <p className="ml-2 text-lg font-semibold">{likes}</p>
                    </Button>
                </div>
            </article>
        </Card>
    );
};

export default TextPostCard;
