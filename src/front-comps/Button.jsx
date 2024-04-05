import React from 'react'

export default function Button(props) {
  return (
    <div>
        <div className='d-flex align-items-center justify-content-center' style={{width:"300px"}}>
          <button className='p-4' onClick={()=>{props.numchange(props.num)}} style={{backgroundColor:"purple",color:"white"}}>Start</button>
        </div>
    </div>
  )
}
