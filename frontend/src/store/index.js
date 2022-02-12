import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
	userRegisterReducer,
	userAuthReducer,
	userDetailsReducer,
	userUpdateReducer,
} from "../reducers/userReducer";

import { challengeListReducer } from "../reducers/challengeReducer";

/* -------------------------------------------------------------------------- */

const initialState = {
	userAuth: {
		userInfo: localStorage.getItem("userInfo")
			? JSON.parse(sessionStorage.getItem("userInfo"))
			: null,
	},
	challengeList: {
		challenges: localStorage.getItem("challenges")
			? JSON.parse(sessionStorage.getItem("challenges"))
			: null,
	},
};

const reducer = combineReducers({
	userAuth: userAuthReducer,
	userRegister: userRegisterReducer,
	userDetails: userDetailsReducer,
	userUpdate: userUpdateReducer,
	challengeList: challengeListReducer,
});

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

/* -------------------------------------------------------------------------- */

export default store;
