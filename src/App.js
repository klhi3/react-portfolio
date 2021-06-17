import {React, useState} from 'react';
import Header from './component/Header.js';
import Form from './component/Form.js';
import TodoListItems from './component/TodoListItems.js';

function App(){
   const [todos, setTodos] = useState([]);
   
   const addTodo = (todo) => {setTodos([todo,...todos]);

    // const newList = [...todos];
    // newList.push(todo);
    // setTodos(newList);

    
    console.log(todos);
   }


   const deleteTodo = (index) =>{
     const newList = todos.filter((todo, i) => i !== index) ;
      setTodos(newList);  
   };
    
    return (
        <div  className='container' >
           <Header />
           <Form addTodo={addTodo}/>
           <TodoListItems  todos={todos} deleteTodo={deleteTodo} />
        </div>   
  );
}

export default App;