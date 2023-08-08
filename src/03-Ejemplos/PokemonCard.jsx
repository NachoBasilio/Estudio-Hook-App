import PropTypes from 'prop-types';

export default function PokemonCard({data}) {
  return (
    <>
        <div className="alert alert-success text-center">
            <p>{data.name}</p>
            <p>{data.height}</p>
            <p>{data.weight}</p>
            <img src={data.sprites.front_default} alt={data.name} />
        </div>
    </>
  )
}


PokemonCard.propTypes = {
    data: PropTypes.object.isRequired
}
