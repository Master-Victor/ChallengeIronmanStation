import '../CSS/Menu.css'
import { Link, useLocation } from 'react-router-dom';


const Menu = () => {

    let location = useLocation();
    
    return (
        <div className="wrapper">
            <div id="mySidenav" className="sidenav">
                <Link to='/' style={ location.pathname === '/' ? { color: 'green' } : {} }  > Ironman Station </Link>
                <Link to='/new' style={ location.pathname === '/new' ? { color: 'green' } : {} } >Nueva Evaluacion</Link>
                <Link to='/list' style={ location.pathname === '/list' ? { color: 'green' } : {} } >Lista de Evaluaciones</Link>
            </div>
        </div>
    )
}

export default Menu
