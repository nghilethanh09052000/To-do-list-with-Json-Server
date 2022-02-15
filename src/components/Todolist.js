import { useEffect} from "react";

const Todolist = ({todos, setTodos}) => {
    
    useEffect(()=>{
        fetch('http://localhost:8000/todos')
        .then(res => res.json())
        .then(todos =>{
            setTodos(todos);
        })
    },[])
    
    return ( 
        <div>
            <ul>
                {todos.map( (todo) =>(
                    <li key={todo.id}>{todo.name}</li>
                ))}
            </ul>
           
        </div>
     );
}
 
export default Todolist;