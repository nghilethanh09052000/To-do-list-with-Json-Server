import { useEffect , useState} from "react";
import Todo from "../pages/Todo";
// import useFetch from "../api/fetch";
const Home = () => {
    const [todos , setTodos] = useState(null)
    useEffect(()=>{
        fetch('http://localhost:8000/todos')
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            console.log(data)
            setTodos(data)
        })
    },[])
    return ( 
        <div className="Home">
          {console.log('nghi1')}
            <h1>Your To Do List</h1>
            {todos && <Todo todos={todos}/>}
        </div>
     );
}
 
export default Home;