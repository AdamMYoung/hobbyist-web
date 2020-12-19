import { ImagePost } from '../../types';
import Image from '../image';
import PostCard from '../post-card';

type Props = ImagePost;

const ImagePostCard = (props: Props) => {
    const { images, ...rest } = props;

    const titleImage = images[0];
    const restImages = images.slice(1, 4);
    const lastImage = images[4];
    const restImageCount = images.slice(5).length;

    return (
        <PostCard {...rest}>
            <div className={`${images.length > 1 ? 'w-1/2' : 'w-full'}`}>
                <div className="relative h-48">
                    <Image className="absolute inset-0 w-full h-full object-cover" src={titleImage} alt="" />
                </div>
            </div>

            {restImages && restImages.length > 0 && (
                <div className="flex flex-wrap h-48 w-1/2">
                    {restImages.map((src) => (
                        <div key={src} className="w-1/2">
                            <div className="relative h-24 ">
                                <Image className="absolute inset-0 w-full h-full object-cover" src={src} alt="" />
                            </div>
                        </div>
                    ))}
                    {lastImage && (
                        <div className="w-1/2">
                            <div className="relative h-24">
                                <Image className="absolute inset-0 w-full h-full object-cover" src={lastImage} alt="" />
                                {restImageCount > 0 && (
                                    <p className="absolute text-4xl text-white top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                        +{restImageCount}
                                    </p>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </PostCard>
    );
};

export default ImagePostCard;
