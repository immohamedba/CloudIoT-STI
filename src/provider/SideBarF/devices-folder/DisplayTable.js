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

    const showAddDeviceModal = (device, id) => {
        setNewDevice(device);
        setrID(id);
        setShow(true);
    }

    useEffect(() => {
        handleClose();
    }, [])

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
                                <td>{device.data.localisation}</td>
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















