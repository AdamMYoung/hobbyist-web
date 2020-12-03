import GoogleMapReact from 'google-map-react';
import HobbyCard from '../../components/hobby-card';
import Wizard from '../../views/wizard';

const Home = () => {
    return (
        <div className="flex flex-wrap">
            <div className="order-1 lg:order-none mt-8 mb-4 lg:mt-0 w-full sm:w-1/2 lg:w-1/4 px-2">
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
            </div>

            <div className="w-full lg:w-2/4 px-2">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Find yourself a new hobby.</h1>
                    <p className="text-gray-400 mt-2">
                        Use our wizard below and we'll pick out some hobbies we think you'll love!
                    </p>
                </div>
                <div className="mt-8">
                    <Wizard />
                </div>
            </div>

            <div className="order-1 lg:order-none mt-8 mb-4 lg:mt-0 w-full sm:w-1/2 lg:w-1/4 px-2">
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
            </div>
        </div>
    );
};

export default Home;
