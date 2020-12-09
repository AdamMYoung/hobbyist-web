import { useMemo } from 'react';
import Select from 'react-select';
import { FeedSortType } from '../../types';

type Props = {
    disableFeedSort?: boolean;
    onSortChanged: (sortType: FeedSortType) => void;
    currentSortType: FeedSortType;
};

const FeedSortDropdown = (props: Props) => {
    const { onSortChanged, currentSortType, disableFeedSort } = props;

    const options = useMemo(() => {
        const selectOptions = [
            { value: FeedSortType.New, label: 'New' },
            { value: FeedSortType.Week, label: 'Week' },
            { value: FeedSortType.Month, label: 'Month' },
            { value: FeedSortType.Year, label: 'Year' },
        ];

        if (!disableFeedSort) selectOptions.splice(0, 0, { value: FeedSortType.Feed, label: ' Feed' });
        return selectOptions;
    }, [disableFeedSort]);

    const currentValue = useMemo(() => options.filter((o) => o.value === currentSortType)[0], [
        options,
        currentSortType,
    ]);

    return <Select options={options} value={currentValue} onChange={(entry) => entry && onSortChanged(entry?.value)} />;
};

export default FeedSortDropdown;
