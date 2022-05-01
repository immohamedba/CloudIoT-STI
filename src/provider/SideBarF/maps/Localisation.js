import React, { useState, useEffect } from 'react'
import Loader from '../../../Loader';
import './localisation.css'
import GoogleMaps from './GoogleMaps';
import Search from './Search'
import Results from './Results'
import { db } from '../../../firebase';
import { addDoc, onSnapshot, collection, doc, deleteDoc, getDocs, updateDoc } from "firebase/firestore";
import { async } from '@firebase/util';
import { useMainContext } from '../../../context/Context';


const Localisation = () => {
  const DevisesCollectioner = collection(db, "devises");
  const [loading, setLoading] = useState(false);
  const [Devices, setDevices] = useState([]);
  const { setDevicesData, setReRenderMarkers } = useMainContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFiltr, setSearchFiltr] = useState([]);
  const [serachResult, setSearchResult] = useState([]);
  //Event to render
  const [renderDevice, setRenderDevice] = useState([]);

  const FiltrHandler = (termFilter) => {
    setSearchFiltr(termFilter);
    if (termFilter.value !== "tout") {
      const newDeviceList = Devices.filter((devise) => {
        return Object.values(devise.data)
          .join(" ")
          .toLowerCase()
          .includes(termFilter.value.toLowerCase());
      });
      setSearchResult(newDeviceList);
    } else {
      setSearchResult(Devices);
    }
  }

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onSnapshot(DevisesCollectioner, snapchot => {
      setDevices(snapchot.docs.map(doc => ({ RealId: doc.id, data: doc.data() })));
      setDevicesData(Devices);
      setRenderDevice(Devices);
      setLoading(false);
    })
    return () => {
      unsubscribe();
    }

  }, [])

  return (
    <div className='l-container' >
        {!loading ? <GoogleMaps DeviceData={searchFiltr.value === "tout" ? Devices : serachResult}
                                searchFiltr={searchFiltr}
                                SearchFiltr={FiltrHandler}
                                /> : 
                    <Loader/>}
    </div>
  );

}
export default Localisation;