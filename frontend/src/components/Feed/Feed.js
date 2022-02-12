import React, {useState} from 'react'
import "./Feed.css";

class Feed extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        complete: 0,
        task: 'there is no task',
        points: 0
    }
  }

  getTask() {
    let taskComplete = 0;
    let taskName = 'This is task A'; //TODO get task from API
    let taskPoints = 1000; //TODO get points from API
    console.log("from get task");

    this.setState({
        complete: taskComplete,
        task: taskName,
        points: taskPoints
    })
  }

  componentDidMount() {
      this.getTask();
  }
  render() {
    return(
      <div className='App'>
        <header className='App-header'>
          <div className='Feed'>
            <input type='checkbox' id={"task"}></input>
            <label htmlFor={"task"}> {this.state.task} </label>
            
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