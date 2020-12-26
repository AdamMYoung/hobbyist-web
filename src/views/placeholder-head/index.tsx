import React from 'react';
import { RectShape, RoundShape, TextRow } from 'react-placeholder/lib/placeholders';

const placeholderColor = '#e0e0e0';

type Props = {
    animated?: boolean;
};

const PlaceholderHead = (props: Props) => {
    return (
        <div className={`${props.animated && 'animate-pulse'}`}>
            <div className={`relative h-36 w-full`}>
                <div className="absolute t-0 h-36 w-full">
                    <RectShape className="relative h-36 w-full" color={placeholderColor} />
                </div>
                <hr className="absolute top-36 w-full border-gray-300" />
                <div className="absolute top-36 left-1/2 sm:left-1/4 transform -translate-y-1/2 -translate-x-1/2">
                    <RoundShape className="w-24 h-24" color={placeholderColor} />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap items-center text-center sm:text-left sm:w-2/3 sm:ml-auto w-auto mt-20 sm:mt-2 truncate">
                <div className="sm:ml-8 xl:ml-8 sm:mx-none truncate">
                    <TextRow color={placeholderColor} className="ml-2 w-full" />
                </div>
            </div>
        </div>
    );
};

export default PlaceholderHead;
