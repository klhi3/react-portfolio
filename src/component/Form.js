import React, {useState} from 'react';

const Form = ({addTodo}) =>{
    const [input, setInput] = useState('');

    const handleAdd = () =>{
        addTodo(input);
        setInput('');
    }

    return (
        <>
            <input 
                value={input}
                type="text" 
                placeholder="Add Todo"   
                onChange={(event) => setInput(event.target.value)} 
            />
            <button onClick={handleAdd}> Add</button>
            <hr></hr>
        </>
    )
}

export default Form