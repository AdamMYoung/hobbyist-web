import { faChartLine, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Map from '../../components/map';

import Feed from '../../views/feed';
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
    const description = "Recent posts from hobbies you're interested in.";

    return (
        <SplitPage title={title} leftIcon={faChartLine} rightIcon={faMapMarkerAlt}>
            {({ leftDrawer, rightDrawer, closeLeftDrawer, closeRightDrawer }: RenderProps) => (
                <>
                    <SplitPage.Left isDrawerOpen={leftDrawer} onCloseDrawer={closeLeftDrawer}>
                        <SplitPage.Header
                            title="Trending."
                            description="Here are some communities that are gaining popularity."
                        />
                        <Trending vertical />
                    </SplitPage.Left>
                    <SplitPage.Center>
                        <SplitPage.Center.Header title={title} description={description} />
                        <Feed />
                    </SplitPage.Center>
                    <SplitPage.Right isDrawerOpen={rightDrawer} onCloseDrawer={closeRightDrawer}>
                        <SplitPage.Header title="Local." description="Find out what communities near you are up to." />
                        <Map />
                    </SplitPage.Right>
                </>
            )}
        </SplitPage>
    );
};

export default Home;
