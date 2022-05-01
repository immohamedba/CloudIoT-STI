import React,{ useEffect,useState }  from 'react';
import './top-bar.css';
import logo from '../logo.PNG';
import { CgProfile } from 'react-icons/cg'
import UserAcount from './UserAcount' ;
import { IconButton } from '@mui/material';
function TopBar() {

    return (
        <div className='bar'>
            <img src={logo} className="logo-provider" />
            <div className='second'>
                <h3> Interface de fournisseur </h3>
                <IconButton>
                <CgProfile className='user-login'/>
                </IconButton>
            </div>
            
        </div>

    )
}
export default TopBar