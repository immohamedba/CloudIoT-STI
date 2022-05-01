import React, { Component } from 'react';
import './fonctionalite.css';
const Fonctionalite = () => {
    return (
        <div className='fonc' id="fonctionalite">
            <div className='csaas service-bloc'>
                <h2>CSaaS</h2>
                <h3>Cloud-based sensing as a service </h3>
                <ul>
                    <li>s'abonner et publier des données de détection.</li>
                    <li>les fournisseurs de capteurs fournissent des données
                        de capteurs sur des dispositifs mobiles ou sur des
                        réseaux de capteurs par le biais des opérations. </li>

                    <li> L'accumulation de données résultant de ces services
                        forme des données massives, appelées big data, qui sont
                        sauvegardées et traitées sur le réseau de l'entreprise.</li>
                </ul>
            </div>
            <div className='SaaS service-bloc'>
                <h2>SaaS</h2>
                <h3>Sensor as service: </h3>
                <ul>
                    <li>Ce type de service permet d'offrir davantage de fonctionnalités
                        et de caractéristiques d'un ensemble de capteurs similaires ou différents..</li>
                    <li>De nombreuses plateformes ont été développées pour faire converger
                        les données des capteurs et l'analytique pour fournir une aide à la décision
                        fondée sur les données pour plusieurs applications, dont les soins de santé </li>
                </ul>

            </div>
        </div>
    )

}
export default Fonctionalite;