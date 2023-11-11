import { useSelector, useDispatch } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RepositorySearchState, RootStoreState } from '../interfaces/store.interfaces';
import { fetchGithubCommits } from '../store/commitHistorySlice';
import { AppDispatch } from '../store/store';

const SearchBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, repo } = useSelector((state: RootStoreState) => state.repositorySearch);

  const { register, handleSubmit } = useForm<RepositorySearchState>({
    defaultValues: {
      user,
      repo,
    },
  })

  const onSubmit: SubmitHandler<RepositorySearchState> = ({user, repo}: RepositorySearchState) => dispatch(fetchGithubCommits(user, repo));

  return (
    <>
      <form className="w-full flex align-middle justify-around"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input className="w-2/5 border-2 border-blue-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="GitHub user here"
          required
          type="text"
          {...register("user", { required: true, maxLength: 20, max: 20 })}
        />
        <input className="w-2/5 border-2 border-blue-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="GitHub repository here"
          required
          type="text"
          {...register("repo", { required: true, maxLength: 20, max: 20 })}
        />
        <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" value="Send" />
      </form>
    </>
  )
}

export default SearchBar