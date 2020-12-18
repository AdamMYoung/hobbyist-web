import React from 'react';
import ReactPlaceholder from 'react-placeholder/lib';

import { RoundShape, TextBlock, TextRow } from 'react-placeholder/lib/placeholders';
import Card from '../card';

const placeholderColor = '#e0e0e0';

type Props = {
    animated?: boolean;
};

const CustomPlaceholder = (
    <Card className="my-4" noCursor>
        <article className="mb-4">
            <div className="flex items-center">
                <RoundShape color={placeholderColor} style={{ width: '3rem', height: '3rem' }} />
                <div className="mb-3">
                    <TextRow color={placeholderColor} style={{ width: '6rem' }} className="ml-2 " />
                    <TextRow color={placeholderColor} style={{ width: '4rem' }} className="ml-2" />
                </div>
            </div>

            <TextBlock color={placeholderColor} rows={3} className="pl-14 mt-4" />
        </article>
    </Card>
);

const PlaceholderCard = (props: Props) => {
    return (
        <ReactPlaceholder ready={false} showLoadingAnimation={props.animated} customPlaceholder={CustomPlaceholder}>
            <></>
        </ReactPlaceholder>
    );
};

export default PlaceholderCard;
