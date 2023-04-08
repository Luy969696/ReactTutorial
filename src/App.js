import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import './App.css'
import Counter from './Counter';

function App() {
  const name = "UkYong";
  const style={
    backgroundColor : 'black',
    color : 'red',
    fontSize : 20
  };
  return (
    <>
      <Counter></Counter>
    </>
  );
}

export default App;
