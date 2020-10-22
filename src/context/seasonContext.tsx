import React, { createContext, useReducer } from "react";
import { IState, IAction } from "../interfaces";

const initialState: IState = {
  episodes: [],
  favorites: [],
};

export const Store = createContext<IState | any>(initialState);

const seasonReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "FETCH_EPISODES":
      return {
        ...state,
        episodes: action.payload,
      };
    case "ADD_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite !== action.payload
        ),
      };

    default:
      return state;
  }
};

const SeasonProvider = ({ children }: JSX.ElementChildrenAttribute) => {
  const [state, dispatch] = useReducer(seasonReducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};

export default SeasonProvider;
