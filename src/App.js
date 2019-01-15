import React, { Component } from 'react';
import './App.css';

const API = 'https://api.pokemontcg.io/v1/cards'

class App extends Component {
  state = {
    pokemon: '',
    data: ''
  }
  componentDidMount() {
    fetch(`https://api.pokemontcg.io/v1/cards?name=${this.state.pokemon}`)
      .then(res => res.json())
      .then(data => this.setState({
        data: data
      }))
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      pokemon: e.target.value
    })
    fetch(`https://api.pokemontcg.io/v1/cards?name=${this.state.pokemon}`)
      .then(res => res.json())
      .then(data => this.setState({
        data: data
      }))
      .then(console.log(this.state.data))
  }
  handleChange = (e) => {
    this.setState({
      pokemon: e.target.value
    })
  }
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange}/>
        <button>Submit</button>
      </form>
      {this.state.data && this.state.data.map(x => <li>'Forever'</li>)}
      </div>
    );
  }
}

export default App;
