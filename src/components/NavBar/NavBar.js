
import CartWidget from "../CartWidget/CartWidget";

function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg bg-warning">
            <div className="container-fluid">
                <a style={{fontSize: '25px'}} className="navbar-brand">
                <img style={{margin: '0px 10px'}} src="../.././logo.png" alt="" width="35" height="35" className="d-inline-block align-text-top"/><img/>
                 TuCryptoMedia</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <a className="nav-link active" aria-current="page" href="#">OFERTAS!</a>
                        <a className="nav-link" href="#">PROMOCIONES</a>
                        <a className="nav-link" href="#">MI CUENTA</a>
                        <a className="nav-link" href="#">F.A.Q</a>
                    </div>
                </div>
                <form className="d-flex justify-content-center" role="search">
                <input className="form-control me-2" type="search" placeholder="Busca tu crytpo media" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Buscar</button>
                <CartWidget></CartWidget>
                </form>
            </div>
        </nav>
    )
} 

export default NavBar