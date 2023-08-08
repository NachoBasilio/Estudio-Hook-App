
import useFetch from "../hooks/useFetch"
import useCounter from "../hooks/useCounter"
import Loanding from "./Loanding"
import PokemonCard from "./PokemonCard"

export default function MultiplesCustomHooks() {
    const {contador, incremento, decremento, reset} = useCounter(1)

    const {data, loading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${contador}`)

  

    return (
        <>
            <h1>Pokemon Names</h1>
            <hr />
            {
                loading ?
                    (
                        <Loanding/>
                    )
                    :
                    (
                        <PokemonCard 
                        data = {data}
                        />
                    )
            }

            <button className="btn btn-primary" 
                disabled={loading}
                onClick={
                    () => incremento()
                }
            >Otro pokemon</button>
            <button className="btn btn-primary" 
                onClick={
                    () => reset()
                }
            >Reset</button> 
            {
                contador > 1 &&
                <button className="btn btn-primary" 
                    onClick={
                        () => decremento()
                    }
                >Anterior pokemon</button>
            }

        </>
    )
}
