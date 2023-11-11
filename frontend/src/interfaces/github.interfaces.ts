export interface CommitHistory {
  author: Committer;
  comments_url: string;
  commit: Commit;
  committer: Committer;
  html_url: string;
  node_id: string;
  parents: Parent[];
  sha: string;
  url: string;
}

export interface CommitHistoryProps {
  commitHistory: CommitHistory;
}

export interface Committer {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

export interface Commit {
  author: CommitAuthor;
  comment_count: number;
  committer: CommitAuthor;
  message: string;
  tree: Tree;
  url: string;
  verification: Verification;
}

export interface CommitAuthor {
  date: Date;
  email: string;
  name: string;
}

export interface Tree {
  sha: string;
  url: string;
}

export interface Verification {
  payload: null | string;
  reason: string;
  signature: null | string;
  verified: boolean;
}

export interface Parent {
  html_url: string;
  sha: string;
  url: string;
}
