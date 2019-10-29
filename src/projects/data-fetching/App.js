import React from 'react';
import './App.css';
import UserTableAutonomous from './UserTableAutonomous';
// import UserTableHOC from './components/UserTableHOC';

function App() {
  return (
    <div className='App'>
      <h2> User Table — Autonomous</h2>
      <UserTableAutonomous />
      {/* <h2> User Table — High Order Component</h2>
      <UserTableHOC /> */}
    </div>
  );
}
export default App;