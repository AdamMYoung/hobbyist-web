import { useEffect, useState } from 'react';
import { VisibilityTransition } from './styles';

const LoadTransition: React.FC<{ className?: string }> = (props) => {
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <VisibilityTransition className={props.className} isVisible={isVisible}>
            {props.children}
        </VisibilityTransition>
    );
};

export default LoadTransition;
