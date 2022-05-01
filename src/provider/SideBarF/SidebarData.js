import React from 'react'
import {  FaListUl, FaEnvelopeOpenText } from 'react-icons/fa'
import {  BiPlusMedical} from 'react-icons/bi'
import {  SiGooglemaps} from 'react-icons/si'
import {IoMdHelpCircle, IoMdPeople } from "react-icons/io"
import './Navbar.css'
export const SIdebarData = [

    {
        title: "Acceuil",
        path: "" ,
        cName: 'drop',
    },
    {
        title: "Enregistrement",
        path: "/enregistrement" ,
        icon: <BiPlusMedical/>,
        cName: 'nav-text'
    },
    {
        title: "Capteurs",
        path: "/appareils" ,
        icon: <FaListUl />,
        cName: 'nav-text nav-bord'
    },
    {
        title: "Localisation",
        path: "/localisation" ,
        icon: <SiGooglemaps />,
        cName: 'nav-text'
    },

    {
        title: "Consultation",
        path: "" ,
        cName: 'drop'
    },
    {
        title: "CSaaS",
        path: "/csaas" ,
        icon: <IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: "SaaS",
        path: "/saas" ,
        icon: <IoMdPeople />,
        cName: 'nav-text nav-bord'
    },
    {
        title: "SEaS",
        path: "/SEaS" ,
        icon: <FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: "SAaaS",
        path: "/saaas" ,
        icon: <IoMdHelpCircle />,
        cName: 'nav-text  nav-bord'
    }
]