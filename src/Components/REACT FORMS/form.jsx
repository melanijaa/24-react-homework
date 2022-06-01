import { useState, useEffect } from 'react';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Form() {

    const [kv, setKv] = useState([]);
    const [number, setNumber] = useState([]);

    const add = () => {
        let k = [];
        const numberInput = number;
        for (let i = 0; i < numberInput; i++) {
            k = Array.from({length: number});
        }
        setKv(a => a === null ? [...k] : [...a, ...k])
    }

    const inputNumber = (e) => {
        e.preventDefault();
        setNumber(e.target.value);
    }

    const remove = () => {
        setKv([]);
    }

    useEffect(() => {
        setKv(JSON.parse(localStorage.getItem('kv') ?? '[]'));
      }, []);
    
    useEffect(() => {
        if (null === kv) {
            return;
        }
        localStorage.setItem('kv', JSON.stringify(kv));
      }, [kv]);

    return (
    <form>
        <label>REACT FORM</label>
        <input type='number' onChange={inputNumber} value={number} required></input>
        <button onClick={add}>ADD</button>
        <button onClick={remove}>DELETE</button>
        <div className='kvc'>
            {
           kv ? kv.map((a, i) => <div key={i} className="kv">{rand(100, 200)}</div>) : null
            }
         </div>
    </form>
    );
}

export default Form;