import React from 'react';
import './App.css';
import HobbiesList from './HobbiesList';
import AddHobby from './AddHobby';
import HobbyContextProvider from './Contexts/HobbyContext';


function App() {
  return (
    <div className="App">
      {/* useReducer demo */}
      <HobbyContextProvider>
        <AddHobby />
        <HobbiesList />
      </HobbyContextProvider>
    </div>
  );
}

export default App;
