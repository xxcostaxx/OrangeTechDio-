
const offset = 0
const limit = 10
const url   = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToLi(pokemon){  
    return `
    <li class="pokemon">
    <span class = "number">#001</span>
    <span clss = "name">${pokemon.name}</span>
    <div class ="detail">
        <ol class = "types">
            <li class="type">grass</li>
            <li class="type">poison</li>
        </ol>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10001.png" 
        alt="Bulbasaur${pokemon.name}">

    </div>
</li>
`
}

const pokemonList = document.getElementById('pokemonList')
pokeApi.getPokemons().then((pokemons) => {
      
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon)

            
      }
    
})
