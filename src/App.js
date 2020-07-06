import React from 'react';
import TextField from './components/TextField'
import Grid from './components/Grid'


import './App.scss';

function App() {
  return (
    <div className="app-container">
      <div className="app-textfield">
        <TextField />
      </div>
      <div className="app-grid-container">
        <Grid />
      </div>
    </div>
  );
}

export default App;
