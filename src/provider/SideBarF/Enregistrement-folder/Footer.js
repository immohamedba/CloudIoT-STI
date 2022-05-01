import React from 'react'
import { Link } from "react-router-dom";
import './footer.css';
import { useState,useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import AddDevise from './AddDevise';
const Footer = () => {
    const [show, setShow] = useState(false);
    const showAddDeviceModal = () =>setShow(true);
    const handleClose = () => setShow(false);
    


    useEffect(()=>{
        handleClose ();
    }, [])

    return (
        <div className='enregisrement-footer'>
            <Link to="/appareils">
                <button className='btn'> voire plus</button>
            </Link>
            <button className='btn' onClick={showAddDeviceModal} > nouveau capteur </button>

            <Modal show={show} onHide={handleClose} className="modal" >
                <Modal.Header closeButton closeLabel ="Fermer" className='modal-header'>
                    <Modal.Title className='modal-title'>Enregistrer un capteur</Modal.Title>
                </Modal.Header>

                <Modal.Body className='modal-body'>
                    <AddDevise setShow = {setShow}/>
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default Footer;