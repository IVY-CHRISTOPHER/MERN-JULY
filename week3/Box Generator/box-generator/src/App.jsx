import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  // holding an array of strings for the colors input
  const [ boxColorArray, setBoxColorArray ] = useState([]);

  // Ninja Bonus: Add a second input that takes in an integer. 
  //    This integer will allow the user to specify the height and width of the generated box.
  //    Using an object to hold both the integer and the color together
  const [ BoxArray, setBoxArray ] = useState([])

  return (
    <div className="App">
      <h1>Box Generator</h1>
      <Form boxColorArray={ boxColorArray } setBoxColorArray={ setBoxColorArray } />
      <Display boxColorArray={ boxColorArray } />
      <hr />
      
    </div>
  );
}

export default App;