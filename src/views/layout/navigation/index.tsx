import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoadingBar from 'react-top-loading-bar';
import { useIsFetching } from 'react-query';

import Button from '../../../components/button';
import Input from '../../../components/input';
import { Logo, NavBar } from './styles';
import NavigationProfile from '../../navigation-profile';
import LoadTransition from '../../../components/load-transition';
import { useUserHobbies } from '../../../hooks/queries';
import { getMetadata } from '../../../utils/userUtils';

const Navigation = () => {
    const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
    const [isLoadingBarActive, setLoadingBarActive] = useState<boolean>(false);
    const history = useHistory();
    const { data: hobbies } = useUserHobbies(getMetadata(user, 'username'));

    const loadingBar = useRef(null);
    const isFetching = useIsFetching();

    useEffect(() => {
        if (isFetching > 0) {
            if (!isLoadingBarActive) {
                setLoadingBarActive(true);
                (loadingBar.current as any)?.continuousStart();
            }
        } else {
            (loadingBar.current as any)?.complete();
            setLoadingBarActive(false);
        }
    }, [isFetching, isLoadingBarActive]);

    return (
        <div className="flex items-center w-full sticky top-0 bg-white z-20 border-b-2 border-gray-200 h-16">
            <div className="lg:container w-full">
                <NavBar aria-label="Primary navigation">
                    <div
                        className="cursor-pointer"
                        onClick={() => (window.scrollY > 50 ? window.scrollTo({ top: 0 }) : history.push('/'))}
                    >
                        <Logo className="block sm:hidden">h.</Logo>
                        <Logo className="hidden sm:block">hobbyist.</Logo>
                    </div>

                    <Input
                        aria-label="Search site"
                        type="text"
                        size={1}
                        className="mx-4 md:max-w-sm flex-grow"
                        placeholder="Search"
                    />

                    <div className="flex items-center ml-auto">
                        {isAuthenticated && (
                            <>
                                {hobbies && hobbies.length > 0 && (
                                    <LoadTransition className="mx-4 hidden sm:block w-full">
                                        <Button variant="primary" onClick={() => history.push('/new-post')}>
                                            Create Post
                                        </Button>
                                    </LoadTransition>
                                )}

                                <NavigationProfile />
                            </>
                        )}
                        {!isAuthenticated && !isLoading && (
                            <Button variant="primary" onClick={() => loginWithRedirect()}>
                                Sign In
                            </Button>
                        )}
                    </div>
                </NavBar>
            </div>
            <LoadingBar color="#9842f5" height={3} ref={loadingBar} />
        </div>
    );
};

export default Navigation;
