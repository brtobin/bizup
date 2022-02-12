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
	CHALLENGE_PUT_REQUEST,
} from "../constants/challengeConst";

export const challengeListReducer = (state = { challenges: [], loading: false }, action) => {
	switch (action.type) {
		case CHALLENGE_GET_REQUEST:
			return { loading: true, challenges: [] };
		case CHALLENGE_GET_SUCCESS:
			return { loading: false, challenges: action.payload };
		case CHALLENGE_GET_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const playerChallengeReducer = (state = {}, action) => {
	switch (action.type) {
		case CHALLENGE_PUT_REQUEST:
			return {};
		default:
			return state;

	}
}