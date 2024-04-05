import React from 'react'
import Cards from './front-comps/cards'
import  {useEffect, useState } from 'react';
import "./App.css"
import Mylist from './front-comps/Mylist';
import Button from './front-comps/Button';

export default function App() { 
   //1-cat
   //2-defuse
   //3-shuffle
   //4-bomb
   const namesWithIds = [
    { id: 1, url: "http://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/1024/22220-cat-face-icon.png" },
    { id: 2, url: "https://vignette.wikia.nocookie.net/cswikia/images/2/21/Defuser_hud_csgoa.png/revision/latest?cb=20150619131533" },
    { id: 3, url: "https://www.svgrepo.com/show/136985/shuffle.svg" },
    { id: 4, url: "https://cdn4.iconfinder.com/data/icons/explosion/512/as_897-1024.png" }
];

  const [points, pointsfunc] = useState(0)
  const [card, setCards] = useState(null);
  const [random, randomfunc] = useState([]);

  const [mybtn, btnfunc] = useState(0);
  const [username, userfunc] = useState(null);

  const shuffleArray = (array) => {
    const ss = array.sort(() => Math.random() - 0.5)
    console.log(ss)
    return ss
    //generates random num between 0-1 and subtract them by 0.5 and then return a sorted number of array 
  };
  
  
  const checkname = (givenname)=> {

     if(givenname.id == 1){  
       randomfunc(random.filter((e) => e.id != 1))
       setCards(" Removed beacuse of Cat Card !!") 

     }if(givenname.id == 2){
       pointsfunc(points + 3)
       
     } if(givenname.id == 3 ){
       pointsfunc(points + 2) 
       
     }if(givenname.id == 4 ){
       pointsfunc(0)  
       setCards("Exploded !! Game Over") 
       randomfunc([])
     } 
  }

  // const restart = ()=>{
  //   const shuffledNames = shuffleArray(names); 
  //   random.push([...shuffledNames])
  //   console.log("helooooo",random)
  //   randomfunc(...random)
  // }

  const restart = () => {
    
    const shuffledIds = shuffleArray(namesWithIds); // Shuffle the IDs
    console.log(shuffledIds)
    random.push([...shuffledIds]);
    console.log("helooooo", random);
    randomfunc(...random);
}
  
  useEffect(()=>{
    btnfunc(1)
    restart();
  },[])

  //--------------------------------------------
  
  return (
    <div>
       
      <div className=' d-flex flex-wrap col align-items-center'>
        
        <div className='col-10 container d-flex justify-content-center text-align-center flex-wrap' >
          
          {mybtn == 1 ? <Button numchange={btnfunc} num={2}/>: ""}
          
         
          {mybtn == 2 ? <Mylist numchange={btnfunc} num={3}/> : ""}
          {mybtn == 3 ? random.map((givenname)=> <Cards name = {givenname.url} func={checkname} tell={givenname}/>) : ""}
           
           <p style={{textAlign:"center"}} className='col-10 info'>{card}</p>
        </div>
        <div className='col-2 p-3' style={{ height:"743px",backgroundColor:"white"}}>
           <h1>Points:</h1>
           <hr></hr>
           <p className='points'>{points} </p>
        </div>
      </div>
    </div>
  )
}
