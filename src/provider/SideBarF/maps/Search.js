import React, { useRef } from 'react';
import './search.css';
import { Form, Button } from 'react-bootstrap';
const Search = ({SearchFiltr,searchFiltr}) => {

    const servicetFilter = useRef("");
    const typeFilter = useRef("");

    const servicetSelected = () => {
        SearchFiltr({ name: servicetFilter.current.name, value: servicetFilter.current.value });
    }
    const typeSelected = () => {
        SearchFiltr({ name: typeFilter.current.name, value: typeFilter.current.value });
    }
    return (
        <Form className='search'>
            <Form.Group className='group-search'>
                <Form.Control as="select" name="type" className='select' ref={typeFilter} onChange={typeSelected}  >
                    <option value="tout">Tout</option>
                    <option value="mouvement">Mouvement</option>
                    <option value="place-parking">place-parking</option>
                    <option value="feu-circulaton" >feu de circulaton</option>
                </Form.Control>
            </Form.Group>
            <Form.Group className='group-search'>
                <Form.Control name="service" as="select" className='select'ref={servicetFilter} onChange={servicetSelected} >
                    <option value="tout">Tout</option>
                    <option value="CSaaS">Sensing as Service</option>
                    <option value="SaaS">Sensor as service </option>
                    <option value="SAaS">Sensing and Actuation as Service</option>
                    <option value="SEaS">Sensing and Event as Service</option>
                </Form.Control>
            </Form.Group>

        </Form>
    )
}

export default Search