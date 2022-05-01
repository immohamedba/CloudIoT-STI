import React from 'react'
import { createContext, useState } from 'react';

export const DeviceContext = createContext();

const DeviceContextProvider = (props)=>{

    const [device, setDevise] = useState({
        id: "",
        type: " ",
        localisation: "",
        Service: "",
        date: "",
        statu: ""
    });

    const addNewDevise = (id, type, localisation, service, date, statu) => {
        setDevise({...device,id, type, localisation, service, date, statu})
    }
    return (
        <DeviceContext.Provider value ={{device, addNewDevise}}>
            {props.children}
        </DeviceContext.Provider>  
         )

} 
export default DeviceContextProvider;