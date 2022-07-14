import React, {useState} from "react";
import PokemonDisplay from "../components/PokemonDisplay";
import axios  from "axios";


const Pokemons = () => {
    const [pokemons, setPokemons] = useState([])

    const fetchPokemonWithAxios = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=807`)
        .then(response => setPokemons(response.data.results))
        .catch(err => console.log(err))
    }

    return (
        <div>
            
            {/* <button onClick={fetchPokemonWithThen}> Fecth Pokemon</button> */}
            <button onClick={fetchPokemonWithAxios}> Fecth Pokemon</button>
            {
                pokemons?
                <PokemonDisplay pokemons ={pokemons}/>:
                
            <h1>Fetch a pokemon by clicking the button</h1>
            }
            
        </div>
        
    )
}

export default Pokemons;