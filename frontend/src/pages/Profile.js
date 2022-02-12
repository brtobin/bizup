import React, {useState} from "react";
import './Profile.css';

import pfp from '../images/avatar_female.png';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Brianna",
      locale: "Madison, WI"
    }
  }

  getUserInfo() {
    let profileName = /* API CALL TO DATABASE INDEXED BY USERNAME TO GET NAME*/ "Brianna Tobin";

    let profileLocale = /* API CALL TO DB INDEXED BY USERNAME TO GET NAME*/
    "Madison, WI"

    this.setState({
      name: profileName,
      locale: profileLocale
    })   
  }

  componentDidMount() {
    this.getUserInfo();  
  }

  render() {
    return (
        <div className="Profile">
          <header className="Profile-main">
            <div className="Profile-pic">
              <img alt="" src={pfp}/>
            </div>
            <div className="Profile-info">
              <p>
                {this.state.name} 
              </p>
              <p>
                {this.state.locale}
              </p>
            </div>
            
          </header>
          
        </div>
        )
  }
}

export default Profile;