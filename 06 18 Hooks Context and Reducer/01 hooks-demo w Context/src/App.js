import React from 'react';
import './App.css';
import Calculator from './Calculator';
import UsersList from './UsersList';
import HobbiesList from './HobbiesList';
import AddHobby from './AddHobby';
import HobbyContextProvider from './Contexts/HobbyContext';


function App() {
  return (
    <div className="App">
      {/* useState demo */}
      {/* <Calculator/>   */}

      {/* useEffect demo */}
      {/* <UsersList/>  */}

      {/* useContext demo */}
      <HobbyContextProvider>
        <AddHobby />
        <HobbiesList />
      </HobbyContextProvider>
    </div>
  );
}

export default App;
