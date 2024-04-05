import React from 'react'
import './Mylist.css'

export default function Mylist(props) {
  return (
    <div>
      <div className='p-3 outer-div d-flex justify-content-center align-items center'>
        <input className='inp row-3 m-3 p-1'  type='text' placeholder='Enter your name'/>
        <button className='button p-2 m-3' onClick={()=>{props.numchange(props.num)}}>Lets's go !</button>
      </div>
    </div>
    

  )
}
