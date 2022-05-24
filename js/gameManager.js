var trainerPkmn;
var enemyPkmn;

async function startNewGame(trainerPkmnName, enemyPkmnName){
    trainerPkmn = await getPokemonObj(trainerPkmnName);
    enemyPkmn = await getPokemonObj(enemyPkmnName);

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

function generateTrainersPokemon(){
    return {
        name: ,
        type: ,
        lvl: ,
        stats: ,
        
    }
}