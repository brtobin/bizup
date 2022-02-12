import React from 'react'
import logo from '../logo.svg';
import Feed from '../components/Feed/Feed';

class Task extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      complete: 0,
      task: 'No task given'
    }
    

  }
}
const Home = () => {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='Feed'>
          <Feed/>
          <Feed/>
          <Feed/>
          <Feed/>
          <Feed/>
        </div>
      </header>
    </div>
    )
}

export default Home