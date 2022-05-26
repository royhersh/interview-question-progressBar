import React from 'react';
import './App.css';
import { Tile } from './Component/Tile';

function App() {
  return (
    <div className="App">
        <Tile countDownSeconds={30}/>
    </div>
  );
}

export default App;
