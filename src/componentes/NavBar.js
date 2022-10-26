const NavBar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-danger bg-opacity-75">
            <div className="container-fluid">
                <a className="navbar-brand fs-1 text-white" href="1"><em>Dulce-Shop</em></a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a className="nav-link fs-5 text-white fst-italic" href="3">Tortas-Tartas</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link fs-5 text-white fst-italic" href="3">Bocados</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link fs-5 text-white fst-italic" href="4">Mesa Dulce-Desayunos</a>
                        </li>
                    </ul>
                </div>
            </div>   
        </nav>
        </>
    )
}

export default NavBar;