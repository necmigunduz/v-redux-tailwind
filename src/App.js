import React from 'react';
import { useUsersQuery } from './api';
import './App.css';

function App() {
  const {data,error,isLoading,isFetching,isSuccess} = useUsersQuery();
  console.log(data)
  return (
    <div className="App">
      <h1>RTK Query</h1>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>Fetching the data</h2>}
      {error && <h2>Error occurred at fetching the data</h2>}
      {isSuccess && 
        <ul>
          {data.map(user => <li>{user.name} {user.email}</li>)}
        </ul>
      }
    </div>
  );
}

export default App;
