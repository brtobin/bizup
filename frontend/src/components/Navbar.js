import React, {useState} from "react";
import "./Navbar.css";



class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Brianna"
    }
  }

  getUserName() {
    let profileName = /* API CALL TO DATABASE INDEXED BY USERNAME TO GET NAME*/ "Brianna";

    this.setState({
      name: profileName
    })
    
  }

  componentDidMount() {
    this.getUserName();  
  }

  render() {
    return (
      <nav>
        <div className="container">
          <h2>Bizzup</h2>
        </div>
      </nav>
    );
  }
}

export default Navbar;