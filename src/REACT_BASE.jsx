import './App.css';
import Zuikis from './Components/REACT_BASE/Zuikis';
import Propsas from './Components/REACT_BASE/Propsas';
import { useState } from 'react';
import Milk from './Components/REACT_BASE/Milk';
import Cookies from './Components/REACT_BASE/Cookies';
import RandText from './Components/REACT_BASE/RandText';

function App() {

const [spalva, setSpalva] = useState('white');
const keistiSpalva = () => {
    setSpalva(senojiSpalva => senojiSpalva === 'purple' ? 'green' : 'purple');
}
const red = () => {
    setSpalva('red');
}
const blue = () => {
  setSpalva('blue');
}
  
  return (
    <div className="App">
      <header className="App-header">
      <h1 style={{color: spalva}}>Lorem ipsum dolor sit amet consectetur adipisicing elit?</h1>
      <Zuikis spalva = 'pink'></Zuikis>
      <Propsas text = 'green'></Propsas>
      <button onClick={keistiSpalva}>Kita spalva</button>
      <button onClick={red}>Red</button>
      <button onClick={blue}>Blue</button>
      <Milk spalva = "white"></Milk>
      <Cookies spalva = 'yellow'></Cookies>
      <RandText spalva = 'green'></RandText>
      </header>
    </div>
  );
}

export default App;
