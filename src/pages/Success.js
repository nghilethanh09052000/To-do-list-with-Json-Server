import {useNavigate} from 'react-router-dom'
import { useRef , useEffect} from 'react'
const Success = () => {
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
                Successfully
            </button>
        </div>
    );
}
 
export default Success;