import { useAuth0 } from '@auth0/auth0-react';
import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Popup from 'reactjs-popup';

import Card from '../../components/card';
import List from '../../components/list';
import { ListItem } from '../../components/list/styles';

import LoadTransition from '../../components/load-transition';
import ProfileIcon from '../../components/profile-icon';
import { getMetadata } from '../../utils/userUtils';

const NavigationProfile = () => {
    const { user, isAuthenticated, logout } = useAuth0();
    const history = useHistory();
    const ref = useRef<any>();

    if (!isAuthenticated) return null;

    const handleNavigate = (path: string) => {
        history.push(path);
        ref.current.close();
    };

    return (
        <Popup
            ref={ref}
            trigger={
                <button type="button">
                    <LoadTransition className="cursor-pointer">
                        <ProfileIcon src={user.picture} alt={user.name} />
                    </LoadTransition>
                </button>
            }
            position="bottom right"
            on={['click', 'hover']}
            closeOnDocumentClick
        >
            <LoadTransition className="w-full">
                <Card className="w-full sm:w-auto">
                    <List active noTopPadding>
                        <ListItem onClick={() => handleNavigate('/profile')}>
                            <div>
                                <p className="text-sm font-bold">{user.name}</p>
                                <p className="text-xs">{getMetadata(user, 'username')}</p>
                            </div>
                        </ListItem>
                        <hr className="my-1" />
                        <ListItem>
                            <p className="text-sm font-semibold" onClick={() => handleNavigate('/new-post')}>
                                Create Post
                            </p>
                        </ListItem>
                        <ListItem>
                            <p className="text-sm font-semibold" onClick={() => handleNavigate('/new-hobby')}>
                                Create Hobby
                            </p>
                        </ListItem>
                        <hr className="my-1" />
                        <ListItem onClick={() => logout()}>
                            <p className="text-sm font-semibold">Sign Out</p>
                        </ListItem>
                    </List>
                </Card>
            </LoadTransition>
        </Popup>
    );
};

export default NavigationProfile;
