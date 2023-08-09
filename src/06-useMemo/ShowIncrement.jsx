import PropTypes from 'prop-types';
import React from 'react';

export const ShowIncrement = React.memo(({incrementar}) => {

    console.log("ShowIncrement se renderiza");

  return (
    <>
        <button
        className="btn btn-primary"
        onClick={
            () => {
                incrementar(5);
            }
        }
        >
            Incrementar
        </button>
    </>
  )
})

ShowIncrement.propTypes = {
    incrementar: PropTypes.func.isRequired
}

