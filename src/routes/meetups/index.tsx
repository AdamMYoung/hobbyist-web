import React from 'react';

import Map from '../../components/map';
import { Meetup } from '../../types';
import SplitPage from '../../views/split-page';
import Card from '../../components/card';
import Input from '../../components/input';
import MeetupCard from '../../components/meetup-card';
import useWindowSize from '../../hooks/useWindowHeight';

const MeetupEvents: Meetup[] = [
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        hobbyId: 'Knitting',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        hobbyId: 'Knitting',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        hobbyId: 'Knitting',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        hobbyId: 'Knitting',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        hobbyId: 'Knitting',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        hobbyId: 'Knitting',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        hobbyId: 'Knitting',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        hobbyId: 'Knitting',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        hobbyId: 'Knitting',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        hobbyId: 'Knitting',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        hobbyId: 'Knitting',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        hobbyId: 'Knitting',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        hobbyId: 'Knitting',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        hobbyId: 'Knitting',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        hobbyId: 'Knitting',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        hobbyId: 'Knitting',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        hobbyId: 'Knitting',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        hobbyId: 'Knitting',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        hobbyId: 'Knitting',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
];

const Meetups = () => {
    const title = 'Meetups.';
    const { height } = useWindowSize();

    return (
        <>
            {/* Map */}
            <div className="fixed left-0 w-full h-full top-20">
                <Map style={{ height: `calc(100vh - 5rem)` }} />
            </div>
            {/* Window  */}
            <div className="relative h-full pointer-events-none">
                <SplitPage disableProfileControls>
                    <SplitPage.Center>
                        <div className="w-full sm:w-1/3 ml-auto p-2 sm:p-0">
                            <div style={{ height: `calc(${height}px - 15rem)` }} className="sm:hidden" />
                            <Card className="pointer-events-auto">
                                <div className="p-2 h-28">
                                    <SplitPage.Header title={title} />
                                    <label htmlFor="locationPlaceholder" className="mt-4 text-gray-400 text-sm">
                                        Enter a location:
                                    </label>
                                    <Input
                                        id="locationPlaceholder"
                                        className="w-full mt-1"
                                        placeholder="London"
                                        size={1}
                                    />
                                </div>
                            </Card>
                            <div className="mt-4 pointer-events-auto">
                                {MeetupEvents.map((event) => (
                                    <div className="mt-2">
                                        <MeetupCard {...event} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </SplitPage.Center>
                </SplitPage>
            </div>
        </>
    );
};

export default Meetups;
