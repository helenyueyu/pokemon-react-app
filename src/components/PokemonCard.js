import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const PokemonCard = (props) => {
  return (
    <Card>
      <Image src={props.image} />
      {props.name}
      {props.hp}
    </Card>
  )
}

export default PokemonCard
