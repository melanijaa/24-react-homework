import { useEffect, useRef, useState } from 'react';
import './App.css';
import rand from './Functions/rand';

const cats = [
    'Mulkis',
    'Kakius',
    'Pilkius',
    'Balčius'
];

const dogs = [
    'Sniego',
    'Dingo',
    'Atsirado',
    'Pifas',
    'Bobikas'
];

function App() {

    const [kv, setKv] = useState(null);
    const istorija = useRef([]);

    const [katinai, setKatinai] = useState([]);

    // PIRMAS KROVIMAS
    useEffect(() => {
        setKv(JSON.parse(localStorage.getItem('kv'))); // gali buti null arba []
    }, []);

    // UZSAUGOS POKYCIUS
    useEffect(() => {
        if (null === kv) {
            return;
        }
        localStorage.setItem('kv', JSON.stringify(kv));
        istorija.current.unshift(kv);
    }, [kv]);

    const prideti = () => {
        const kiekis = rand(5, 10);
        const kvadratukai = [];
        for (let i = 0; i < kiekis; i++) {
            kvadratukai.push('^o^');
        }
        setKv(k => null === k ? [...kvadratukai] : [...k, ...kvadratukai]);
    }

    const isvalyti = () => {
        setKv([]);
    }

    const atgal = () => {
        let senas = istorija.current.shift();
        if (!senas) {
            setKv([]);
        } else if (senas.length === kv.length) {
            senas = istorija.current.shift();
            if (!senas) {
                setKv([]);
            } else {
                setKv(senas);
            }
        }
        else {
            setKv(senas);
        }
    }

    const addCats = () => {
        setKatinai(x => [...x, ...cats]);
    }
    const addDogs = () => {
        setKatinai(dogs);
    }
    const clear = () => {
        setKatinai([]);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>PRAKTIMUMAS</h1>
                <div className="kvc">
                    {
                        kv ? kv.map((k, i) => <div key={i} className="kv">{k}</div>) : null
                    }
                </div>

                <button onClick={prideti}>Pridėti</button>
                <button onClick={isvalyti}>Išvalyti</button>
                <button onClick={atgal}>Atgal</button>
                <div className="green-field">

                    {
                        katinai.map((c, i) => <div key={i}>{c}</div>)
                    }

                    <div className="buttons-field">

                        <button onClick={addCats}>Katinukai</button>
                        <button onClick={addDogs}>Šuniai</button>
                        <button className="red" onClick={clear}>Namo visi</button>
                    </div>

                </div>
            </header>
        </div>
    );
}

export default App;