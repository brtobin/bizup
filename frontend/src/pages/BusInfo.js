import Modal from 'react-modal';
import React, {useEffect, useState} from 'react';
import { getUser } from "../actions/userActions";
import ChallengeItem from '../components/ChallengeItem/ChallengeItem';
import BusChallengeAdd from '../components/BusChallengeAdd/BusChallengeAdd';
import './BusInfo.css';
import tacos from "../images/tacos.jpg";

import { updateProfile } from "../actions/userActions";
import { useDispatch } from 'react-redux';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

const BusInfo = () => {
    let business_mode = false;
    const [userComplete, setUserComplete] = useState("");
    const dispatch = useDispatch();

    let info = {
        name: 'Target',
        email: 'target@yahoo.com',
        address: '1234 Sun Drive',
        description: 'It is in the sun, directly in it',
        challenges: 'this should not be a string'
    }

    useEffect(() => {
        if(1===1){
            return;
        } else {
            let butt = document.getElementById('addChallenge');
            butt.className='offButton';
            butt.disabled=true;
        }
    }) 
 
    const challengeForm = () => {
        console.log('challengeForm');
    }

    Modal.setAppElement('#root');
    const[modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue = () =>{
        setModalIsOpen(true)
    }
    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    const handleMarkUser = () => {

        setModalIsOpenToFalse();
        dispatch(updateProfile(null, null, 1000));

    }
    

    return(
        <React.Fragment> 
            <img alt="" src={tacos}></img>
            <div>
            <button id='addChallenge' className='onButton' disabled={false} onClick={setModalIsOpenToTrue}>+</button>
            <div className="BusInfo-MarkUser">
                <Modal className="BusInfo-Modal" isOpen={modalIsOpen}>
                    <h1> Edit Profile</h1>
                    <form>
                    <div className="input-container">
                        <input className="BusInfo-entry"
                        onChange={(e) => setUserComplete(e.target.value)}
                        placeholder="User email" type="text" name="user_complete" required  />
                    </div>
                    <input type="button" onClick={handleMarkUser} value="Mark User Accomplishment"/>
                    </form>
                </Modal>
          </div>
            </div>
            <h1>{info.name}</h1>
            <p>email: {info.email}</p>
            <p>address: {info.address}</p>
            <p>description: {info.description}</p>
            <p>challenges: {info.challenges}</p>
            




        </React.Fragment>
        
    );

}

export default BusInfo;