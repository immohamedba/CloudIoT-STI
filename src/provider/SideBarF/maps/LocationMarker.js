import { Icon } from '@iconify/react';
import React from 'react';
import tractorIcon from '@iconify/icons-emojione/tractor';
import verticaltrafficlightIcon from '@iconify/icons-fxemoji/verticaltrafficlight';
import pButton from '@iconify/icons-emojione-monotone/p-button';
import './localisation.css';
import Results from './Results'

function LocationMarker({ lat, lng, service, id, realId, statu, date, type }) {
  let renderIcon = null;
  //  console.log(id, type, lng, lat);
  switch (type) {
    case 'mouvement': renderIcon = tractorIcon; break;
    case 'feu-circulaton': renderIcon = verticaltrafficlightIcon; break;
    case 'place-parking': renderIcon = pButton; break;
  }
  function ShowResult() {
    console.log(type);
    <Results 
    type={type}
    />
  }
  return (
    <div onClick={ShowResult}>
      <Icon icon={renderIcon} className="location-icon" />
    </div>
  )
}
export default LocationMarker;