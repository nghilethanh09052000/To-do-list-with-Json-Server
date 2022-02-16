import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const Create = () => {
    const [inputText , setinputText] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        const todo = {todo: inputText}
        fetch('http://localhost:8000/todos',{
            method:'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(todo)
        })
        .then( ()=>{
            console.log('New todo add')
        })
        navigate('/')
    }
    return ( 
        <div className='Create'>
           <h2>Add a new todo</h2>
           <form onSubmit={handleSubmit}>
               <input
                    onChange={(e) => setinputText(e.target.value)} 
                    placeholder='Add a new todo'
                />
                <button>
                    <i className="fas fa-plus"></i>
                </button>
           </form>
        </div>
       
           
        
     );
}
 
export default Create;