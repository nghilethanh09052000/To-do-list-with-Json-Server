import { useEffect , useState} from "react";
import Todo from "../pages/Todo";
// import useFetch from "../api/fetch";
const Home = () => {
    const [todos , setTodos] = useState(null)
    useEffect( () =>{
        fetch('http://localhost:8000/todos')
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            setTodos(data.filter((item)=> item.status ==='Doing' ))
        })
    },[])
    return ( 
        <div className="Home">
            <h1>Your To Do List</h1>
            <select name="" id="">
                <option value="">Doing</option>
                <option value="">Done</option>
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