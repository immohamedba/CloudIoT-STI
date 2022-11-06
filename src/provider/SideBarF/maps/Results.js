import React,{useEffect} from 'react'
import './results.css';
import ResultatsMouvement from './ResultatsMouvement'
const Results = (props) => {

  let  resulat ="Rien à afficher";
  const type= props.type;

  useEffect(() => {  

  }, [type])

  return (
    <div className='result'>
      <div className="research-title">
        Results
      </div>
      <div className="reseach-result">
      {resulat}
      </div>
    </div>
  )
}

export default Results;
//        {type == "mouvement"? <ResultatsMouvement resulat={resulat}/> :  'Rien à affcher'}