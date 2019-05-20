import React from 'react';
import './App.css';
import User from './Components/User'
import FavoriteNumber from './Components/FavoriteNumber'
import UpdateUser from './Components/UpdateUser'
import UpdateNumber from './Components/UpdateNumber'

function App() {
  return (
    <div>
      <User />
      <UpdateUser />
      <FavoriteNumber />
      <UpdateNumber />
    </div>
  );
}

export default App;
