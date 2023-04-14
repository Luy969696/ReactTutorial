<<<<<<< HEAD
import React,{useRef, useState,useMemo,useCallback} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users){
  console.log("활성 사용자 수를 세는중 . . .");
  return users.filter(user => user.active).length;
}


function App() {
=======
import React, { useRef, useReducer, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}
>>>>>>> eecc3b02187dc84a10de0103728e4ed2b20c2a54

const initialState = {
  inputs: {
    username: '',
    email: ''
  },
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      };
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? { ...user, active: !user.active } : user
        )
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);
<<<<<<< HEAD
  const onCreate = useCallback(() =>{
=======
>>>>>>> eecc3b02187dc84a10de0103728e4ed2b20c2a54

  const { users } = state;
  const { username, email } = state.inputs;

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    });
  }, []);

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    });
    nextId.current += 1;
<<<<<<< HEAD
  }, [users,username,email]);

  const onRemove=useCallback( id =>{
    setUsers(users.filter(user => user.id !== id ));
  }, [users]);

  const onToggle =useCallback( id => {
    setUsers(
      users.map(user =>
          user.id === id ? {...user,active: !user.active} : user
        )
    );
  }, [users]);

  const count = useMemo(()=> countActiveUsers(users),[users]);
=======
  }, [username, email]);

  const onToggle = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    });
  }, []);
>>>>>>> eecc3b02187dc84a10de0103728e4ed2b20c2a54

  const onRemove = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    });
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
<<<<<<< HEAD
  
  <>
  <CreateUser username={username}
              email={email}
              onChange={onChange}
              onCreate={onCreate}
  />
  <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
  <div>활성사용자 수 : {count}</div>
  </>
  )
  // return (
  //   <UserList users={users}/>
  // );
=======
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>활성사용자 수 : {count}</div>
    </>
  );
>>>>>>> eecc3b02187dc84a10de0103728e4ed2b20c2a54
}

export default App;