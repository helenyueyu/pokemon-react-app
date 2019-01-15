import React, { Component } from 'react';
import './App.css';

import PokemonSearch from './components/PokemonSearch'

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
    console.log(this.state.data)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <PokemonSearch handleChange={this.handleChangePokemon}/>
        </form>
        {this.state.data && this.state.data.map(x =>
          <li key={x.id}>
            {x.name}
          </li>)}
      </div>
    );
  }
}

export default App;
