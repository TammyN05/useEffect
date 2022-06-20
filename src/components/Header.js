

export default function Header(props) {
    return (
        <div className="container-fluid bg-info py-4">
        <header className="container">
            <h1>Practicando useEffect</h1>

            {props.isLogged && 
            <button className="btn btn-dark"
            onClick={props.onLogOut}
            >Cerrar sesión</button>}

        </header>
        </div>
    )
}
