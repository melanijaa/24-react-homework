import { useState } from "react";

function Cats() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    return (
    <form>
        <label>Cats name</label>
        <input type='text' required value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <label>Cats weight</label>
        <input type='text' required value={body} onChange={(e) => setBody(e.target.value)}></input>
        <button>Submit</button>
        <p>{title}</p>
        <p>{body}</p>
    </form>
    );
}

export default Cats;