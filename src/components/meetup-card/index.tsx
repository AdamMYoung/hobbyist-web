import dayjs from 'dayjs';
import { useHistory } from 'react-router-dom';

import { Meetup } from '../../types';
import Card from '../card';
import Button from '../button';

type Props = Meetup;

const currentDate = new Date();

const HobbyCard = (props: Props) => {
    const { id, name, date, address, hobbyId, description } = props;
    const history = useHistory();

    return (
        <Card>
            <div className="p-2">
                <p className="text-xl font-semibold">{name}</p>
                <button
                    onClick={() => history.push(`/h/${hobbyId}`)}
                    className="text-sm text-gray-500 hover:underline"
                >{`/h/${hobbyId}`}</button>
                <p className="text-md mt-2 text-gray-500">
                    {dayjs(date).format(
                        date.getFullYear() !== currentDate.getFullYear()
                            ? 'dddd DD MMMM YYYY @ hh:mm'
                            : 'dddd DD MMMM @ hh:mm'
                    )}
                </p>
                <p className="text-md text-gray-500">{address}</p>

                <div className="flex-grow my-4">
                    <p className="text-md text-gray-500">{description}</p>
                </div>
                <div>
                    <Button onClick={() => history.push(`/h/${hobbyId}/m/${id}`)} variant="primary">
                        View
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default HobbyCard;
