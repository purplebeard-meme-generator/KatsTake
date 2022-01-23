import './App.css';
import React from 'react';
import Header from './components/Header';
import MemeGenerator from './components/MemeGenerator';
import Draggable from "react-draggable";


function App() {
  return (
    <div style={{WebkitAlignContent: 'center'}} >
      <Header/>
      <MemeGenerator/>
    </div>
  );

}

export default App;
