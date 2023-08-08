import { useState } from "react";

export default function useCounter(valorInicial = 0) {
    const [contador, setContador] = useState(valorInicial)

    function incremento(cantidad = 1){
        setContador(contador + cantidad)
    }

    function decremento(cantidad = 1){
        setContador(contador - cantidad)
    }

    function reset(){
        setContador(valorInicial)
    }

    return{
        contador,
        incremento,
        decremento,
        reset
    }
}