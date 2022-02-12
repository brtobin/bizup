import React, {useState} from 'react'
import Feed from '../components/Feed/Feed';

class Home extends React.Component {
  constructor(props) {
    super(props);

    let tasks = [];

    for( let i = 0; i<5; i++) {
      tasks.push(<Feed />);
    }
  }

  render() {  
  return (
    <div className="App">
      <header className="App-header">
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
    )
  }
}

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

export default Home
