import {Link} from 'react-router-dom'
import {FcPlus} from 'react-icons/fc'

const Header = () => {
    const style ={fontSize: "1.5em" }
    return (  
        <header>
            <Link to='/'>
                To Do List
            </Link>
            <Link to='/create'>
                <FcPlus
                        style={style}
                />
            </Link>
        </header>
    );
}
 
export default Header;