const TodoListItems = ({todos, deleteTodo}) =>{
  return (
     <>
      <ul>
        {  
            todos.map((todo, index) => {
                return (
                    <li>{todo} <button onClick={() => deleteTodo(index)}>delete</button></li>
                );
             })
        } 
      </ul>
     </>
  )
}

export default TodoListItems;