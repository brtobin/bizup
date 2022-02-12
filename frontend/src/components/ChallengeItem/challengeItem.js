import React from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./challengeItem.css";
const ChallengeItem = (props) => {
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
		</Container>
	);
};

export default ChallengeItem;
