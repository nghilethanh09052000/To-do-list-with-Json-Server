import Todolist from "../components/Todolist";
import useFetch from "../api/fetch";
const Home = () => {
    const {data:todos , isPending , error} = useFetch('http://localhost:8000/todos')
    return ( 
        <div className="Home">
            {todos && 
                <Todolist
                    todos={todos}
                />
            }
        </div>
     );
}
 
export default Home;