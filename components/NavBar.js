import Link from 'next/link';
export default function Navigation (){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">L'ancora Piura</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#cartas">Nuestra Carta</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#reservacion">Reservaciones</a>
                        </li>
                    </ul>
                </div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link href="/carta" className="nav-link"  >
                            Carta
                        </Link>
                    </li>
                    <li>
                        <Link href="/vinos" className="nav-link" style={{ paddingLeft: '25px'}} >
                            Vinos
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}