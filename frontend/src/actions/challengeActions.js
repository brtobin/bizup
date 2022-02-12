import {
	CHALLENGE_GET_REQUEST,
	CHALLENGE_GET_SUCCESS,
	CHALLENGE_GET_FAIL,
	CHALLENGE_ADD_REQUEST,
	CHALLENGE_ADD_SUCCESS,
	CHALLENGE_ADD_FAIL,
	CHALLENGE_DETAILS_REQUEST,
	CHALLENGE_DETAILS_SUCCESS,
	CHALLENGE_DETAILS_FAIL,
	CHALLENGE_UPDATE_REQUEST,
	CHALLENGE_UPDATE_SUCCESS,
	CHALLENGE_UPDATE_FAIL,
	CHALLENGE_DELETE_REQUEST,
	CHALLENGE_DELETE_SUCCESS,
	CHALLENGE_DELETE_FAIL,
	CHALLENGE_PUT_REQUEST
} from "../constants/challengeConst";

import axios from "axios";

export const listChallenges = () => {
	return async (dispatch) => {
		try {
			dispatch({
				type: CHALLENGE_GET_REQUEST,
			});

			const options = {
				url: "/api/challenges",
			};

			const resp = await axios(options);

			console.log(resp.data);

			dispatch({
				type: CHALLENGE_GET_SUCCESS,
				payload: resp.data,
			});

			await localStorage.setItem("challenges", JSON.stringify(resp.data));
		} catch (err) {
			dispatch({
				type: CHALLENGE_GET_FAIL,
				payload:
					err.response && err.response.data.message
						? err.response.data.message
						: err.message,
			});
		}
	};
};

export const updateUserChallenge = (userEmail, tok) => {
	return async (dispatch, getState) => {
		try {
			dispatch({
				type: CHALLENGE_PUT_REQUEST,
			});


			if (tok) {
				const options = {
					url: `/api/challenges/${userEmail}/620738e4a417aa58fc2362cf`,
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${tok}`,
					},
				};
	
				console.log("Maybe send req");
	
				const resp = await axios(options);
	
				console.log("Status: " + resp.status)
	
			} 

			// else, must be signed in

			
		} catch (err) {
			dispatch({
				type: CHALLENGE_GET_FAIL,
				payload:
					err.response && err.response.data.message
						? err.response.data.message
						: err.message,
			});
		}
	};
	
}