import {useNavigate} from 'react-router-dom'


const Todo = ({todos}) => {
    const navigate = useNavigate();

    const handleDelete = () =>{
        todos.map((todo)=>(
            fetch('http://localhost:8000/todos/'+todo.id,{
                method:'delete'
            })
            .then(()=>{
                console.log('Delete');
            })
        ))
        navigate('/')
    }
    return ( 
     
        <div className="todoList">
           {console.log('nghi')}
            <ul>
                {todos.map( (todo) =>(
                    <div className="todo" key={todo.id}>
                        <li>{todo.todo}</li>
                        <button className="complete-btn">
                            <i className="fas fa-book"></i>
                        </button>
                        <button onClick={handleDelete} className="trash-btn">
                            <i className="fas fa-trash"></i>
                        </button>
                    </div>
                ))}
            </ul>
        </div>
     );
}
 
export default Todo;