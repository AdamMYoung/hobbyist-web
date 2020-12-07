import { ListGroup, ListItem } from './styles';

type Props = {
    active?: boolean;
    noTopPadding?: boolean;
    children: React.ReactNode;
};

const List = (props: Props) => {
    const { children, ...rest } = props;
    return <ListGroup {...rest}>{children}</ListGroup>;
};

List.Item = ListItem;

export default List;
