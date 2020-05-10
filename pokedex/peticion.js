$(document).ready(function () {
    pokemonGet();
});

function pokemonGet() {

    pokemons = []
    fetch('https://pokeapi.co/api/v2/generation/1')
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            pokemonList(response);
            //return pokemons = response;
        })

}

function pokemonList(pokemons) {
    lista = pokemons.pokemon_species;
    region = pokemons.main_region;
    lista.forEach(pokemon => {
        //console.log('https://pokeapi.co/api/v2/pokemon/'+pokemon.name+'/')
        pokemonSearch(pokemon.name); 
    });
}

function pokemonSearch(name) {
    fetch('https://pokeapi.co/api/v2/pokemon/'+name+'/')
    .then(function (response) {
        return response.json();
    })
    .then(function (pokemon) {
        console.log(pokemon);
        $("#content").append(
            '<div>'+
                '<p>'+ pokemon.name +'</p>' +
                //'<img src='+ +' alt='+pokemon.name +' />'+
            '</div>'
        );
        //return pokemons = response;
    })
}

function pokemonNumber(gen) {
    console.log(gen.results.length)
}