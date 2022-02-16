import {Link} from 'react-router-dom'
import {FcPlus} from 'react-icons/fc'

const Create = () => {
    const style ={fontSize: "2.5em" }
    return ( 
        <div className='Create'>
            <Link to='/create'>
                <FcPlus
                    style={style}
                />
            </Link>
        </div>
       
           
        
     );
}
 
export default Create;