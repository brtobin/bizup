import React, {useState} from "react";
import './Login.css';

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

  render() {
    return (
        <div className="Login">
          <header className="Login-main">
            <div className="Login-card">
              <h1>Bizzup</h1>
              <div className="Login-form">
                <form>
                  <div className="input-container">
                    <input className="Login-entry" placeholder="Username" type="text" name="uname" required />
                  </div>
                  <div className="input-container">
                    <input className="Login-entry" placeholder="Password" type="text" name="pass" required />
                  </div>
                  <div className="button-container">
                    <input type="submit" />
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