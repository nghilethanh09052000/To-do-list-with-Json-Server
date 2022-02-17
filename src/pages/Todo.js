import {useNavigate } from 'react-router-dom'

const Todo = ({todo}) => {
    const navigate = useNavigate();

    const handleUpdate = () =>{
        fetch('http://localhost:8000/todos/'+todo.id,{
            method:'put'
        })
        .then(()=>{
            navigate('/success')
        })
        }


    const handleDelete = () =>{
        fetch('http://localhost:8000/todos/'+todo.id,{
                method:'delete'
            })
            .then(()=>{
                navigate('/success')
            })
        }
    return ( 
     <div className="todoList">
           <div className="todo">
                <li>{todo.todo}</li>
                <button onClick={handleUpdate} className="complete-btn">
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