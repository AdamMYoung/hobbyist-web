import { faChartLine, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import GoogleMapReact from 'google-map-react';
import React from 'react';

import Feed from '../../views/feed';
import SplitPage, { RenderProps } from '../../views/split-page';
import Trending from '../../views/trending';

// import Wizard from '../../views/wizard';

const TrendingHobbies = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold">Trending.</h2>
            <p className="text-gray-400 mt-2">Here are some communities that have been gaining popularity.</p>
            <div className="mt-4">
                <Trending vertical />
            </div>
        </div>
    );
};

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

const Local = () => {
    return (
        <div className="">
            <h2 className="text-4xl font-bold">Local.</h2>
            <p className="text-gray-400 mt-2">Find out what communities near you are up to.</p>
            <div className="rounded h-48 w-full mt-4">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY ?? '' }}
                    options={() => ({ panControl: false, mapTypeControl: false, scrollwheel: false })}
                    defaultZoom={11}
                    defaultCenter={{ lat: 59, lng: 30 }}
                ></GoogleMapReact>
            </div>
        </div>
    );
};

const Home = () => {
    const title = 'Feed.';
    const description = "Recent posts from hobbies you're interested in.";

    return (
        <SplitPage title={title} leftIcon={faChartLine} rightIcon={faMapMarkerAlt}>
            {({ leftDrawer, rightDrawer, closeLeftDrawer, closeRightDrawer }: RenderProps) => (
                <>
                    <SplitPage.Left isDrawerOpen={leftDrawer} onCloseDrawer={closeLeftDrawer}>
                        <TrendingHobbies />
                    </SplitPage.Left>
                    <SplitPage.Center title={title} description={description}>
                        <Feed />
                    </SplitPage.Center>
                    <SplitPage.Right isDrawerOpen={rightDrawer} onCloseDrawer={closeRightDrawer}>
                        <Local />
                    </SplitPage.Right>
                </>
            )}
        </SplitPage>
    );
};

export default Home;
