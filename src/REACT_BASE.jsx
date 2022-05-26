import './App.css';
import Zuikis from './Components/REACT_BASE/Zuikis';
import Propsas from './Components/REACT_BASE/Propsas';
import ZebraiIrBebrai from './Components/REACT_BASE/ZebraiIrBebrai';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Zuikis spalva = 'pink'></Zuikis>
      <Propsas text = 'green'></Propsas>
      <ZebraiIrBebrai></ZebraiIrBebrai>
      <button onClick={() => this.setState({ color: "blue" })}>Blue</button>
      <button onClick={() => this.setState({ color: "red" })}>Red</button>
      </header>
    </div>
  );
}

export default App;
