import React, { useContext, useState } from 'react';

type ScrollLockContextOptions = {
    locked: boolean;
    setLocked: (locked: boolean) => void;
};

const ScrollLockContext = React.createContext<ScrollLockContextOptions>({
    locked: false,
    setLocked: () => {},
});

export const ScrollLockProvider: React.FC = (props) => {
    const [locked, setLocked] = useState<boolean>(false);

    return <ScrollLockContext.Provider value={{ locked, setLocked }}>{props.children}</ScrollLockContext.Provider>;
};

export const useScrollLock = () => useContext(ScrollLockContext);
