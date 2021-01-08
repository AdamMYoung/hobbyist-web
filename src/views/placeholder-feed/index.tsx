import PlaceholderCard from '../../components/placeholder-card';

type Props = {
    animated?: boolean;
    count?: number;
};

const PlaceholderFeed = (props: Props) => {
    const { animated = false, count = 5 } = props;

    const cards = [];

    for (let i = 0; i < count; i++) {
        cards.push(<PlaceholderCard key={i} animated={animated} />);
    }

    return <>{cards}</>;
};

export default PlaceholderFeed;
