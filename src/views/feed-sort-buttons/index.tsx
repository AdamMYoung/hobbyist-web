import ButtonGroup from '../../components/button-group';
import Button from '../../components/button';
import { FeedSortType } from '../../types';

type Props = {
    disableFeedSort?: boolean;
    onSortChanged: (sortType: FeedSortType) => void;
    currentSortType: FeedSortType;
};

const FeedSortButtons = (props: Props) => {
    const { onSortChanged, currentSortType, disableFeedSort } = props;

    return (
        <ButtonGroup>
            {!disableFeedSort && (
                <Button
                    active={currentSortType === FeedSortType.Feed}
                    onClick={() => onSortChanged(FeedSortType.Feed)}
                    variant="primary"
                >
                    Feed
                </Button>
            )}
            <Button
                active={currentSortType === FeedSortType.New}
                onClick={() => onSortChanged(FeedSortType.New)}
                variant="primary"
            >
                New
            </Button>
            <Button
                active={currentSortType === FeedSortType.Week}
                onClick={() => onSortChanged(FeedSortType.Week)}
                variant="primary"
            >
                Week
            </Button>
            <Button
                active={currentSortType === FeedSortType.Month}
                onClick={() => onSortChanged(FeedSortType.Month)}
                variant="primary"
            >
                Month
            </Button>
            <Button
                active={currentSortType === FeedSortType.Year}
                onClick={() => onSortChanged(FeedSortType.Year)}
                variant="primary"
            >
                Year
            </Button>
        </ButtonGroup>
    );
};

export default FeedSortButtons;
