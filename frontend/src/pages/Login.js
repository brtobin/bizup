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
            <div className="Login-form">
              <form>
              <div className="input-container">
                <label>Username </label>
                <input type="text" name="uname" required />
              </div>
              <div className="input-container">
                <label>Password </label>
                <input type="text" name="pass" required />
              </div>
              <div className="button-container">
                <input type="submit" />
              </div>
              </form>
            </div>
            
          </header>
          
        </div>
        )
  }
}

export default Login;