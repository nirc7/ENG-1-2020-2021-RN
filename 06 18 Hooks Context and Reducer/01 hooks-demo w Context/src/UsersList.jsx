import React, { useState, useEffect } from 'react'
import uuid from 'uuid/v4';

export default function UsersList() {
  console.log('begin function');

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [counter, setCounter] = useState(0);

  //runs when users changed - also the first assignment to []
  //dont need to write this twice - in add user and in delete user!
  useEffect(() => {
    console.log('useEffect users changed! update the db...', users);
    console.log('user.length...', users.length);
    setCounter(users.length);
  }, [users]);

  //componentDidMount - runs once after the first render
  useEffect(() => {
    console.log('useEffect fetch data');

    setIsLoading(true); //REMEMBER THIS WILL DO SETSTATE!!! SO WILL RUN THIS FUNCTIONAL COMPONENT!!!
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        // let first3Users = json.filter(user => user.id <= 3);
        // console.log(first3Users);
        // setIsLoading(false); //REMEMBER THIS WILL DO SETSTATE!!! SO WILL RUN THIS FUNCTIONAL COMPONENT!!!
        // setUsers(first3Users); //REMEMBER THIS WILL DO SETSTATE!!! SO WILL RUN THIS FUNCTIONAL COMPONENT!!!

        //OPT2 - WITH TIMER
        setTimeout(() => {
          let first3Users = json.filter(user => user.id <= 3);
          //console.log(first3Users);
          setIsLoading(false);
          setUsers(first3Users);
        }, 1000);
      })

    return function cleanUp() { //componentWillUnmount 
      console.log('cleaning up...');
    };
  }, []);

  const addRandomUser = () => {
    let id = uuid();
    console.log(id);
    let name = 'avi' + id[0];
    setUsers([...users, { id, name, userName: name + ' cohen' }]);
  }

  const delFirstUser = () => {
    let newUsers = users.splice(1);
    setUsers(newUsers);
  }



  let listOutput = <div className="smallDiv">loading...</div>;
  if (!isLoading && users.length > 0) {
    listOutput = (
      <ul>
        {users.map((user) => {
          return <li key={user.id}> {user.name}</li>
        })}
      </ul>);
  }

  console.log('before return');
  return (
    <div>

      {listOutput}
      counter={counter}
      <button className="smallbtn" onClick={addRandomUser}>add random user</button>
      <button className="smallbtn" onClick={delFirstUser}>delete first user</button>
    </div>
  )
}
