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
                    fullscreenControl: false,
                    rotateControl: false,
                    zoomControl: false,
                    scaleControl: false,
                })}
                defaultZoom={15}
                defaultCenter={{ lat: 52.4862, lng: -1.8904 }}
            >
                {children}
            </GoogleMapReact>
        </div>
    );
};

export default Map;
