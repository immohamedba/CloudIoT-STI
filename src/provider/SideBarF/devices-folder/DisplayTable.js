import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { MdOutlineEdit } from "react-icons/md";
import FilterComponent from './FilterComponent';
import './display-table.css';
import UpdateSensor from '../Enregistrement-folder/UpdateSensor';
import { Modal, Table } from 'react-bootstrap';

const DisplayTable = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [newDevice, setNewDevice] = useState([]);
    const [rID, setrID] = useState("");
    const urlBase = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";
    const key = "&key=" + process.env.REACT_APP_GOOGLE_API_KEY;
    //const [lat, setLat] = useState("");
   // const [lng, setLng] = useState("");
    const [url, setUrl] = useState("");

    const address = fetch(url)
        .then((response) =>{var responseClone=response.clone()
        return responseClone.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch(err => console.log(err.message));

    const getAddress =(lat, lng) => {
        console.log("lat :"+lat+ " lng :"+lng);
        let addr =lat + "," + lng;
        console.log("adress :"+addr);
        let url =urlBase + addr + key;
        setUrl(url);
        console.log(url);
        address.then((ad)=>{
            console.log(ad);
        });
    };
    // const addresse = "40.714224,-73.961452";
    // const refUrl = https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY;
    // const url = urlBase+addresse+key;


    const showAddDeviceModal = (device, id) => {
        setNewDevice(device);
        setrID(id);
        setShow(true);
    }

    useEffect(() => {
        handleClose();
    }, [])
    /*
       function getAdress(lng, lat) {
           const addr = lng + "," + lat;
           const url = urlBase + addr + key;
           const adress = fetch(url)
               .then(response => response.json())
               .then(data => {
                   return data.results[0].formatted_address;
               })
               .catch(err => console.log(err.message));
   
       }
   
       /*const getAdress = (lng , lat) => {
           const addr = lng + "," + lat;
           const url = urlBase + addr + key;
           let response  = await fetch(url);
           //use string literals
           let JsonData = await response.json();
           console.log(JsonData.results[0].formatted_address);
           return JsonData.results[0].formatted_address;
           
          }*/


    return (
        <div className='display-table'>
            <FilterComponent term={props.term}
                searchFiltr={props.searchFiltr}
                device={props.devises}
                searchKeyword={props.searchKeyword}
                SearchFiltr={props.SearchFiltr} />

            <div className='my-table'>
                <Table striped bordered hover className='table'>
                    <thead className='head-table'>
                        <tr>
                            <th> ID </th>
                            <th> Localisation</th>
                            <th>Type </th>
                            <th>Service </th>
                            <th> Status</th>
                            <th> Date </th>
                            <th>Modifier ou Supprimer </th>
                        </tr>
                    </thead>
                    <tbody className='body-table'>
                        {props.devises.map((device) => (
                            
                            <tr>
                                <td>{device.data.idDevise}</td>
                                <td>{()=>{getAddress(device.data.lat, device.data.lng)}}</td>
                                <td>{device.data.Type}</td>
                                <td>{device.data.service}</td>
                                <td>{device.data.status}</td>
                                <td>{device.data.DateRegistration}</td>
                                <td className="edit-sup">
                                    <IconButton edge="end" onClick={() => showAddDeviceModal(device.data, device.RealId)}>
                                        <MdOutlineEdit className="btn-edit" />
                                    </IconButton>
                                    <IconButton edge="end" onClick={() => props.deleteDevise(device.RealId)}>
                                        <DeleteIcon className="btn-delt" />
                                    </IconButton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <Modal show={show} onHide={handleClose} className="modal" >
                <Modal.Header closeButton closeLabel="Fermer" className='modal-header'>
                    <Modal.Title className='modal-title'>Enregistrer un capteur</Modal.Title>
                </Modal.Header>

                <Modal.Body className='modal-body'>
                    <UpdateSensor setShow={setShow}
                        newDevice={newDevice}
                        setNewDevice={setNewDevice} rID={rID} />
                </Modal.Body>
            </Modal>

        </div >
    )
}

export default DisplayTable;















