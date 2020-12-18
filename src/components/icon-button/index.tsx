import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

type Props = ButtonProps & {
    icon: IconProp;
    className?: string;
    color?: string;
    bgColor?: string;
    active?: boolean;
    size?: FontAwesomeIconProps['size'];
    activeIcon?: IconProp;
    text?: string;
};

const IconButton = (props: Props) => {
    const { onClick, className, color, bgColor, icon, active, size, activeIcon, text, ...rest } = props;

    const iconColor = bgColor ? bgColor : color ?? 'gray';

    let buttonIcon = icon;
    if (active && activeIcon) buttonIcon = activeIcon;

    return (
        <button
            className={`${className} rounded-full p-2 flex items-center focus:outline-none hover:bg-${iconColor}-300 active:ring`}
            {...rest}
        >
            <FontAwesomeIcon icon={buttonIcon} color={color ?? 'black'} size={size} />
            {!!text && <p className={`ml-1 font-semibold`}>{text}</p>}
        </button>
    );
};

export default IconButton;
