import { CommitHistory } from "./github.interfaces";

export interface CommitHistoryState {
  commitHistory: CommitHistory[];
}

export interface RepositorySearchState {
  user: string;
  repo: string;
}

export interface RootStoreState {
  commitHistory: CommitHistoryState;
  repositorySearch: RepositorySearchState;
}
