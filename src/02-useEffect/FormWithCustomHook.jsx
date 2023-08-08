
import useForm from "../hooks/useForm"



export default function FormWithCustomHook() {

    const initialState = {
        userName: '',
        email: '',
        password: ''
    }
    const {hanglerResetForm, hanglerInputChange, userName, email, password} = useForm(initialState)

    

    return (
        <>
            <h1>Formulario con Hook</h1>
            <hr/>

            <input 
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="userName"
                value={
                    userName
                }
                onChange={ hanglerInputChange }
            />
            <input 
                type="email"
                className="form-control mt-2"
                placeholder="Correo"
                name="email"
                value={
                    email
                }
                onChange={ hanglerInputChange }
            />

            <input 
            type="password" 
            name="password" 
            placeholder="Contraseña" 
            className="form-control mt-2"
            value={ password }
            onChange={ hanglerInputChange }
            />

            <button className="btn-primary mt-2" onClick={hanglerResetForm}>Reset</button>

        </>
    )
}
