import { useState } from "react";

function Cats() {


    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const catList = {title, body};

        setIsPending(true);

        fetch('http://localhost:3000/', {
            method: 'POST',
            headers: {'Content-Type': 'aplication.json'},
            body: JSON.stringify(catList)
        }).then(() => {
            console.log('new cat added')
            setIsPending(false);
        })
    }

    return (
    <form onSubmit={handleSubmit}>
        <label>Cats name</label>
        <input type='text' required value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <label>Cats weight</label>
        <input type='text' required value={body} onChange={(e) => setBody(e.target.value)}></input>
        { !isPending && <button>Submit</button> }
        { isPending && <button disabled>Submitting...</button> }
        <p>{title}</p>
        <p>{body}</p>

    </form>
    );
}


export default Cats;