import React from 'react';
import { MdSensors } from 'react-icons/md';
import './new-device-waiting.css';
import { db } from '../../../firebase';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { async } from '@firebase/util';
const NewDeviceWaiting = (props) => {

  const DevisesCollectioner = collection(db, "devises");

  /*const deleteDevise = async (id) => {
    const deviseDoc = doc(db, "devises", id);
    await deleteDoc(deviseDoc);
  }
*/

  return (
    <div className='content'>
      {console.log(props.singleDevice.id)}
      <div className='title'>
        <MdSensors />
        <div className='id'>{props.singleDevice.data.idDevise}</div>
      </div>
      <div className='info'>
        <div className='status-title'>Etat</div>
        <div className='status'>{props.singleDevice.data.status}</div>
        {/*   <button onClick={() => { deleteDevise(devise.RealId) }}> Delete</button> !-> */}
        <button className='btn-sup'
          onClick={() => props.deleteSensor(props.singleDevice.RealId)}>
          Supprimer
        </button>
      </div>

    </div>
  )
}

export default NewDeviceWaiting;