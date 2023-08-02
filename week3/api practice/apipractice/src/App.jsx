import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [pokemonChars, setPokemonChars] = useState([]) 
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
    .then(res => setPokemonChars(res.data.results))
    .catch(err => console.log(err))
  },[])

  return (
    <>
      <div>
        <h1>Pokemon API</h1>
        <p>List of 807 Pokemon:</p>
        { 
          pokemonChars.map((pokemon, i) => (
            <div key={i}>
            <p>{pokemon.name}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
