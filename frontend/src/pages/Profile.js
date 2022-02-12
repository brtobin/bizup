import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, resolvePath } from "react-router-dom";
import './Profile.css';
import Modal from 'react-modal';

import '../components/Modal.css';

import pfp from '../images/avatar_female.png';
import { getUser, updateProfile } from "../actions/userActions";

const Profile = () => {

  const [name, setName] = useState("");
  const [updateName, setUpdateName] = useState("");
  const [location, setLocation] = useState("");
  const [updateLoc, setUpdatLoc] = useState("");
  const [coins, setCoins] = useState("");

  const[modalIsOpen, setModalIsOpen] = useState(false);

  const { loading, error, userInfo } = useSelector((state) => {
		return state.userAuth;
	});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUserInfo = () => {
    dispatch(getUser());
    console.log(userInfo);
    setName(userInfo.name);
    setLocation(userInfo.location);
    setCoins(userInfo.coins);
  }


  useEffect(() => {
    console.log('MyComponent onMount');
    getUserInfo();
    return () => {
        console.log('MyComponent onUnmount: ' + userInfo);
    };
  }, []);

  const setModalIsOpenToTrue = () =>{
    setModalIsOpen(true)
  }
  const setModalIsOpenToFalse =()=>{
      setModalIsOpen(false)
  }

  const handleEditSubmit = () => {
    setModalIsOpenToFalse();
    dispatch(updateProfile(updateName, updateLoc));
  }

  Modal.setAppElement('#modal');

  return (
      <div className="Profile">
        <header className="Profile-main">
          <div className="Profile-pic">
            <img alt="" src={pfp}/>
          </div>
          <div className="Profile-info">
            <p>
              {name}
            </p>
            <p>
              Location: {location}
            </p>
            <p>
              {coins} points
            </p>
          </div>
          <div className="Profile-Edit">
            <button onClick={setModalIsOpenToTrue}>Edit Profile</button>
            <Modal className="Profile-Modal" isOpen={modalIsOpen}>
                <h1> Edit Profile</h1>
                <form>
                  <div className="input-container">
                    <input className="Profile-entry"
                    onChange={(e) => setUpdateName(e.target.value)}
                    placeholder="Name" type="text" name="profile_name" required  />
                  </div>
                  <div className="input-container">
                    <input className="Profile-entry" 
                    onChange={(e) => setUpdatLoc(e.target.value)}
                    placeholder="Location" type="text" name="loc" required />
                  </div>
                  <input type="button" onClick={handleEditSubmit} value="Save Changes"/>
                  </form>
            </Modal>
          </div>
        </header>
      </div>
      )
}

export default Profile;