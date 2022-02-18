import { useEffect , useState} from "react";
import Todo from "../pages/Todo";

const Home = () => {
    const [todos , setTodos] = useState(null)
    const [status , setStatus] = useState("Doing")
    const handleStatus =(e) =>{
        setStatus(e.target.value)
      }
    useEffect( () =>{
        fetch('http://localhost:8000/todos')
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            setTodos(data.filter( (item)=> item.status === status ))
        })
    },[status])
    return ( 
        <div className="Home">
            <h1>Your To Do List</h1>
            <select name="todos" onChange={handleStatus} >
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
            </select>
            <ul>
            {todos && 
            todos.map((todo)=>(
                <Todo 
                todo={todo}
                key={todo.id}
                />
            ))
            }
            </ul>
           
        </div>
     );
}
 
export default Home;