import { ThemedButton } from './styles';

type Props = {
    variant?: 'primary' | 'secondary';
};

const Button: React.FC<Props> = (props) => {
    const { variant = 'primary', children } = props;

    return <ThemedButton variant={variant}>{children}</ThemedButton>;
};

export default Button;
