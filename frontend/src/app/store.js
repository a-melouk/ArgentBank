import { configureStore } from "@reduxjs/toolkit";
import { getUser, getToken } from "../authentication/auth-provider";

let state = {
  user: getUser() || null,
  token: getToken() || null,
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...currentState,
        user: action.payload.user,
      };

    case "REMOVE_USER":
      return { ...currentState, user: null };

    case "SET_TOKEN":
      return {
        ...currentState,
        token: action.payload.token,
      };

    case "REMOVE_TOKEN":
      return { ...currentState, token: null };

    default:
      return currentState;
  }
};

export const store = configureStore({
  preloadedState: state,
  reducer,
});
