import { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGithubCommits } from "../store/commitHistorySlice";
import { AppDispatch } from "../store/store";
import { CommitHistory } from "../interfaces/github.interfaces";
import { RootStoreState } from "../interfaces/store.interfaces";
import CommitEntry from "../components/CommitEntry";
// import SearchBar from "../components/SearchBar";

const Index: FunctionComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, repo } = useSelector((state: RootStoreState) => state.repositorySearch);
  const commitsArray: CommitHistory[] = useSelector((state: RootStoreState) => state.commitHistory.commitHistory);

  useEffect(() => {
    return () => {
      dispatch(fetchGithubCommits(user, repo));
      console.log('log');
    } 
  }, [user, repo, dispatch])
  
  return (
    <div className="w-screen h-screen p-10 flex flex-col gap-2 items-center">
      <h1 className="text-3xl font-bold tracking-normal">FullTimeForce - GitHub Repository Search</h1>
      {/* <SearchBar /> */}
      <>
        { 
          commitsArray && commitsArray.length ? (
            commitsArray.map((commitHistory: CommitHistory) => <CommitEntry key={commitHistory.node_id} commitHistory={commitHistory} />) 
          ) : <p>Nothing was found</p>
        }
      </>
    </div>
  )
}

export default Index;