import React, {useState} from "react";
import './Login.css';
import {TextInput} from 'react-native';

class Login extends React.Component {

  constructor(props) {
    super();
    this.state = {
      username: null,
      password: null
    }
  }

  componentDidMount() {

  }

  // TODO: Try 'react-bind-decorator'
  loginUser() {
    try{
      console.log(`Logging in user with ${this.state.username} and this password ${this.state.password}`);
    } catch (err) {
      console.log(this.state);
    }  
  }

  render() {
    return (
        <div className="Login">
          <header className="Login-main">
            <div className="Login-card">
              <h1>Bizzup</h1>
              <div className="Login-form">
                <form>
                  <div className="input-container">
                    <input className="Login-entry"
                    onChange={e => this.setState({
                      username: e.target.value
                    })} 
                    placeholder="Username" type="text" name="uname" required  />
                  </div>
                  <div className="input-container">
                    <TextInput secureTextEntry={true} />
                    <input className="Login-entry" 
                    onChange={e => this.setState({
                      password: e.target.value
                    })}
                    placeholder="Password" type="text" name="pass" required />
                  </div>
                  <div className="button-container">
                    <input type="submit" onClick={(e) => this.loginUser(e)} />
                  </div>
                </form>
              </div>             
            </div>        
          </header>
          
        </div>
        )
  }
}

export default Login;