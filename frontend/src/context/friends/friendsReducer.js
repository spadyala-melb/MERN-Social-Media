import { SET_FRIENDS } from "./friendsActions";

export const friendsReducer = (state, action) => {
  switch (action.type) {
    case SET_FRIENDS:
      return {
        friends: action.payload,
      };

    default:
      return {
        state,
      };
  }
};
