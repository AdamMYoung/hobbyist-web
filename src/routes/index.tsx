import { Route, Switch } from 'react-router-dom';
import { AuthenticatedRoute } from './custom';
import Hobbies from './hobbies';
import Hobby from './hobby';
import Home from './home';
import Meetup from './meetup';
import Meetups from './meetups';
import NotFound from './not-found';
import Post from './post';
import Profile from './profile';
import UserProfile from './user-profile';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/hobbies" exact component={Hobbies} />
            <Route path="/h/:hobby" exact component={Hobby} />
            <Route path="/h/:hobby/p/:post" exact component={Post} />

            <Route path="/meetups" exact component={Meetups} />
            <Route path="/h/:hobby/m" exact component={Meetups} />
            <Route path="/h/:hobby/m/:meetup" exact component={Meetup} />

            <AuthenticatedRoute path="/profile" exact component={UserProfile} />
            <Route path="/p/:profile" exact component={Profile} />

            <Route path="/" component={NotFound} />
        </Switch>
    );
};

export default Routes;
