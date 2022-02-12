import React, {useState} from 'react'
import "./Feed.css";

class Feed extends React.Component {
  constructor(props){
    super(props);

    const tasks = [];

    for(let i = 0; i < 5; i++){
        tasks.push({
            complete: 0,
            task: 'No task given',
            points: 0
        });

        
    }
    this.state = { tasks };
  }

  getTask() {
    let taskComplete = 0;
    let taskName = 'This is task A'; //TODO get task from API
    let taskPoints = 1000; //TODO get points from API

    

        
    
  }

  componentDidMount() {
      this.getTask();
  }

  render() {
    return(
      <div className='App'>
        <header className='App-header'>
          <div className='Feed'>
              {this.state.tasks.map( (task, index) => (
                  <p key={index}>
                  <input type='checkbox' id={"task"+index}></input>
                  <label htmlFor={"task"+index}> {task.task} </label>
                  </p>
              ))}
            
          </div>
        </header>
      </div>
    );
  }

}

export default Feed;


/*
import React from "react";
import "./Feed.css";

const Feed = () => {
    return (
        <div className="feed">
            <input type='checkbox' id='task'></input>
            <label htmlFor='task'>This is the task</label>
        </div>
        
    );
};


export default Feed;
*/