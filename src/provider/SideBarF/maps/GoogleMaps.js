import React, { useState, useRef, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import useSuperCluster from 'use-supercluster';
import './google-maps.css'
import Results from './Results';
import LocationMarker from './LocationMarker';
import Search from './Search';

function GoogleMaps({ DeviceData, searchFiltr, SearchFiltr }) {
    const mapRef = useRef();
    const [zoom, setZoom] = useState(10);
    const center = { lat: 33.886917, lng: 9.537499 };
    const [bounds, setBounds] = useState(null);
    //Setup Geo-features
    const Devices = DeviceData.map(device => ({
        "properties": {
            "deviceKey": device.RealId,
            "deviceId": device.data.idDevise,
            "deviceStatus": device.data.status,
            "deviceType": device.data.Type,
            "DeviceDateRegtr ": device.data.DateRegistration,
            "DeviseService": device.data.service
        },
        "geometry": {
            "coordinates": [device.data.lng, device.data.lat]
        }

    }));

    console.log(Devices);
    return (
        <>
            <Search
                searchFiltr={searchFiltr}
                SearchFiltr={SearchFiltr}
            />
            <div className='maps-result'>
                <Results
                />
                <div className="map-container">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
                        center={center}
                        zoom={zoom}>
                        {Devices.map(point => (
                            <LocationMarker
                                lat={point.geometry.coordinates[1]}
                                lng={point.geometry.coordinates[0]}
                                service={point.properties.DeviseService}
                                type={point.properties.deviceType}
                                realId={point.properties.deviceKey}
                                id={point.properties.deviceId}
                                statu={point.properties.deviceStatus}
                                date={point.properties.DateRegistration}
                            />
                        ))

                        }
                    </GoogleMapReact>
                </div>
            </div>
        </>
    );
}

/*GoogleMaps.defaultProps = {
    center: {
        lat: 29.305561,
        lng: -3.981108
    }
}*/
export default GoogleMaps; 