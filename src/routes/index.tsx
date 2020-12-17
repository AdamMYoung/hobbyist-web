import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthenticatedRoute } from './custom';
import Home from './home';
import NewHobby from './new-hobby';

const Meetups = React.lazy(() => import('./meetups'));
const Hobbies = React.lazy(() => import('./hobbies'));
const ViewPost = React.lazy(() => import('./view-post'));
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
            <Route path="/new-hobby" exact component={NewHobby} />
            <Route path="/hobby/:hobbyId" exact component={Hobby} />
            <Route path="/hobby/:hobbyId/post/:postId" exact component={ViewPost} />

            <Route path="/meetups" exact component={Meetups} />
            <Route path="/hobby/:hobbyId/meetups" exact component={Meetups} />
            <Route path="/hobby/:hobbyId/meetups/:meetupId" exact component={Meetup} />

            <AuthenticatedRoute path="/profile" exact component={UserProfile} />
            <Route path="/profile/:username" exact component={Profile} />

            <Route path="/about" exact component={About} />

            <Redirect to="/" />
        </Switch>
    );
};

export default Routes;
