import React from 'react'
import { Form, Header } from 'semantic-ui-react'

import './PokemonSearch.css'

const PokemonSearch = (props) => {
  return (
    <Form className="search-bar" onSubmit={props.handleSubmit}>
      <Form.Field>
        <label><Header as="h1" className="title">Pokemon Search</Header></label>
        <input type="text" onChange={props.handleChange}/>
      </Form.Field>
    </Form>
  )
}

export default PokemonSearch
