import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl text-[red] font-bold underline">
      Hello world!
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </h1>
    </div>
  );
}

export default App;
