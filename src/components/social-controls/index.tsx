import { faComment, faHeart as faHeartFilled } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import IconButton from '../icon-button';

type Props = {
    likeCount: number;
    commentCount: number;
    liked?: boolean;
    onLikeClicked?: () => void;
    onCommentsClicked?: () => void;
};

const SocialControls = (props: Props) => {
    const { liked, likeCount, commentCount, onLikeClicked, onCommentsClicked } = props;

    return (
        <div className="flex">
            <IconButton className="mr-2" onClick={() => onCommentsClicked && onCommentsClicked()} icon={faComment}>
                {commentCount}
            </IconButton>
            <IconButton
                onClick={() => onLikeClicked && onLikeClicked()}
                icon={faHeart}
                activeIcon={faHeartFilled}
                active={liked}
                color="red"
            >
                {likeCount}
            </IconButton>
        </div>
    );
};

export default SocialControls;
