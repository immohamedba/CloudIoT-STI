import React, { useRef } from 'react';
import './filter-component.css';
import { Form } from 'react-bootstrap';
const FilterComponent = (props) => {
    
    const inputEl = useRef("");
    const servicetFilter = useRef("");
    const typeFilter = useRef("");
    const getSearchTerm = () => {
        props.searchKeyword(inputEl.current.value);
    }
    const servicetSelected = () => {
        props.SearchFiltr({ name: servicetFilter.current.name, value: servicetFilter.current.value });
    }
    const typeSelected = () => {
        props.SearchFiltr({ name: typeFilter.current.name, value: typeFilter.current.value });
    }
    return (
        <div >
            <form className='filter-bloc'>
                <Form >
                    <Form.Group className='filter-bloc'>
                    <Form.Label> Type</Form.Label>
                        <Form.Control className=' select-bloc' name="type" as="select" ref={typeFilter} onChange={typeSelected}  >
                            <option value="tout">Tout</option>
                            <option value="mouvement">Mouvement</option>
                            <option value="place-parking">place-parking</option>
                            <option value="feu-circulaton" >feu de circulaton</option>
                        </Form.Control>
                        <Form.Label>Service</Form.Label>
                        <Form.Control className=' select-bloc' name="service" as="select" ref={servicetFilter} onChange={servicetSelected}>
                            <option value="tout">Tout</option>
                            <option value="CSaaS">Sensing as Service</option>
                            <option value="SaaS">Sensor as service </option>
                            <option value="SAaS">Sensing and Actuation as Service</option>
                            <option value="SEaS">Sensing and Event as Service</option>
                         </Form.Control>
                    </Form.Group>
                </Form>
                <div>
                    <input type="search" name="id-device"
                        className='bg-form' placeholder='id-device'
                        value={props.term} onChange={getSearchTerm}
                        ref={inputEl} />
                </div>
            </form>
        </div>
    )
}
//<button className='btn-search'> Rechercher </button>
export default FilterComponent;