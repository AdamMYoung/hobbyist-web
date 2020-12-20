import React, { useState } from 'react';

import { FadeImage } from './styles';

type Props = React.ComponentPropsWithoutRef<'img'>;

const Image = (props: Props) => {
    const { onLoad, ...rest } = props;
    const [loaded, setLoaded] = useState<boolean>(false);

    return <FadeImage {...rest} isVisible={loaded} onLoad={() => setLoaded(true)} />;
};

export default Image;
