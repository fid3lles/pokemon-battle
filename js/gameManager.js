var trainerPkmn;
var enemyPkmn;

async function startNewGame(trainerPkmnName, enemyPkmnName){
    trainerPkmn = generateTrainerPokemonObj(await getPokemonObj(trainerPkmnName));
    enemyPkmn = generateTrainerPokemonObj(await getPokemonObj(enemyPkmnName));

    console.log(trainerPkmn);
    console.log(enemyPkmn);
}

function attack(){

}

/*

    SPECIAL ATK: ((((2*level/5+2)*spatkstat*atkpwr/spdefstat)/50)+2)*stab*weakness;
    SPECIAL DEF: resistance*critical*other(margin/100)

    PHYSICAL ATK: ((((2*level/5+2)*spatkstat*atkpwr/spdefstat)/50)+2)*stab*weakness;
    PHYSICAL DEF: 

*/

function getPokeStatusValueByName(pokeObj, statusName){
    pokeObj.stats.filter((stat) => {
        if(stat.stat.name == statusName){
            return stat;
        }
    })
}

async function generateTrainerPokemonObj(pokeObj){

    var types = [];

    pokeObj.types.forEach(function(e) {
        types.push(e.type);
    });   

    return {
        name: pokeObj.name,
        type: types,
        lvl: 50,
        stats: pokeObj.stats
    }
}