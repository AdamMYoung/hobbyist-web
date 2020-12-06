import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthenticatedRoute } from './custom';
import Hobbies from './hobbies';
import Hobby from './hobby';
import Home from './home';
import Meetup from './meetup';
import Meetups from './meetups';

import ViewPost from './view-post';
import Profile from './profile';
import UserProfile from './user-profile';
import About from './about';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/hobbies" exact component={Hobbies} />
            <Route path="/h/:hobby" exact component={Hobby} />
            <Route path="/h/:hobby/p/:post" exact component={ViewPost} />

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
