import '../CSS/Menu.css'
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="wrapper">
            <div id="mySidenav" className="sidenav">
            <Link to='/' > Ironman Station </Link>
                <Link to='/new' >Nueva Evaluacion</Link>
                <Link to='/list' >Lista de Evaluaciones</Link>
            </div>
        </div>
    )
}

export default Menu
