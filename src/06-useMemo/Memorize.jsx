import { useState } from 'react';
import useCounter from '../hooks/useCounter';
import Small from './Small';

export default function Memorize() {
    const { contador, incremento } = useCounter(10);
    const [show, setShow] = useState(true);
    
  return (
    <>
        <h1>
            Counter: <Small contador={contador}></Small>
        </h1>
        <hr />

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
