
import CartWidget from "../CartWidget/CartWidget";
import {Link} from 'react-router-dom' 

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-warning">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">
                    <a style={{ fontSize: '25px' }}  className="navbar-brand">
                        <img style={{ margin: '0px 10px' }} src="../.././logo2.png" alt="" width="250" height="35" className="d-inline-block align-text-top" /><img />
                    </a>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-left mx-5" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to='/' className="nav-link">INICIO </Link>
                        <Link to='/category/Remeras' className="nav-link">REMERAS</Link>
                        <Link to='/category/Medias' className="nav-link">MEDIAS </Link>
                        <Link to='/category/Buzos' className="nav-link">BUZOS </Link>
                        <Link to='/Contacto' className="nav-link">CONTACTO </Link>
                    </div>
                </div>
                <Link to='/Carrito'><CartWidget></CartWidget></Link>
            </div>
        </nav>
    )
}

export default NavBar