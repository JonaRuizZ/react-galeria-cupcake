const Header = () => {
    return(
        <header className="main-header">
        <div className="ed-grid s-grid-5 lg-grid-4">
            <div className="s-cols-4 lg-cols-1 s-cross-center">
                <a href="/">
                    <img className="main-logo" src="https://cdn-icons-png.flaticon.com/512/3654/3654864.png" alt="Logo cupcake" />
                </a>
            </div>
            <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
                <nav className="main-menu" id="main-menu">
                    <ul>
                        <li>
                            <a href="/home">Inicio</a>
                        </li>
                        <li>
                            <a href="/cupcakes">Cupcakes</a>
                        </li>
                        <li>
                            <a href="/nosotros">Nosotros</a>
                        </li>
                    </ul>
                </nav>
                <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
            </div>
        </div>
        </header>
    )
}

export default Header;