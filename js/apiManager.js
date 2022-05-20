const api = {
    baseUrl: 'https://pokeapi.co/api/v2',
    endpoints: {
        getPokemon: '/pokemon/',
        getMove: '/move/'
    }
};

async function getPokemonObj(pokeName) {

    let teste = 
        await fetch(api.baseUrl + api.endpoints.getPokemon + pokeName)
                .then(res => res.json())
                .then(data => {
                    return data;
                })
                .catch(err => { 
                    return err.message 
                });

    return teste;
}

