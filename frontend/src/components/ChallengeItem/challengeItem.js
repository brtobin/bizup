import React from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./challengeItem.css";
import Modal from 'react-modal';

import { useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';

import { updateUserChallenge } from "../../actions/challengeActions";

const ChallengeItem = (props) => {

	const [userComplete, setUserComplete] = useState("");
	const[modalIsOpen, setModalIsOpen] = useState(false);

	const { loading, error, userInfo} = useSelector((state) => {
		return state.userAuth;
	});

    const dispatch = useDispatch();



	Modal.setAppElement('#root');

	const setModalIsOpenToTrue = () =>{
        setModalIsOpen(true)
    }
    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

	const openModal = () => {
	
		if (userInfo) {
			setModalIsOpenToTrue();
		}

	}

	const updateUserAchievement = () => {

		if (userInfo) {
			setModalIsOpenToFalse();
			dispatch(updateUserChallenge(userComplete, userInfo.token ));
		}
		
	}

	return (
		<Container className="aroundBox">
			<Row>
				<Col>
					<img alt="" src={props.icon}></img>
				</Col>
				<Col xs={10}>
					<h2>{props.title}</h2>
				</Col>
			</Row>
			<Row>
				<Col>
					<p>Business: {props.host}</p>
				</Col>
				<Col>
					<p>Coins Awarded: {props.reward}</p>
				</Col>
				<Col>
					<p>Expiration Date: {props.expDate}</p>
				</Col>
			</Row>
			<Button onClick={openModal}>Mark User Achievement </Button>
			<Modal className="Challenge-Modal" isOpen={modalIsOpen}>
				<h1> Update User Achievement</h1>
				<form>
				<div className="input-container">
					<input className="Challenge-entry"
					onChange={(e) => setUserComplete(e.target.value)}
					placeholder="User email" type="text" name="user_complete" required  />
				</div>
				<input type="button" onClick={updateUserAchievement} value="Update User Accomplishment"/>
				</form>
			</Modal>
		</Container>
	);
};

export default ChallengeItem;
