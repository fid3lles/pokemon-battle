var trainerPkmn;
var enemyPkmn;

async function startNewGame(trainerPkmnName, enemyPkmnName){
    trainerPkmn = await getPokemonObj(trainerPkmnName);
    enemyPkmn = await getPokemonObj(enemyPkmnName);

    console.log(trainerPkmn);
    console.log(enemyPkmn);
}