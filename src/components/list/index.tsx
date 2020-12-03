import { ListGroup, ListItem } from './styles';

type Props = {
    active?: boolean;
    children: React.ReactNode;
};

const List = (props: Props) => {
    return <ListGroup active={props.active}>{props.children}</ListGroup>;
};

List.Item = ListItem;

export default List;
