import { Form, Button } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { db } from '../../../firebase';
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { async } from '@firebase/util';
import './new-device-waiting.css';
import React from 'react'

const UpdateSensor = (props) => {
    /*const [newDevise, setNewDevice] = useState(
        { id: "", type: "", localisation: "", service: "", date: "", statu: "" }
    )*/
    const DevisesCollectioner = collection(db, "devises");

    // Add Device :
    const updateSensor = async (Ddevice) => {
        const deviceDoc = doc(db, "devises", props.rID);
        await updateDoc(deviceDoc, Ddevice);
    }

    const onInputChange = (e) => {
        props.setNewDevice({ ...props.newDevice, [e.target.name]: e.target.value });
    }
    //const { id, type, localisation, service, date, statu } = newDevise;

    const handleSubmit = (e) => {
        e.preventDefault();
        // a modifier
        updateSensor(props.newDevice);
        props.setShow(false);
    }
    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>ID Appareil</Form.Label>
                <Form.Control type="text"
                    name="idDevise" value={props.newDevice.idDevise} onChange={(e) => onInputChange(e)} required />
            </Form.Group>

            <Form.Group>
                <Form.Label>Localisation</Form.Label>
                <Form.Control type="text" name="localisation" value={props.newDevice.localisation}
                    onChange={(e) => onInputChange(e)} required />

            </Form.Group>
            <Form.Group>
                <Form.Label>Date d'enregistrement</Form.Label>
                <Form.Control type="DateRegistration" name="date" value={props.newDevice.DateRegistration}
                    onChange={(e) => onInputChange(e)} required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Type</Form.Label>
                <Form.Control as="select" name="Type" value={props.newDevice.Type} onChange={(e) => onInputChange(e)} required >
                    <option value="mouvement">Mouvement</option>
                    <option value="place-parking">place-parking</option>
                    <option value="feu-circulaton" >feu de circulaton</option>
                </Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Service</Form.Label>
                <Form.Control name="service" as="select" value={props.newDevice.service}
                    onChange={(e) => onInputChange(e)} required>
                    <option value="CSaaS">Sensing as Service</option>
                    <option value="SaaS">Sensor as service </option>
                    <option value="SAaS">Sensing and Actuation as Service</option>
                    <option value="SEaS">Sensing and Event as Service</option>
                </Form.Control>
            </Form.Group>
            <Button className='btn-valider' type="submit"> valider</Button>
        </Form>
    );
}

export default UpdateSensor