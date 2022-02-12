import axios from "axios";
import { colours } from "nodemon/lib/config/defaults";

import {
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_FAIL,
	USER_LOGOUT,
	USER_DETAILS_REQUEST,
	USER_DETAILS_SUCCESS,
	USER_DETAILS_FAIL,
	USER_UPDATE_REQUEST,
	USER_UPDATE_SUCCESS,
	USER_UPDATE_FAIL,
} from "../constants/userConst";

export const login = (email, password, type) => {
	return async (dispatch) => {
		try {
			dispatch({ type: USER_LOGIN_REQUEST });

			const options = {
				url: `/api/${type}/login`,
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				data: {
					email,
					password,
				},
			};

			

			const resp = await axios(options);

			dispatch({
				type: USER_LOGIN_SUCCESS,
				payload: resp.data,
			});

			sessionStorage.setItem("userInfo", JSON.stringify(resp.data));
		} catch (err) {
			dispatch({
				type: USER_LOGIN_FAIL,
				payload:
					err.response && err.response.data.message
						? err.response.data.message
						: err.message,
			});
		}
	};
};

export const register = (name, email, password) => {
	return async (dispatch) => {
		try {
			dispatch({ type: USER_REGISTER_REQUEST });

			const options = {
				url: "/api/users",
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				data: {
					name,
					email,
					password,
				},
			};

			const resp = await axios(options);

			dispatch({
				type: USER_REGISTER_SUCCESS,
				payload: resp.data,
			});

			dispatch({
				type: USER_LOGIN_SUCCESS,
				payload: resp.data,
			});

			localStorage.setItem("userInfo", JSON.stringify(resp.data));
		} catch (err) {
			dispatch({
				type: USER_REGISTER_FAIL,
				payload:
					err.response && err.response.data.message
						? err.response.data.message
						: err.message,
			});
		}
	};
};

export const logout = () => {
	return async (dispatch) => {
		await sessionStorage.removeItem("userInfo");
		dispatch({ type: USER_LOGOUT });
	};
};

export const getUser = (id) => {
	return async (dispatch, getState) => {
		try {
			dispatch({ type: USER_DETAILS_REQUEST });

			const {
				userAuth: { userInfo, userType},
			} = getState();

			// const options = {
			// 	url: `/api/users/${id}`,
			// 	headers: {
			// 		"Content-Type": "application/json",
			// 		Authorization: `Bearer ${userInfo.token}`,
			// 	},
			// };

			// const resp = await axios(options);

			// dispatch({
			// 	type: USER_DETAILS_SUCCESS,
			// 	payload: resp.data,
			// });
		} catch (err) {
			dispatch({
				type: USER_DETAILS_FAIL,
				payload:
					err.response && err.response.data.message
						? err.response.data.message
						: err.message,
			});
		}
	};
};

export const updateProfile = (updateName, updateLoc, updateCoins) => {
	return async (dispatch, getState) => {
		try {
			dispatch({ type: USER_UPDATE_REQUEST });

			const {
				userAuth: { userInfo },
			} = getState();

			const options = {
				url: "/api/users/profile",
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${userInfo.token}`,
				},
				data: {
					_id: userInfo._id,
					name: updateName ? updateName : userInfo.name,
					location: updateLoc ? updateLoc : userInfo.location,
					coins: updateCoins ? updateCoins : userInfo.coins,
					email: userInfo.email,
					password: userInfo.password,
				},
			};

			const resp = await axios(options);

			console.log(resp.status);

			dispatch({
				type: USER_UPDATE_SUCCESS,
				payload: resp.data,
			});
		} catch (err) {
			dispatch({
				type: USER_UPDATE_FAIL,
				payload:
					err.response && err.response.data.message
						? err.response.data.message
						: err.message,
			});
		}
	};
};