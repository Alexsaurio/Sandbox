$(document).ready(function () {
   pokemonGet(); 
});

function pokemonGet() {
    fetch('https://pokeapi.co/api/v2/generation/3/')
    .then(function (response) {
        return response.json();
    })
    .then(function (pokemons){
        //console.log(pokemons);
        $("#region").text("Pokedex de la region: "+ pokemons.main_region.name);
        pokemonList(pokemons.pokemon_species);
    });
}

function pokemonList(pokemons) {
    pokemons = pokemons.reverse();
    pokemons.forEach(pokemon => {
        //console.log(pokemon.name);
        fetch('https://pokeapi.co/api/v2/pokemon/'+pokemon.name+'/')
        .then(function (response) {
            return response.json();
        })
        .then(function (datapoke) {
            //console.log(datapoke);
            tipos = pokemonTipos(datapoke.types);
            $("#content").append(
                '<div>' +
                    '<h3>' + datapoke.name + '</h3>' +
                    '<img src='+ datapoke.sprites.front_default +' alt='+datapoke.name+'/>' +
                    tipos +
                    '</div>'
            )
        })
    });
}

function pokemonTipos(tipos) {
    tp = '';
    if (tipos.length === 1) {
        tp = '<span class='+tipos[0].type.name+'>'+ tipos[0].type.name +'</span>';
    }else{
        tp = '<span class='+tipos[0].type.name+'>'+tipos[0].type.name +'</span>' + '<span class='+tipos[1].type.name+'>'+tipos[1].type.name +'</span>';
    }
    return tp;
}