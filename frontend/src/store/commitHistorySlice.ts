import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CommitHistory } from "../interfaces/github.interfaces";
import { CommitHistoryState } from "../interfaces/store.interfaces";
import { AppDispatch } from "./store";

const initialState: CommitHistoryState = {
  commitHistory: [],
};

const commitHistorySlice = createSlice({
  name: 'commitHistorySlice',
  initialState,
  reducers: {
    getAllCommitsFromRepo(state, action: PayloadAction<CommitHistory[]>) {
      state.commitHistory = action.payload;
    },
  }
});

export const fetchGithubCommits = (user: string, repo: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/github?user=${user}&repository=${repo}`
      );
      const data = await res.json();
      dispatch(getAllCommitsFromRepo(data));
    } catch (err) {
      dispatch(getAllCommitsFromRepo([]));
    }
  };
};

export const { getAllCommitsFromRepo } = commitHistorySlice.actions;

export default commitHistorySlice;