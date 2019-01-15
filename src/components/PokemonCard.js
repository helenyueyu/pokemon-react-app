import React, { Component } from 'react'
import { Label, Card, Image, Header, Transition } from 'semantic-ui-react'

import "./PokemonCard.css"

class PokemonCard extends Component {
  state = {
    visible: true,
    color: (this.props.types === "Grass") ? "green" : "grey"
  }
  flipCard = () => this.setState({visible: !this.state.visible})
  render() {
    const { visible } = this.state
    return (
      <Transition visible={visible} animation="jiggle" duration={700}>
        <Card className="pokemon-card" onClick={this.flipCard}>
          {
            (visible === true) ?
            <Image src={this.props.image} className="pokemon-image"/> :
              <Label className="pokemon-label" color={this.state.color}>
              <Header>{this.props.name}</Header>

              HP: {(this.props.hp) ? this.props.hp : 'NA'} <br/>
              Type(s): {(this.props.types) ? this.props.types.map(x => (x)) : 'NA'}<br/>
              Rarity: {(this.props.rarity) ? this.props.rarity : 'NA'} <br/>
              <br/>
              Attacks: {(this.props.attacks) ? this.props.attacks.map(x => <li> {x.name}<ul>
                <li>{(x.text) ? x.text : 'Description not available.'}</li>
                <li>Damage: {(x.damage) ? x.damage : 'NA'}</li>
                <li>Converted Energy Cost:  {x.convertedEnergyCost}</li>
                </ul></li>) : "none"} <br/>
              Weaknesses: {(this.props.weaknesses) ? this.props.weaknesses.map(x => <li>{x.type}{x.value}</li>) : 'NA'}
              </Label>
          }
        </Card>
      </Transition>
    )
  }
}

export default PokemonCard
