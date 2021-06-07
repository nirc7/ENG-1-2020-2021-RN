import React, { createContext, useReducer } from 'react'
import { HobbyReducer } from '../Reducers/HobbyReducer';

export const HobbyContext = createContext();

export default function HobbyContextProvider(props) {
  const [hobbies, dispatch] = useReducer(HobbyReducer, [
    { id: '1', name: 'Flight', times: 2, icon: 'Flight' },
    { id: '2', name: 'Guitar', times: 7, icon: 'Music' },
    { id: '3', name: 'RC Model', times: 1, icon: 'Flight' },
    { id: '4', name: 'another item', times: 2, icon: 'Another' },
    { id: '5', name: 'Tennis', times: 3, icon: 'Sport' }
  ]);
  
  return (
    <HobbyContext.Provider value={{ hobbies, dispatch }}>
      {props.children}
    </HobbyContext.Provider>
  )
}
