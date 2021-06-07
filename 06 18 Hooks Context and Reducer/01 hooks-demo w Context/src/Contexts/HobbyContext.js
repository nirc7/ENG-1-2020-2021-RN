import React, { useState, createContext } from 'react'
import uuid from 'uuid';

export const HobbyContext = createContext();

export default function HobbyContextProvider(props) {
  const [hobbies, setHobbies] = useState([
    { id: '1', name: 'Flight', times: 2, icon: 'Flight' },
    { id: '2', name: 'Guitar', times: 7, icon: 'Music' },
    { id: '3', name: 'RC Model', times: 1, icon: 'Flight' },
    { id: '4', name: 'another item', times: 2, icon: 'Another' },
    { id: '5', name: 'Tennis', times: 3, icon: 'Sport' }
  ]);

  const AddHobby = (name, times) => {
    let newItem = {
      id: uuid(), name, times, 
      icon: ['Flight', 'Music', 'Another', 'Sport'][Math.floor(Math.random() * 4)]
    };
    setHobbies([...hobbies, newItem]);
  }

  const RemoveHobby = (id) => {
    setHobbies(hobbies.filter(hob => hob.id !== id));
  }
  
  return (
    <HobbyContext.Provider value={{ hobbies, AddHobby, RemoveHobby }}>
      {props.children}
    </HobbyContext.Provider>
  )
}
