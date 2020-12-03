import { faChartLine, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GoogleMapReact from 'google-map-react';
import React, { useState } from 'react';

import Button from '../../components/button';
import Drawer from '../../components/drawer';
import HobbyCard from '../../components/hobby-card';
import Wizard from '../../views/wizard';

const RecentActivity = () => {
    return (
        <div className="text-center">
            <h2 className="text-xl font-bold">Recently Active.</h2>
            <p className="text-gray-400 mt-2">Below are some recently active communities.</p>
            <div className="mt-4">
                <div className="my-2">
                    <HobbyCard
                        src="https://via.placeholder.com/400"
                        title="Title 1"
                        description="Description 1"
                        memberCount={1500}
                    />
                </div>
                <div className="my-2">
                    <HobbyCard
                        src="https://via.placeholder.com/400"
                        title="Title 1"
                        description="Description 1"
                        memberCount={1500}
                    />
                </div>
                <div className="my-2">
                    <HobbyCard
                        src="https://via.placeholder.com/400"
                        title="Title 1"
                        description="Description 1"
                        memberCount={1500}
                    />
                </div>
            </div>
        </div>
    );
};

const Feed = () => {
    return (
        <>
            <div className="text-center">
                <h1 className="text-4xl font-bold">Find yourself a new hobby.</h1>
                <p className="text-gray-400 mt-2">
                    Use our wizard below and we'll pick out some hobbies we think you'll love!
                </p>
            </div>
            <div className="mt-6">
                <Wizard />
            </div>
        </>
    );
};

const Local = () => {
    return (
        <div className="text-center">
            <h2 className="text-xl font-bold">Local Meetups.</h2>
            <p className="text-gray-400 mt-2">Find out what communities around you are up to.</p>
            <div className="rounded h-48 w-full mt-4">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY ?? '' }}
                    options={(map) => ({ panControl: false, mapTypeControl: false, scrollwheel: false })}
                    defaultZoom={11}
                    defaultCenter={{ lat: 59, lng: 30 }}
                ></GoogleMapReact>
            </div>
        </div>
    );
};

const Home = () => {
    const [recentDrawerOpen, setRecentDrawerOpen] = useState(false);
    const [localDrawerOpen, setLocalDrawerOpen] = useState(false);

    return (
        <>
            <div className="flex border-b-2 py-1 px-2 border-gray-200 lg:hidden">
                <Button className="sm:hidden" onClick={() => setRecentDrawerOpen(true)}>
                    <FontAwesomeIcon size="lg" icon={faChartLine} />
                </Button>
                <div className="flex-grow" />
                <Button className="lg:hidden" onClick={() => setLocalDrawerOpen(true)}>
                    <FontAwesomeIcon size="lg" icon={faMapMarkerAlt} />
                </Button>
            </div>
            <div className="flex pt-2">
                <div className="lg:mt-0 px-2 hidden sm:block md:w-1/3 lg:w-1/6 px-2">
                    <RecentActivity />
                </div>

                <div className="w-full px-2 md:w-2/3 lg:w-4/6 px-2">
                    <Feed />
                </div>

                <div className="lg:mt-0 px-2 hidden lg:block lg:w-1/6 px-2">
                    <Local />
                </div>
            </div>
            <Drawer side="left" open={recentDrawerOpen} onClose={() => setRecentDrawerOpen(false)}>
                <RecentActivity />
            </Drawer>

            <Drawer open={localDrawerOpen} onClose={() => setLocalDrawerOpen(false)}>
                <Local />
            </Drawer>
        </>
    );
};

export default Home;
