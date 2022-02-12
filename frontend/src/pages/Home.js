import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChallengeItem from "../components/ChallengeItem/challengeItem";
import { listChallenges } from "../actions/challengeActions";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";

const Home = () => {
	const dispatch = useDispatch();
	const { loading, error, challenges } = useSelector((state) => {
		return state.challengeList;
	});

	useEffect(() => {
		dispatch(listChallenges());
	}, [dispatch]);

	return (
		<div className="Home">
			<Container overflow="scroll">
				<h1>Challenges</h1>
				{Array.isArray(challenges) &&
					challenges.map((task, index) => {
						return (
							<ChallengeItem
								key={task._id}
								icon={task.icon}
								reward={task.reward}
								title={task.title}
								host={task.host.name}
								expDate={task.expirationTime}
								id={task._id}
							/>
						);
					})}
			</Container>
		</div>
	);
};

export default Home;
