import { useState } from "react"
import Message from "./Message"


export default function FormWithCustomHook() {
    const [formState, setFormState] = useState({
        userName: '',
        email: '',
        password: ''
    })
    const { userName, email, password } = formState

    const hanglerInputChange = function (e){
        e.preventDefault()
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }



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

            {
                (userName === 'NachoB') && <Message></Message>
            }
        </>
    )
}
