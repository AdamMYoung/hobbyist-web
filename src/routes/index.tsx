import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthenticatedRoute } from './custom';
import Home from './home';
import NotFound from './not-found';

const NewHobby = React.lazy(() => import('./new-hobby'));
const NewPost = React.lazy(() => import('./new-post'));
const Hobbies = React.lazy(() => import('./hobbies'));
const Post = React.lazy(() => import('./post'));
const EditPost = React.lazy(() => import('./edit-post'));
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
            <AuthenticatedRoute path="/new-post/:slug?" exact component={NewPost} />
            <Route path="/hobby/:slug" exact component={Hobby} />
            <Route path="/hobby/:slug/:token/edit" exact component={EditPost} />
            <Route path="/hobby/:slug/:token" exact component={Post} />

            <AuthenticatedRoute path="/profile" exact component={UserProfile} />
            <Route path="/profile/:username" exact component={Profile} />

            <Route path="/about" exact component={About} />

            <Route path="/not-found" exact component={NotFound} />
            <Route path="/" component={NotFound} />
        </Switch>
    );
};

export default Routes;
