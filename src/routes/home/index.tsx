import GoogleMapReact from 'google-map-react';
import HobbyCard from '../../components/hobby-card';
import Wizard from '../../views/wizard';

const Home = () => {
    return (
        <div className="flex">
            <div className="w-1/4 px-2">
                <div className="text-center">
                    <h2 className="text-xl font-bold">Recently Active</h2>
                    <p className="text-gray-400 mt-2">Below are some recently active communities</p>
                    <div className="mt-2">
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
            </div>

            <div className="w-2/4 px-2">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Find yourself a new hobby.</h1>
                    <p className="text-gray-400 mt-2">
                        Use our wizard below and we'll pick out some communities we think you'll love!
                    </p>
                </div>

                <Wizard />
            </div>

            <div className="w-1/4 px-2">
                <div className="text-center">
                    <h2 className="text-xl font-bold">Local Meetups</h2>
                    <p className="text-gray-400 mt-2">Find out what other communities around you are up to</p>
                    <div className="rounded h-48 w-full mt-2">
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY ?? '' }}
                            options={(map) => ({ panControl: false, mapTypeControl: false, scrollwheel: false })}
                            defaultZoom={11}
                            defaultCenter={{ lat: 59, lng: 30 }}
                        ></GoogleMapReact>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
