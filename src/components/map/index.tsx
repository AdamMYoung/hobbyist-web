import GoogleMapReact from 'google-map-react';
import { CSSProperties } from 'react';

type Props = {
    style?: CSSProperties;
    className?: string;
};

const Map: React.FC<Props> = (props) => {
    const { style, className, children } = props;

    return (
        <div style={style} className={`${className} w-full ${!style && 'h-64'}`}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY ?? '' }}
                options={() => ({
                    panControl: false,
                    mapTypeControl: false,
                    scrollwheel: false,
                })}
                defaultZoom={11}
                defaultCenter={{ lat: 0, lng: 0 }}
            >
                {children}
            </GoogleMapReact>
        </div>
    );
};

export default Map;
