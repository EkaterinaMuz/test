import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
	searchValue: ''
};

const ISearchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearchValue: (state, { payload }: PayloadAction<string>) => {
			state.searchValue = payload
		}
	}
});

export const { setSearchValue } = ISearchSlice.actions;
export const searchReducer = ISearchSlice.reducer;
export const searchValue = (state: RootState) => state.search.searchValue;