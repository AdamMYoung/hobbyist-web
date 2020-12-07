import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthenticatedRoute } from './custom';
import Home from './home';

const Meetups = React.lazy(() => import('./meetups'));
const Hobbies = React.lazy(() => import('./hobbies'));
const ViewPost = React.lazy(() => import('./view-post'));
const CreatePost = React.lazy(() => import('./create-post'));
const Profile = React.lazy(() => import('./profile'));
const About = React.lazy(() => import('./about'));
const UserProfile = React.lazy(() => import('./user-profile'));
const Meetup = React.lazy(() => import('./meetup'));
const Hobby = React.lazy(() => import('./hobby'));

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/hobbies" exact component={Hobbies} />
            <Route path="/h/:hobby" exact component={Hobby} />
            <Route path="/h/:hobby/p/:post" exact component={ViewPost} />
            <Route path="/create/:hobby?" component={CreatePost} />

            <Route path="/meetups" exact component={Meetups} />
            <Route path="/h/:hobby/m" exact component={Meetups} />
            <Route path="/h/:hobby/m/:meetup" exact component={Meetup} />

            <AuthenticatedRoute path="/profile" exact component={UserProfile} />
            <Route path="/p/:profile" exact component={Profile} />

            <Route path="/about" exact component={About} />

            <Redirect to="/" />
        </Switch>
    );
};

export default Routes;
