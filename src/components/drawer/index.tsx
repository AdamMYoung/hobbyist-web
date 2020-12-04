import { useEffect } from 'react';
import { useScrollLock } from '../../providers/ScrollLockProvider';

type Props = {
    open: boolean;
    side?: 'left' | 'right';
    onClose: () => void;
    children: React.ReactNode;
};

const Drawer = (props: Props) => {
    const { setLocked } = useScrollLock();
    const { open, onClose, children, side = 'right' } = props;

    useEffect(() => {
        setLocked(open);

        return () => {
            setLocked(false);
        };
    }, [open, setLocked]);

    return (
        <div
            className={`z-50 fixed flex top-0 w-screen h-screen transition-opacity 
            ${open ? 'opacity-100' : 'opacity-0 aria-hidden pointer-events-none'}`}
        >
            <div
                onClick={onClose}
                className={`cursor-pointer flex-grow h-full bg-gray-500 transition bg-opacity-60 ${
                    side === 'right' ? 'order-0' : 'order-1'
                }`}
            />
            <div className="w-64 h-full bg-white overflow-hidden overflow-y-auto p-4">{children}</div>
        </div>
    );
};

export default Drawer;
