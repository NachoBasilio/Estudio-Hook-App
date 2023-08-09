import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';

export default function PokemonCard({data}) {

  const imgRef = useRef() 
  const [boxSize, setBoxSize] = useState({with: 0, height: 0});

  useLayoutEffect(() => {
    const {
      width,
      height
    } = imgRef.current.getBoundingClientRect()

    setBoxSize({
      width,
      height
    })
  }, [data])

  return (
    <>
        <div
        style={{
          display: 'flex',
        }}
        className="alert alert-success text-center">
            <p>
              {data.name}</p>
            <p>{data.height}</p>
            <p>{data.weight}</p>
            <img 
            ref={imgRef}
            src={data.sprites.front_default} alt={data.name} />
        </div>

        <code>
          {JSON.stringify(boxSize)}
        </code>
    </>
  )
}


PokemonCard.propTypes = {
    data: PropTypes.object.isRequired
}
