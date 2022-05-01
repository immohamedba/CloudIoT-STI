import React from 'react';
import Navbar from '../Navbar';
import TopBar from '../../TopBar';
import './appareils.css';
import { Form } from 'react-bootstrap';
import { db } from '../../../firebase';
import { useState, useEffect } from "react";
import { addDoc, onSnapshot, collection, doc, deleteDoc, getDocs, updateDoc } from "firebase/firestore";
import { async } from '@firebase/util';
import DisplayTable from './DisplayTable';

function Appareils() {
  const [devises, setDevises] = useState([]);
  const DevisesCollectioner = collection(db, "devises");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFiltr, setSearchFiltr] = useState([]);
  const [serachResult, setSearchResult] = useState([]);

  const updateDevise = async (id, idDevise) => {
    const deviceDoc = doc(db, "devises", id);
    const newId = { idDevise: idDevise + "updated" };
    await updateDoc(deviceDoc, newId);
  }
  const deleteDevise = async (id) => {
    const deviseDoc = doc(db, "devises", id);
    await deleteDoc(deviseDoc);
  };
  const searchHanlder = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newDeviceList = devises.filter((devise) => {
        return Object.values(devise.data)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      console.log(newDeviceList);
      setSearchResult(newDeviceList);
    } else {
      setSearchResult(devises);
    }
  }
  const FiltrHandler = (termFilter) => {
    setSearchFiltr(termFilter);
    if (termFilter.value !== "tout") {
      const newDeviceList = devises.filter((devise) => {
        return Object.values(devise.data)
          .join(" ")
          .toLowerCase()
          .includes(termFilter.value.toLowerCase());
      });
      setSearchResult(newDeviceList);
    } else {
      setSearchResult(devises);
    }
  }
  useEffect(() => {
    const unsubscribe = onSnapshot(DevisesCollectioner, snapchot => {
      setDevises(snapchot.docs.map(doc => ({ RealId: doc.id, data: doc.data() })))
    })
    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <div className='appareils'>
      <DisplayTable deleteDevise={deleteDevise}
        devises={searchTerm.length < 1 && searchFiltr.value === "tout" ? devises : serachResult}
        updateDevise={updateDevise}
        term={searchTerm}
        searchKeyword={searchHanlder}
        searchFiltr={searchFiltr}
        SearchFiltr={FiltrHandler}
      />
    </div>
  )
}
export default Appareils;