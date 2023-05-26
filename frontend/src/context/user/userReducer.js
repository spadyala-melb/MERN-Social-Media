import { LOGIN, REGISTER, LOGOUT } from "./userActions";

export const userReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        user: action.payload,
      };
    case REGISTER:
      return {
        user: action.payload,
      };
    case LOGOUT:
      return {
        user: null,
      };
    default:
      return {
        state,
      };
  }
};
