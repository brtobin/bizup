import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
	userRegisterReducer,
	userAuthReducer,
	userDetailsReducer,
	userUpdateReducer,
} from "../reducers/userReducer";

/* -------------------------------------------------------------------------- */

const initialState = {
	userAuth: {
		userInfo: localStorage.getItem("userInfo")
			? JSON.parse(localStorage.getItem("userInfo"))
			: null,
	},
};

const reducer = combineReducers({
	userAuth: userAuthReducer,
	userRegister: userRegisterReducer,
	userDetails: userDetailsReducer,
	userUpdate: userUpdateReducer,
});

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

/* -------------------------------------------------------------------------- */

export default store;