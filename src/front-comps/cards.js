import React, { useState } from 'react'
import "./cards.css"

export default function Cards(props) {
  
  const [display, disfunc] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const showtexts = (givenname) =>{
    disfunc(!display)
    setButtonDisabled(true);
    props.func(props.tell)
   
  }

  return (
    <div>
      <div classname="p-3 m-2 carddiv">
        <div className='inner-div me-3 ms-3 d-flex align-items-center justify-content-center'>
            {display == true ? (<input type="image" className="row-7" style={{ height:"100px", width:"100px"}} src={props.name} />) : ""}
        </div>
        <div className='button-div me-3 ms-3 d-flex justify-content-center' onClick={showtexts}>
            <button className='button' disabled={buttonDisabled}>Reveal</button>
        </div>
       
      </div>
    </div>
  )
}
