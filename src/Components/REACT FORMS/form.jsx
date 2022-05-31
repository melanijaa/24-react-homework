import { useState } from 'react';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Form() {

    const [kv, setKv] = useState([]);
    const [numberInput, setnumberInput] = useState([]);

    const add = () => {
        for (let i = 0; i < numberInput; i++) {
            setKv(k => [...k, (rand(100, 200))])
        }
    }

    const inputKiek = (e) => {
        setnumberInput(e.target.value);
    }

    return (
    <form>
        <label>REACT FORM</label>
        <input type='number' onChange={inputKiek} value={numberInput} required></input>
        <button onClick={add}>ADD</button>
        <div className='kvc'>
            {
            kv.map((k, i) => <div key={i} className="kv">{k}</div>)
            }
         </div>
    </form>
    );
}

export default Form;