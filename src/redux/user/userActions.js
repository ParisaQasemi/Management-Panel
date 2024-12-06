import { getUserService } from "../../services/auth";
import {
  RECEIVE_USERS_ERROR,
  RECEIVE_USERS_RESPONSE,
  SEND_USERS_REQUEST,
} from "./userType";

export const sendUserRequest = () => {
  return {
    type: SEND_USERS_REQUEST,
  };
};

export const receiveUserResponse = (data) => {
  return {
    type: RECEIVE_USERS_RESPONSE,
    payload: data,
  };
};

export const receiveUserError = (error) => {
  return {
    type: RECEIVE_USERS_ERROR,
    payload: error,
  };
};

export const getRolesActionRedux = () => {
  return (dispatch, state) => {
    dispatch(sendUserRequest());
    getUserService().then((res) => {
      dispatch(receiveUserResponse(res.data.roles));
    }).catch(error=>{
        dispatch(receiveUserError(error.message))
    })
  };
};
