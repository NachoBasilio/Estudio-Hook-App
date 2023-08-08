import { useRef } from "react";

export default function FocusScreen() {

    const inputRef = useRef()

    const handleClick = () => {
        document.querySelector('input').select();
    }


  return (
    <>
        <h1>Focus Screen</h1>
        <hr />


        <input
            ref={inputRef}
            type="text"
            placeholder="Ingrese su nombre"
            className="form-control"
        />

        <button
            className="btn btn-outline-primary mt-5"
            onClick={handleClick}
        >
            Focus
        </button>
    </>
  )
}
