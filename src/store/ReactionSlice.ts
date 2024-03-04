import { RootState } from './store';
import { PayloadAction, createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { IPost } from "../components/BlogList";
import { postsAPI } from '../postApi';

export interface IReactions {
	likes: number,
	dislikes: number
}

export interface IReactionsState {
	[id: number]: {
		post: IPost,
		reactions: IReactions
	}
}

interface ReactionPayload {
	reaction: 'likes' | 'dislikes'; 
	id: number;
  }
const initialState: IReactionsState = {};

export const fetchingAllPosts = createAsyncThunk<IPost[], undefined, { state: RootState }>(
	'posts/fetchingPosts',
	async () => {
		return await postsAPI.fetchAll();
	},
	{
		condition: (_, { getState }) => {
		const state = getState();
		return Object.keys(state.reactions).length === 0;
		}
	}
  );
export const fetchingSearchedPosts = createAsyncThunk<IPost[], string, { state: RootState }>(
	'posts/fetchingPostsByTitle',
	async (title) => {
		return await postsAPI.searchByTitle(title);
	}
  );

export const ReactionSlice = createSlice({
	name: 'getReactions',
	initialState,
	extraReducers: (builder) => {
		builder
		.addCase(fetchingAllPosts.fulfilled, (state, {payload}: PayloadAction<IPost[]>) => {
			payload.forEach(post => {
				state[post.id] = {
					post,
					reactions: {
						'likes': Math.floor(Math.random() * 50),
						'dislikes': Math.floor(Math.random() * 50)
					}
				}	
			})
		})
		.addCase(fetchingSearchedPosts.fulfilled, (state, {payload}: PayloadAction<IPost[]>) => {
			state = {};
			const searchedPosts = payload.map(post => {
				state[post.id] = {
					post,
					reactions: {
						'likes': Math.floor(Math.random() * 50),
						'dislikes': Math.floor(Math.random() * 50)
					}
				}	
			});
		})
	},
	reducers: {
		addReaction(state, {payload}: PayloadAction<ReactionPayload>) {
			const { id, reaction } = payload;
			if (state[id] && state[id].reactions[reaction] !== undefined) {
				state[id].reactions[reaction] += 1;
			}
		}
	}

});

export const reactionReducer = ReactionSlice.reducer;
export const {addReaction } = ReactionSlice.actions;

export const allPosts = (state: RootState) => state.reactions;
const postId = (state: RootState, postId: number): number => postId;

export const reactionsByPostId = createSelector(
	[allPosts, postId], (allPosts, id) => {
		return allPosts[id]?.reactions;
	}
)



