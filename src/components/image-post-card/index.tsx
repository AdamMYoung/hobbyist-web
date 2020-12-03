import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ImagePost } from '../../types';
import Button from '../button';
import Card from '../card';
import UserProfile from '../user-profile';

type Props = ImagePost;

const ImagePostCard = (props: Props) => {
    const { profile, title, images, commentCount, likes, liked } = props;

    const titleImage = images[0];
    const restImages = images.slice(1, 4);
    const lastImage = images[4];
    const restImageCount = images.slice(5).length;

    return (
        <Card active>
            <article className="min-h-32 max-h-92">
                <p className="mt-2 text-xl font-bold">{title}</p>
                <div className="flex mt-2 w-full">
                    <div className={`${images.length > 1 ? 'w-1/2' : 'w-full'}`}>
                        <div className={`relative h-48`}>
                            <img className="absolute inset-0 w-full h-full object-cover" src={titleImage} alt="" />
                        </div>
                    </div>

                    {restImages && restImages.length > 0 && (
                        <div className="flex flex-wrap h-48 w-1/2">
                            {restImages.map((src, index) => (
                                <div className="w-1/2">
                                    <div className="relative h-24 ">
                                        <img className="absolute inset-0 w-full h-full object-cover" src={src} alt="" />
                                    </div>
                                </div>
                            ))}
                            {lastImage && (
                                <div className="w-1/2">
                                    <div className="relative h-24">
                                        <img
                                            className="absolute inset-0 w-full h-full object-cover"
                                            src={lastImage}
                                            alt=""
                                        />
                                        {restImageCount > 0 && (
                                            <p className="absolute text-4xl font-semibold text-white top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                                +{restImageCount}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
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

export default ImagePostCard;
