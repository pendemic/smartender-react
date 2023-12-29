import background from "./smartender-home.png";
import './App.css';
import React, {useState} from 'react';
import Home from './components/Home';
import Popular from './components/Popular';
function App() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);
  return (
    <>
      <Home/>
      <Popular/>
    </>
  );
}

export default App;
