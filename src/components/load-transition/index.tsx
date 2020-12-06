import { useEffect, useState } from 'react';
import { VisibilityTransition } from './styles';

const LoadTransition: React.FC = (props) => {
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return <VisibilityTransition isVisible={isVisible}>{props.children}</VisibilityTransition>;
};

export default LoadTransition;
