import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { AuthenticatedRoute } from './custom';
import Home from './home';

const NewHobby = React.lazy(() => import('./new-hobby'));
const NewPost = React.lazy(() => import('./new-post'));
const Hobbies = React.lazy(() => import('./hobbies'));
const ViewPost = React.lazy(() => import('./view-post'));
const Profile = React.lazy(() => import('./profile'));
const About = React.lazy(() => import('./about'));
const UserProfile = React.lazy(() => import('./user-profile'));
const Hobby = React.lazy(() => import('./hobby'));

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/hobbies" exact component={Hobbies} />
            <AuthenticatedRoute path="/new-hobby" exact component={NewHobby} />
            <AuthenticatedRoute path="/new-post" exact component={NewPost} />
            <Route path="/hobby/:hobbyId" exact component={Hobby} />
            <Route path="/hobby/:hobbyId/post/:postId" exact component={ViewPost} />

            <AuthenticatedRoute path="/profile" exact component={UserProfile} />
            <Route path="/profile/:username" exact component={Profile} />

            <Route path="/about" exact component={About} />

            <Redirect to="/" />
        </Switch>
    );
};

export default Routes;
