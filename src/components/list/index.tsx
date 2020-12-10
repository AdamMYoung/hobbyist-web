import { ListGroup, ListItem } from './styles';

type Props = {
    active?: boolean;
    noTopPadding?: boolean;
    narrow?: boolean;
    children: React.ReactNode;
};

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
    onClick?: () => void;
};

const Item: React.FC<ButtonProps> = (props) => {
    const { children, onClick, ...rest } = props;

    return (
        <ListItem onClick={onClick}>
            <button {...rest}>{props.children}</button>
        </ListItem>
    );
};

const List = (props: Props) => {
    const { children, ...rest } = props;
    return <ListGroup {...rest}>{children}</ListGroup>;
};

List.Item = Item;

export default List;
