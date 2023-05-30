import { SET_MESSAGES, ADD_MESSAGE } from "./messagesActions";

export const messagesReducer = (state, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return {
        messages: action.payload,
      };
    case ADD_MESSAGE:
      return {
        messages: [action.payload, ...state.messages],
      };
    default:
      return {
        state,
      };
  }
};
