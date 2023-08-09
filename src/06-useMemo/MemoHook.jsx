import { useMemo, useState } from 'react';
import useCounter from '../hooks/useCounter';

const heavyStuff = (iteraciones = 100) => {
    for(let i = 0; i < iteraciones; i++){
        console.log('Ahí vamos...');
    }
    return `${iteraciones} iteraciones realizadas`;
}


export default function MemoHook() {
    const { contador, incremento } = useCounter(4000);
    const [show, setShow] = useState(true);

    const memorizadValue = useMemo(() => heavyStuff(contador), [contador])
    
  return (
    <>
        <h1>
            Counter: <small>
                {contador}
            </small>
        </h1>
        <hr />
        <h4>
            {memorizadValue}
        </h4>

        <button 
        className="btn btn-primary"
        onClick={
            () => {
                incremento();
            }
        }
        >
            +1
        </button>

        <button
        className="btn btn-outline-primary ml-3"
        onClick={()=>{
            setShow(!show);
        }} 
        >
            Show/Hide {JSON.stringify(show)}
        </button>

    </>
  )
}
