import {useNavigate } from 'react-router-dom'
import { useEffect} from "react";

const Todo = ({todo}) => {
    const navigate = useNavigate();

    const handleDelete = () =>{
        fetch('http://localhost:8000/todos/'+todo.id,{
                method:'delete'
            })
            .then(()=>{
                navigate('/delete')
            })
        }
    return ( 
     <div className="todoList">
           <div className="todo">
                <li>{todo.todo}</li>
                <button className="complete-btn">
                    <i className="fas fa-book"></i>
                </button>
                <button onClick={handleDelete} className="trash-btn">
                    <i className="fas fa-trash"></i>
                </button>
            </div>
      
        </div>
     );
}
 
export default Todo;