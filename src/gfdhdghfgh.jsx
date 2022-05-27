import { useState } from 'react';
import './App.css';
import randColor from './Functions/randColor';
//import rand from './Functions/rand';

function App() {

    const [spalva, setSpalva] = useState('yellow');
    const [skaicius, setSkaicius] = useState(1);
    const [kv, setKv] = useState([]);

    const beArgumentu = () => {
        console.log('beArgumentu');
    }

    const suArgumentu = ka => {
        console.log('suArgumentu: ' + ka);
    }

    const keistiSpalva = () => {
        setSpalva(senojiSpalva => senojiSpalva === 'yellow' ? 'pink' : 'yellow');
    }

    const addKv = () => {
        setKv(k => [...k, randColor()]);
    }

    const remKv = () => {
        setKv(k => k.slice(1));
    }

    const skaiciuotuvas = ka => setSkaicius(s => s + ka);
    return (
        <div className="App">
            <header className="App-header">
                <h1 style={{color: spalva}}>State {skaicius}</h1>
                
                <div className="kvc">
                {
                    kv.map((c, i) => <div className="kv" key={i} style={{backgroundColor:c}}>{i}</div>)
                }
                </div>
                <button onClick={beArgumentu}>BE</button>
                <button onClick={() => suArgumentu('labas')}>SU</button>
                <button onClick={keistiSpalva}>Kita spalva</button>
                <button onClick={() => skaiciuotuvas(1)}>+1</button>
                <button onClick={() => skaiciuotuvas(-1)}>-1</button>
                <button onClick={addKv}>ADD []</button>
                <button onClick={remKv}>REMOVE []</button>
            </header>
        </div>
    );
}

export default App;