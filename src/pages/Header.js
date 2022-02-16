import {Link} from 'react-router-dom'

const Header = () => {
    return (  
        <header>
            <Link to='/'>
                To Do List
            </Link>
        </header>
    );
}
 
export default Header;