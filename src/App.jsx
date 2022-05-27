import { useState } from 'react';
import './App.css';
//import rand from './Functions/rand';

const dogs = [
    'šuo',
    'šunius',
    'Bobikas',
    'kudlius',
    'Šarikas',
    'avigalvis'];

dogs.sort(function(a, b) {
    return b.length - a.length
});

function App() {

    const [kv, setKv] = useState(null);
    const [kvv, setKvv] = useState(null);
    const [kvvv, setKvvv] = useState(null);

    const Dogs = () => {
        const kvadratukai = [];
        for (let i = 0; i < dogs.length; i++) {
            kvadratukai.push(dogs[i]);
        }
        setKv(k => null === k ? [...kvadratukai] : [...k, ...kvadratukai]);
    }

    const Doggies = () => {
        const apskritimas = [];
        for (let i = 0; i < dogs.length; i++) {
            apskritimas.push(i + dogs[i]);
        }
        setKvv(k => null === k ? [...apskritimas] : [...k, ...apskritimas]);
    }
const newDoggies = () => {
    const isD = [];
    for(let i =0; i< dogs.length; i++){
        if(dogs[i].toUpperCase() !== dogs[i]){
        isD.push(dogs[i])
    }
    setKvvv(k => null === k ? [...isD] : [...k, ...isD]);
}
}
/*
    const fuff = () => {
        const kvadratas = [];
        const rutulys = [];
        for(let i =0; i< dogs.length; i++){
            if(i % 2 === 0){
                kvadratas.push(dogs[i])
            } setKv(k => null === k ? [...kvadratas] : [...k, ...kvadratas]);

            if (i % 2 !== 0) {
                rutulys.push(dogs[i])
            } setKvv(k => null === k ? [...rutulys] : [...k, ...rutulys]);
 }
}
*/
    return (
        <div className="App">
            <header className="App-header">
                <div className="kvc">
                    {
                        kv ? kv.map((k, i) => <div key={i} className="kv">{k}</div>) : null
                    }
                </div>
                <button onClick={Dogs}>Dogs kvadrate</button>
                <div className="kvcc">
                    {
                        kvv ? kvv.map((k, i) => <div key={i} className="kvv">{k}</div>) : null
                    }
                </div>
                <button onClick={Doggies}>Dogs apskritime</button>
                <div className="kvc">
                    {
                        kvvv ? kvvv.map((k, i) => <div key={i} className="kv">{k}</div>) : null
                    }
                </div>
                <button onClick={newDoggies}>Prasideda didžiąja raide</button>
            </header>
        </div>
    );
}

export default App;