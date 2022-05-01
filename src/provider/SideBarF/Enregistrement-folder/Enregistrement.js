import React from 'react'
import Navbar from '../Navbar';
import TopBar from '../../TopBar';
import '../../../components/home.css'
import './enregistrement.css'
import { useState, useEffect } from "react";
import { db } from '../../../firebase';
import { addDoc, collection, deleteDoc, doc, onSnapshot} from "firebase/firestore";
import { async } from '@firebase/util';
import NoDeviseEnregistrement from './NoDeviseEnregistrement';
import DisplayDeviceBox from './DisplayDeviceBox';
import Footer from './Footer';

function Enregistrement() {

  const [standbyDevices, setStandbyDevices] = useState([]);
  const DevisesCollectioner = collection(db, "devises");

  useEffect(() => {
    const unsubscribe = onSnapshot(DevisesCollectioner, snapchot => {
      setStandbyDevices([]);
      snapchot.docs.map((doc) => {
        const status = doc.data().status;
        if (status.toLowerCase() === "en attente") {
          setStandbyDevices(standbyDevices => [...standbyDevices, { RealId: doc.id, data: doc.data() }]);
        }
      })
    })
    return () => {
      unsubscribe();
    }
  }, []);

  const deleteSensor = async (id) => {
    const deviseDoc = doc(db, "devises", id);
    await deleteDoc(deviseDoc);
  };
  return (

    <div className='enregistrement'>
      <div className='nodevice'>
        {standbyDevices.length !== 0 ? 
        <DisplayDeviceBox standbyDevices={standbyDevices} deleteSensor={deleteSensor} />:<NoDeviseEnregistrement />}
      </div>

      <Footer></Footer>
    </div>
  )
}
export default Enregistrement; 