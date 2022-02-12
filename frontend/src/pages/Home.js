import React, {useState} from 'react'
import './Home.css'
const Home = () => {
  
  let tasks = [];
  for (let i=0; i<5; i++){
    tasks.push({
      complete: 0,
      task: `There is no task ${i}`,
      points: 0
    })
  }


  return(

    <div className='Home'> 
      {tasks.map( (task, index) => (
      <p key={index}>
      <input type='checkbox' id={"task"+index}></input>
      <label htmlFor={"task"+index}> {task.task} </label>
      </p>
      ))}  
    </div>
 
  );
}

export default Home