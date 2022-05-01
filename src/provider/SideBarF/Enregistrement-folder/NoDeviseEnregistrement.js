import React,{ useEffect,useState }  from 'react';
import './no-devise-enregistrement.css';
import { MdSensors } from 'react-icons/md';
import AddDevise from './AddDevise';
import { Modal, Button } from 'react-bootstrap';
import { db } from '../../../firebase';
import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import { async } from '@firebase/util';


function NoDeviseEnregistrement() {
    //  Gestion de pop-up  
    const [show, setShow] = useState(false);
    const showAddDeviceModal = () =>setShow(true);
    const handleClose = () => setShow(false);

    // collectioner : comprend la base de donnée et la table (domument en fire base)
    const [devises, setDevises] = useState([]);
    const DevisesCollectioner = collection(db, "devises");
    
    useEffect(()=>{
        handleClose ();
    }, [])

   /* const addDevise = async () => {

        await addDoc(DevisesCollectioner,
            {
                idDevise: ID, Type: type, DateRegistration: date,>
                localisation: localisation, service: Service, status: "en attente"
            });
    };*/


    return (
        <div className="nodevisenregistrement">
            <div className='icon'>
                <MdSensors />
            </div>
            <div className='first'>
                Aucune inscription en attente à afficher.
            </div>
            <div className='second'>
                Utilisez l'assistant pour enregistrer un nouveau périphérique.
            </div>
            <button className='registre' onClick={showAddDeviceModal} >enregister un Appareil</button>

            <Modal show={show} onHide={handleClose} className="modal" >
                <Modal.Header closeButton closeLabel ="Fermer" className='modal-header'>
                    <Modal.Title className='modal-title'>Enregistrer un capteur</Modal.Title>
                </Modal.Header>

                <Modal.Body className='modal-body'>
                    <AddDevise setShow = {setShow}/>
                </Modal.Body>
            </Modal>
        </div>

    );
}

export default NoDeviseEnregistrement; 