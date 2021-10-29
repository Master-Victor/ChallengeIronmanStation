import '../CSS/Menu.css'
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="wrapper">
            <div id="mySidenav" className="sidenav">
            <Link to='/' >  <a>Ironman Station </a></Link>
                <Link to='/new' ><a>Nueva Evaluacion</a></Link>
                <Link to='/list' > <a>Lista de Evaluaciones</a></Link>
            </div>
        </div>
    )
}

export default Menu
