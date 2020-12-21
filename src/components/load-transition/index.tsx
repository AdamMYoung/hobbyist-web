import { useEffect, useState } from 'react';
import { VisibilityTransition } from './styles';

type Props = React.ComponentPropsWithRef<'div'>;

const LoadTransition: React.FC<Props> = (props) => {
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <VisibilityTransition {...props} isVisible={isVisible}>
            {props.children}
        </VisibilityTransition>
    );
};

export default LoadTransition;
