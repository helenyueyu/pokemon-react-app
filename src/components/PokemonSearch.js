import React from 'react'

const PokemonSearch = (props) => {
  return (
    <div>
      Pokemon Search Bar: <input type="text" onChange={props.handleChange}/>
    </div>
  )
}

export default PokemonSearch
