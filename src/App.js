import React from 'react';
import { usePostsQuery } from './api';
import './App.css';

function App() {
  const {data,error,isLoading,isFetching,isSuccess} = usePostsQuery();
  console.log(data)
  return (
    <div>
      <h1 className="w-48 text-center text-lg font-medium text-gray-900 rounded-lg border py-6 bg-sky-500 text-white">RTK Query</h1>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>Fetching the data</h2>}
      {error && <h2>Error occurred at fetching the data</h2>}
      {isSuccess && 
        <ul>
          {data.map(post => <li className="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600" key={post.id}><h3>{post.title}</h3><br/><p>{post.body}</p></li>)}
        </ul>
      }
    </div>
  );
}

export default App;
