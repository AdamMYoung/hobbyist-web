import React from 'react';

import { RoundShape, TextBlock, TextRow } from 'react-placeholder/lib/placeholders';
import Card from '../../components/card';

const placeholderColor = '#e0e0e0';

type Props = {
    animated?: boolean;
};

const PlaceholderPost = (props: Props) => {
    return (
        <Card className="mb-32" noCursor>
            <article className={`my-8 px-12 ${props.animated && 'animate-pulse'}`}>
                <TextRow color={placeholderColor} className="ml-2 w-full" />

                <div className="flex items-center mt-4">
                    <div className="flex items-center">
                        <RoundShape color={placeholderColor} style={{ width: '3rem', height: '3rem' }} />
                        <div className="mb-3">
                            <TextRow color={placeholderColor} style={{ width: '6rem' }} className="ml-2 " />
                            <TextRow color={placeholderColor} style={{ width: '4rem' }} className="ml-2" />
                        </div>
                    </div>
                    <div className="flex-grow" />
                    <div className="flex items-center">
                        <RoundShape color={placeholderColor} style={{ width: '3rem', height: '3rem' }} />
                        <TextRow color={placeholderColor} style={{ width: '6rem' }} className="ml-2 " />
                    </div>
                </div>

                <hr className="my-4" />
                <TextBlock color={placeholderColor} rows={20} className="mt-4" />
            </article>
        </Card>
    );
};

export default PlaceholderPost;
