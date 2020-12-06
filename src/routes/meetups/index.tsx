import React from 'react';
import dayjs from 'dayjs';

import Button from '../../components/button';
import List from '../../components/list';
import Map from '../../components/map';
import { Meetup } from '../../types';
import SplitPage from '../../views/split-page';
import Card from '../../components/card';
import Input from '../../components/input';

const MeetupEvents: Meetup[] = [
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
    {
        id: 'one',
        name: 'Name',
        date: new Date(),
        address: '123 Addres Rd',
        description: 'This is a meetup',
        lat: 1.23,
        lng: 1.23,
    },
];

const currentDate = new Date();

const Meetups = () => {
    const title = 'Meetups.';

    return (
        <>
            <div className="fixed left-0 w-full h-full top-20">
                <Map style={{ height: 'calc(100vh - 5rem)' }} />
            </div>
            <div className="relative h-full pointer-events-none">
                <SplitPage disableProfileControls title={title}>
                    <SplitPage.Center>
                        <div className="w-full sm:w-1/3 ml-auto p-2 sm:p-0">
                            <div style={{ height: 'calc(100vh - 15rem)' }} className="sm:hidden" />
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
                            <Card className="mt-4 pointer-events-auto">
                                <List>
                                    {MeetupEvents.map((event) => (
                                        <List.Item>
                                            <div className="block ">
                                                <div>
                                                    <p className="text-xl font-semibold">{event.name}</p>
                                                    <p className="text-md text-gray-500">
                                                        {dayjs(event.date).format(
                                                            event.date.getFullYear() !== currentDate.getFullYear()
                                                                ? 'dddd DD MMMM YYYY @ hh:mm'
                                                                : 'dddd DD MMMM @ hh:mm'
                                                        )}
                                                    </p>
                                                    <p className="text-md text-gray-500">{event.address}</p>
                                                </div>
                                                <div className="flex-grow my-4">
                                                    <p className="text-md text-gray-500">{event.description}</p>
                                                </div>
                                                <div>
                                                    <Button variant="primary">View</Button>
                                                </div>
                                            </div>
                                        </List.Item>
                                    ))}
                                </List>
                            </Card>
                        </div>
                    </SplitPage.Center>
                </SplitPage>
            </div>
        </>
    );
};

export default Meetups;
