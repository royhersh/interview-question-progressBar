import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Tile } from './Component/Tile';


import './App.css';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SingleTile />}/>
      <Route path="/many" element={<ManyTiles />}/>
  
    </Routes>
  </BrowserRouter>
  );
}
function SingleTile() {
  return (
    <div className="App">
        <Tile countDownSeconds={10}/>
    </div>
  );
}
function ManyTiles() {
  const getRandomNumber =() => Math.floor(Math.random() * 39) + 1; // 1 - 40
  const tilesData = Array(1000).fill(10)//.map(() => getRandomNumber());
  return (
    <div className="App" >
      {tilesData.map((seconds) => <Tile countDownSeconds={seconds} />)}
    </div>
  );
}


export default App;
