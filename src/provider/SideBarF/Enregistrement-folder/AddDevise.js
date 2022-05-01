
import { Form, Button } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { db } from '../../../firebase';
import { addDoc, collection, doc } from "firebase/firestore";
import { async } from '@firebase/util';
import './new-device-waiting.css';
import './add-devise.css'
const AddDevise = (props) => {
    const [newDevise, setNewDevice] = useState(
        { id: "", type: "", lat :"", lng :"", service: "", date: "", statu: "" }
    );
    const DevisesCollectioner = collection(db, "devises");

    const addDevise = async (id, type, lat, lng, service, date, statu) => {
        await addDoc(DevisesCollectioner,
            {
                idDevise: id, Type: type, DateRegistration: date,
                lat:lat, lng: lng, service: service, status: "en attente"
            });
    };
    const onInputChange = (e) => {
            setNewDevice({ ...newDevise, [e.target.name]: e.target.value });   
    }

    const { id, type, lat, lng, service, date, statu } = newDevise;
    

    const handleSubmit = (e) => {
        e.preventDefault();
        addDevise(id, type,lat, lng, service, date, statu);
        props.setShow(false);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>ID Appareil</Form.Label>
                <Form.Control type="text" placeholder="exemple: devise-1"
                    name="id" value={id} onChange={(e) => onInputChange(e)} required />
            </Form.Group>

            <Form.Group>
                <Form.Label>Localisation</Form.Label>
                <div className='localisation'>
                    <Form.Control type="float" placeholder="Latitude"
                        name="lat" value={lat} onChange={(e) => onInputChange(e)} required />
                    <Form.Control type="float" placeholder="Longitude"
                        name="lng" value={lng} onChange={(e) => onInputChange(e)} required />
                </div>
            </Form.Group>
            <Form.Group>
                <Form.Label>Date d'enregistrement</Form.Label>
                <Form.Control type="date" placeholder="dd-MM-yyy"
                    name="date" value={date} onChange={(e) => onInputChange(e)} required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Type</Form.Label>
                <Form.Control as="select" name="type" value={type} onChange={(e) => onInputChange(e)} required >
                    <option value="mouvement">Mouvement</option>
                    <option value="place-parking">place-parking</option>
                    <option value="feu-circulaton" >feu de circulaton</option>
                </Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Service</Form.Label>
                <Form.Control name="service" as="select" value={service} onChange={(e) => onInputChange(e)} required>
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
export default AddDevise