import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reactionReducer } from "./ReactionSlice";
import { searchReducer } from "./SearchSlice";

const reducer = combineReducers({
	reactions: reactionReducer,
	search: searchReducer
})

export const store = configureStore({reducer});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
