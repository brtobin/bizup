import React from 'react'
import challengeItem from '../components/ChallengeItem/challengeItem'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';


const Home = () => {
  let info = {
    icon: 'https://img.icons8.com/doodle/48/000000/address-book.png',
    title: 'This is challenge 2',
    host: 'Target',
    reward: 1000,
    expDate: '10/19/2022'
  }

  let tasks = [];
  for (let i=0; i<100; i++){
    tasks.push({
      complete: 0,
      task: challengeItem(info)
    })
  }

  function checkComplete() {
    console.log('implement checkComplete in Hoe');  
  }


  return(

    <div className='Home'> 
      <Container overflow='scroll'>
        {tasks.map( (task, index) => (
        <div key={index}>
          <input type='checkbox' className='Checkbox' id={"task"+index}  onClick={checkComplete}></input>
          
          <label> {task.task} </label>
        </div>

        ))}
      </Container>
    </div>
  
   
 
  );
}

export default Home