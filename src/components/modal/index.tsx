import { useEffect } from 'react';

import { useScrollLock } from '../../providers/ScrollLockProvider';
import LoadTransition from '../load-transition';

type Props = {
    title?: string;
};

const Modal: React.FC<Props> = (props) => {
    const { title, children } = props;

    const { setLocked } = useScrollLock();

    useEffect(() => {
        setLocked(true);

        return () => setLocked(false);
    }, [setLocked]);

    return (
        <LoadTransition className="fixed flex flex-col justify-center z-50 top-0 left-0 p-2 sm:p-4 h-full w-full">
            <div className="fixed z-40 top-0 left-0 w-full h-full bg-gray-400 opacity-70 pointer-events-none" />
            <div className="z-50 rounded-lg border bg-white p-4 opacity-100 max-w-5xl mx-auto">
                <section>
                    {title && <p className="text-2xl font-bold mb-2">{title}</p>}
                    {children}
                </section>
            </div>
        </LoadTransition>
    );
};

export default Modal;
