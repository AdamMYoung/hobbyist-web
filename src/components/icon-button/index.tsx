import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { act } from 'react-dom/test-utils';

type Props = {
    onClick: () => void;
    icon: IconProp;
    className?: string;
    color?: string;
    active?: boolean;
    size?: FontAwesomeIconProps['size'];
    activeIcon?: IconProp;
    text?: string;
};

const IconButton = (props: Props) => {
    const { onClick, className, color, icon, active, size, activeIcon, text } = props;

    const iconColor = color ?? 'gray';

    let buttonIcon = icon;
    if (active && activeIcon) buttonIcon = activeIcon;

    return (
        <button
            className={`${className} rounded-full p-2 flex items-center focus:outline-none hover:bg-${iconColor}-300 active:ring`}
            onClick={onClick}
        >
            <FontAwesomeIcon icon={buttonIcon} color={color ?? 'black'} size={size} />
            {!!text && <p className={`ml-1 font-semibold`}>{text}</p>}
        </button>
    );
};

export default IconButton;
