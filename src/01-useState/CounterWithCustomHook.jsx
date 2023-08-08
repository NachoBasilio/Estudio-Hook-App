import useCounter from "../hooks/useCounter"

export default function CounterWithCustomHook() {
    const {
        contador,
        incremento,
        decremento,
        reset
    } = useCounter()

  return (
    <>
        <h1>Counter with Hook: {contador}</h1>
        <hr />

        <button onClick={
            () => incremento(1)
        } className="btn btn-primary">+1</button>
        <button onClick={
            () => reset(1)
        } className="btn btn-primary">Reset</button>
        <button onClick={
            () => decremento(1)
        }
        className="btn btn-primary">-1</button>
    </>
  )
}
