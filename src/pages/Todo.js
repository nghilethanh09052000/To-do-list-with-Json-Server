import {useNavigate} from 'react-router-dom'
const Todo = ({todo}) => {
    const navigate = useNavigate();
    const handleUpdate = () =>{
        if(todo.id){
            todo.status = 'Done';
        }
        fetch('http://localhost:8000/todos/'+todo.id,{
            method:'put',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(todo)
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
                { todo.status ==="Doing" &&
                <button onClick={handleUpdate} className="complete-btn">
                    <i className="fas fa-book"></i>
                </button>
                }
                <button onClick={handleDelete} className="trash-btn">
                    <i className="fas fa-trash"></i>
                </button>
            </div>
      
        </div>
     );
}
 
export default Todo;