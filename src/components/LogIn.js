import "./LogIn.css";

export default function LogIn(props) {
    return (
        <div className="d-flex flex-column form-width">
            <label htmlFor="name" className="mt-3">Nombre</label>
            <input type="text" id="name"/>

            <label htmlFor="pass" className="mt-3">Contraseña</label>
            <input type="password" id="pass"/>
            <button className="btn btn-info text-white mt-3"
            onClick={props.onLogIn}>
                Iniciar
            </button>
        </div>
    )
}
