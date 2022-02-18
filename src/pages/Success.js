import {useNavigate} from 'react-router-dom'
import { useRef , useEffect} from 'react'
const Success = () => {
    const navigate = useNavigate()

    useEffect(()=>{
        setTimeout(()=>{
            navigate('/')
        },500)
    },[])

    return ( 
        
        <div className='Delete'>
        {console.log('nghi')}
            <h1>Successfully</h1>
        </div>
    );
}
 
export default Success;