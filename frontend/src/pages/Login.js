import React, {useState} from "react";
import './Login.css';
import axios from 'axios';


class Login extends React.Component {

  constructor(props) {
    super();
    this.state = {
      email: null,
      password: null
    }
  }

  componentDidMount() {

  }

  // TODO: Try 'react-bind-decorator'
  loginUser() {
    try{
      let token;
      const options = {
        url: "",
        method: "POST",
        Header: {},
      };
      axios.post('localhost:5000/api/users/login', {
        email: 'kb@progamer.com',
        password: '123456'
      })
      .then(function (response) {
        console.log(`Received token ${token}`);
      }).catch(function (response) {
        console.log(response.err);
      })
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
                      email: e.target.value
                    })} 
                    placeholder="Email" type="text" name="uname" required  />
                  </div>
                  <div className="input-container">
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