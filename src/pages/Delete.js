import {useNavigate} from 'react-router-dom'
import { useRef ,createRef , useEffect} from 'react'
const Delete = () => {
    const navigate = useNavigate()
    const buttonClick = useRef()

    useEffect(()=>{
        setTimeout(()=>{
            buttonClick.current.click()
            navigate('/')
        },500)
    })
    const handleDelete = () =>{
        navigate('/')
    }
    return ( 
        <div className='Delete'>
            <button 
                ref={buttonClick}
                onClick={handleDelete}
            >
                Delete Successfully
            </button>
        </div>
    );
}
 
export default Delete;