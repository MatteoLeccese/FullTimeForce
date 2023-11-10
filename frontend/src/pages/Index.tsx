import { FunctionComponent, useEffect, useState } from "react";

// Components
import SearchBar from "../components/SearchBar";
import CommitEntry from "../components/CommitEntry";
import { CommitHistory } from "../interfaces/github.interfaces";

const Index: FunctionComponent = () => {
  const [user, setUser] = useState<string>('MatteoLeccese');
  const [repo, setRepo] = useState<string>('FullTimeForce');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [commitsArray, setCommitsArray] = useState<CommitHistory[]>([]);

  useEffect(() => {
    try {
      fetch(`http://localhost:3000/github?user=${user}&repository=${repo}`)
        .then(response => response.json())
        .then((data: CommitHistory[]) => {
          console.log(data);
          setCommitsArray(data);
        })
        .catch(() => setCommitsArray([]));
    } catch (error) {
      setCommitsArray([]);
    }
    return () => {
      setIsLoading(false);
    }
  }, [user, repo, setCommitsArray])
  
  return (
    <div className="w-screen h-screen p-10 flex flex-col gap-2 items-center">
      <h1 className="text-3xl font-bold tracking-normal">FullTimeForce - GitHub Repository Search</h1>
      {/* <SearchBar user={user} repo={repo}/> */}
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