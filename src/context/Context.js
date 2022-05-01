import React, {useContext, useState} from 'react';

const mainContext = React.createContext();

export function useMainContext() {
    return useContext(mainContext);
}

export function ContextProvider({children}) {
    //All of the data from NASA EONET
    const [Devices, setDevicesData] = useState([]);
    //Used to store the event that the user wants to go to
    const [selectedDevice, setSelectedDevice] = useState(null);
    //Need to re-render markers because user has changed filer option
    const [reRenderMarkers, setReRenderMarkers] = useState(null);


    const value = {
        Devices,
        setDevicesData,
        selectedDevice,
        setSelectedDevice,
        reRenderMarkers,
        setReRenderMarkers
    }

    return(
        <mainContext.Provider value={value}>
        {children}
        </mainContext.Provider>
    )
}