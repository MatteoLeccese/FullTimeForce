// utils
import { dateUTCToFormattedDate } from "../utils";
import { CommitHistoryProps } from "../interfaces/github.interfaces";
import { FunctionComponent } from "react";

const CommitEntry: FunctionComponent<CommitHistoryProps> = ({commitHistory}) => {
  return (
    <div className="md:w-full lg:w-4/6 flex border-t-2 p-5">
      <div className="w-1/3 flex flex-col justify-center items-center gap-2">
        <img className="h-auto lg:w-2/5 sm:w-3/4" src={commitHistory.author.avatar_url} alt="GitHub Avatar"/>
        <p className="text-center">{dateUTCToFormattedDate(String(commitHistory.commit.committer.date))}</p>
      </div>
      <div className="w-2/3 flex flex-col align-middle justify-start px-3">
        <p className="text-2xl my-3">Name: {commitHistory.commit.author.name}</p>
        <p className="text-large">Commit description:</p>
        <p className="text-large">{commitHistory.commit.message}</p>
        <a className="flex w-max gap-2 mt-6 bg-transparent hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          href={commitHistory.html_url} target="_blank"
        >
          See on GitHub
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default CommitEntry;