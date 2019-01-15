import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import './App.css';

import PokemonSearch from './components/PokemonSearch'
import PokemonCard from './components/PokemonCard'

const API = 'https://api.pokemontcg.io/v1/cards'

class App extends Component {
  state = {
    pokemon: '',
    data: ''
  }
  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data => this.setState({
        data: data.cards
      }))
  }
  handleChangePokemon = (e) => {
    this.setState({
      pokemon: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`https://api.pokemontcg.io/v1/cards?name=${this.state.pokemon}`)
      .then(res => res.json())
      .then(data => this.setState({
        data: data.cards
      }))
  }
  render() {
    return (
      <Container className="container" fluid>
          <PokemonSearch handleChange={this.handleChangePokemon} handleSubmit={this.handleSubmit}/>

        {this.state.data && this.state.data.map(x =>
          <li key={x.id}>
            <PokemonCard
              name={x.name}
              image={x.imageUrl}
              hp={x.hp}/>
          </li>)}
      </Container>
    );
  }
}

export default App;
