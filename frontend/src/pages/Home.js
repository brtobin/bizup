import React, {useState} from 'react'
import Feed from '../components/Feed/Feed';

class Home extends React.Component {

  render() {  
  return (
    <div className="App">
      <header className="App-header">
        <Feed/>
      </header>
    </div>
    )
  }
}

export default Home
