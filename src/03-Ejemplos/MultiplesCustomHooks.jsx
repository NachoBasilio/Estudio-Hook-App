
import useFetch from "../hooks/useFetch"
import useCounter from "../hooks/useCounter"

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
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                    :
                    (
                        <div className="alert alert-success text-center">
                            <p>{data.name}</p>
                            <p>{data.height}</p>
                            <p>{data.weight}</p>
                            <img src={data.sprites.front_default} alt={data.name} />
                        </div>
                    )
            }

            <button className="btn btn-primary" 
                onClick={
                    () => incremento()
                }
            >Otro pokemon</button>
            <button className="btn btn-primary" 
                onClick={
                    () => decremento()
                }
            >Anterior pokemon</button>
            <button className="btn btn-primary" 
                onClick={
                    () => reset()
                }
            >Reset</button> 
        </>
    )
}
