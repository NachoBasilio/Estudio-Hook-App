import { useEffect, useState } from "react"
import Message from "./Message"


export default function SimpleForm() {
    const [formState, setFormState] = useState({
        userName: 'Nacho',
        email: 'nacho@mail.com'
    })
    const { userName, email } = formState

    const hanglerInputChange = function (e){
        e.preventDefault()
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    useEffect(function (){
        console.log('hey')
    },[])

    return (
        <>
            <h1>Formulario simple</h1>
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

            {
                (userName === 'NachoB') && <Message></Message>
            }
        </>
  )
}
