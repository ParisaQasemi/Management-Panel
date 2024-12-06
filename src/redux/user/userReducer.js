import {
  RECEIVE_USERS_ERROR,
  RECEIVE_USERS_RESPONSE,
  SEND_USERS_REQUEST,
} from "./userType";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_USERS_REQUEST:
      return { ...state, loading: true };

    case RECEIVE_USERS_RESPONSE:
      return { loading: false, data: action.payload, error: "" };

    case RECEIVE_USERS_ERROR:
      return { loading: false, data: [], error: action.payload };

    default:
      return state;
  }
};


export default userReducer