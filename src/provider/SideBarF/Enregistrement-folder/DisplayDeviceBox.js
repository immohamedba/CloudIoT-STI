import React from 'react'
import './display-device-box.css'
import NewDeviceWaiting from './NewDeviceWaiting'


const DiplayDeviceBox = (props) => {


  return (
    <div className='display-device-box'>
      {props.standbyDevices.map(singleDevice => 
      <span className='device-box'> 
      <NewDeviceWaiting singleDevice={singleDevice} deleteSensor={props.deleteSensor}/>
      </span>
      )}
      <br />
    </div>
  )
}
export default DiplayDeviceBox;