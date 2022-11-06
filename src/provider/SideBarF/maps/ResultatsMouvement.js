import React from 'react'

function ResultatsMouvement(props) {
  return (
    <div>
        <div className='mvm-title'>
            Nombre de voiture 
        </div>
        <div className="resultat">
            {props.resulat}
        </div>
    </div>
  )
}

export default ResultatsMouvement