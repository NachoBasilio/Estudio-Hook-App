
import { useState, useCallback } from "react";
import {ShowIncrement} from "./ShowIncrement";



export default function CallbackHook() {

    const  [contador, setContador ] = useState(10);
    
    const IncrementarPadre = useCallback(
        (value) => {
            setContador(c => c + value);
        }, 
        []
    )

    



  return (
    <>
        <h1>
            CallbackHook: 
            <small>
                {contador}
            </small>
        </h1>
        <hr />


        <ShowIncrement
        incrementar={IncrementarPadre}
        />

    </>
  )
}
