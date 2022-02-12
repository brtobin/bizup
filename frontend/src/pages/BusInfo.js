import Modal from 'react-modal';
import React, {useEffect, useState} from 'react';
import { getUser } from "../actions/userActions";
import challengeItem from '../components/ChallengeItem/challengeItem';
import './BusInfo.css';

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
            let butt = document.getElementById('openModal');
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
    

    return(
        <React.Fragment>
            
            <img src='https://img.icons8.com/doodle/48/000000/address-book.png'></img>
            <div>
            <button id='addChallenge' className='onButton' disabled={false} onClick={setModalIsOpenToTrue}>+</button>
            <Modal isOpen={modalIsOpen}>
                <button onClick={setModalIsOpenToFalse}>x</button>
            </Modal>
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