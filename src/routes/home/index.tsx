import { useAuth0 } from '@auth0/auth0-react';
import { faChartLine, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useHistory } from 'react-router-dom';
import List from '../../components/list';
import Map from '../../components/map';
import UserProfile from '../../components/user-profile';

import Feed from '../../views/feed';
import ProfileControls from '../../views/layout/profile-controls';
import SplitPage, { RenderProps } from '../../views/split-page';
import Trending from '../../views/trending';

// const WizardCard = () => {
//     return (
//         <>
//             <div className="text-center">
//                 <h1 className="text-4xl font-bold">Find yourself a new hobby.</h1>
//                 <p className="text-gray-400 mt-2">
//                     Use our wizard below and we'll pick out some hobbies we think you'll love!
//                 </p>
//             </div>
//             <div className="mt-6">
//                 <Wizard />
//             </div>
//         </>
//     );
// };

const Home = () => {
    const title = 'Feed.';

    return (
        <SplitPage title={title} leftIcon={faChartLine} rightIcon={faMapMarkerAlt}>
            {({ rightDrawer, closeRightDrawer }: RenderProps) => (
                <>
                    <SplitPage.Center>
                        <SplitPage.Center.Header title={title} />
                        <Feed />
                    </SplitPage.Center>
                </>
            )}
        </SplitPage>
    );
};

export default Home;
