function NavBar(){
    return(
        <nav class="navbar bg-warning">
            <div class="container-fluid">
                <a class="navbar-brand">
                <img src="../logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
                TuCryptoMedia</a>
                <form class="d-flex align-items-center" role="search">
                <input class="form-control me-2" type="search" placeholder="Busca tu crytpo media" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Buscar</button>
                </form>
            </div>
        </nav>
    )
} 

export default NavBar