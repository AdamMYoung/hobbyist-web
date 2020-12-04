import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type FAProps = React.ComponentPropsWithoutRef<typeof FontAwesomeIcon>;

type Props = FAProps & {
    onClick: () => void;
    active?: boolean;
    activeIcon?: any;
};

const IconButton: React.FC<Props> = (props) => {
    const { onClick, className, children, color, icon, active, activeIcon, size, ...rest } = props;

    const iconColor = color ?? 'gray';

    return (
        <button
            className={`${className} rounded-full p-2 flex items-center focus:outline-none hover:bg-${iconColor}-100 active:ring`}
            onClick={onClick}
        >
            <FontAwesomeIcon size="lg" icon={!active ? icon : activeIcon ?? icon} color={color ?? 'black'} {...rest} />
            <p className={`ml-1 text-lg font-semibold`}>{children}</p>
        </button>
    );
};

export default IconButton;
