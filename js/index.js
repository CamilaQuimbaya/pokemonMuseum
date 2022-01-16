function Pokemon(id, name, type, evolution, photo, skills, weakness){
    this.id = id;
    this.name = name;
    this.type = type;
    this.evolution = evolution;
    this.photo = photo;
    this.skills = skills;
    this.weakness = weakness;
}
const charmander = new Pokemon(1, "charmander", "Fire", "Charmeleon", "./images/pokemones/charmander.png", "flamethrower", "water");
const charmeleon = new Pokemon(2, "charmeleon", "Fire", "Charizard", "./images/pokemones/charmeleon.png", "flamethrower", "water");
const charizard = new Pokemon(3, "charizard", "Fire", "None", "./images/pokemones/charizard.png", "flamethrower", "water");
const squirtle = new Pokemon(4, "squirtle", "water", "Wartortle", "./images/pokemones/squirtle.png", "torrent of water", "electric");
const wartortle = new Pokemon(5, "wartortle", "water", "blastoise", "./images/pokemones/wartortle.png", "torrent of water", "electric");
const blastoise = new Pokemon(6, "blastoise", "water", "None", "./images/pokemones/blastoise.png", "torrent of water", "electric");
const bulbasaur = new Pokemon(7, "bulbasaur", "plant", "ivysaur", "./images/pokemones/bulbasaur.png", "blade whip", "fire");
const ivysaur = new Pokemon(8, "ivysaur", "plant", "venusaur", "./images/pokemones/ivysaur.png", "blade whip", "fire");
const venusaur = new Pokemon(9, "venusaur", "plant", "None", "./images/pokemones/venusaur.png", "blade whip", "fire");
const pikachu = new Pokemon(10, "pikachu", "electric", "raichu", "./images/pokemones/pikachu.png", "shocking ray", "fire");
const raichu = new Pokemon(11, "raichu", "electric", "None", "./images/pokemones/raichu.png", "shocking ray", "fire");
const poliwag = new Pokemon(12, "poliwag", "water", "poliwhirl", "./images/pokemones/poliwag.png", "water absorption", "plant");
const poliwhirl = new Pokemon(13, "poliwhirl", "water", "poliwrath", "./images/pokemones/poliwhril.png", "water absorption", "plant");
const poliwrath = new Pokemon(14, "poliwrath", "water", "None", "./images/pokemones/poliwrath.png", "water absorption", "plant");
const growlithe = new Pokemon(15, "growlithe", "fire", "arcanine", "./images/pokemones/growlithe.png", "fire blast", "water");
const arcanine = new Pokemon(16, "arcanine", "fire", "None", "./images/pokemones/arcanine.png", "fire blast", "water");
const magnemite = new Pokemon(17, "magnemite", "electric", "magneton", "./images/pokemones/magnemite.png", "thunder wave", "fire");
const magneton = new Pokemon(18, "magneton", "electric", "None", "./images/pokemones/magneton.png", "thunder wave", "fire");
const exeggcute = new Pokemon(19, "exeggcute", "plant", "exeggutor", "./images/pokemones/exeggcute.png", "chlorophyll explosion", "ghost");
const exeggutor = new Pokemon(20, "exeggutor", "plant", "None", "./images/pokemones/exeggutor.png", "chlorophyll explosion", "ghost");
const lapras = new Pokemon(21, "lapras", "water", "None", "./images/pokemones/lapras.png", "ice ray", "plant");
const moltres = new Pokemon(22, "moltres", "fire", "none", "./images/pokemones/moltres.png", "mega flame", "water")
const zapdos = new Pokemon(23, "zapdos", "electric", "none", "./images/pokemones/zapdos.png", "electric storm", "ghost")
const mrmime = new Pokemon(24, "mrmime", "psychic", "none", "./images/pokemones/mrmime.png", "psychic attack", "ghost")
const clefairy = new Pokemon(25, "clefairy", "fairy", "clafable", "./images/pokemones/clefairy.png", "fairy blast", "poison")
const clefable = new Pokemon(26, "clefable", "fairy", "none", "./images/pokemones/clefable.png", "fairy blast", "poison")
const jigglypuff = new Pokemon(27, "jigglypuff", "fairy", "jigglypuff", "./images/pokemones/jigglypuff.png", "sleep song", "poison")
const wigglypuff = new Pokemon(28, "wigglypuff", "fairy", "none", "./images/pokemones/wiglypuff.png", "sleep song", "poison")
const abra = new Pokemon(29, "abra", "psychic", "kadabra", "./images/pokemones/abra.png", "psychic blast", "ghost")
const kadabra = new Pokemon(30, "kadabra", "psychic", "alakazam", "./images/pokemones/kadabra.png", "psychic blast", "ghost")
const alakazam = new Pokemon(31, "alakazam", "psychic", "none", "./images/pokemones/alakazam.png", "psychic blast", "ghost")
const slowpoke = new Pokemon(32, "slowpoke", "water", "slowbro", "./images/pokemones/slowpoke.png", "rain dance", "plant")
const slowbro = new Pokemon(33, "slowbro", "water", "none", "./images/pokemones/slowbro.png", "rain dance", "plant")
const mew = new Pokemon(34, "mew", "psychic", "none", "./images/pokemones/mew.png", "physic attack", "ghost")
const mewtwo = new Pokemon(35, "mewtwo", "psychic", "none", "./images/pokemones/mewtwo.png", "psychic attack", "ghost")

const whichPokemon = document.getElementById("whichPokemon")
const btnWhichPokemon = document.getElementById("btnWhichPokemon")

const newArr = [charmander, charmeleon, charizard, squirtle,
    wartortle, blastoise, bulbasaur, ivysaur, venusaur, pikachu, raichu, poliwag, poliwhirl, poliwrath, growlithe, arcanine, magnemite, magneton, exeggcute, exeggutor, lapras, moltres, zapdos, mrmime, clefairy, clefable, jigglypuff, wigglypuff, abra, kadabra, alakazam, slowpoke, slowbro, mew, mewtwo
]
const showPokemon = (min, max, elem, arr) =>{
    let num = Math.floor(Math.random() * (max - min) + min)
    let value = arr[num].id
    let pic = arr[num].photo
    let name = arr[num].name
    switch (value) {
        case 1:
           elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                             <h2>Eres todo un ${name}</h2>               
           ` 
            break;
        case 2:
           elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
           ` 
            break;
        case 3:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
            ` 
            break;
        case 4:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
            ` 
             break;
        case 5:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                             <h2>Eres todo un ${name}</h2>
            ` 
            break;
        case 6:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
            ` 
            break; 
        case 7:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
            ` 
            break;
        case 8:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
            ` 
            break; 
        case 9:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
            ` 
            break;
        case 10:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
            ` 
            break;
        case 11:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
            ` 
            break;
        case 12:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
            ` 
            break; 
        case 13:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
            ` 
            break;
        case 14:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
            ` 
            break;
        case 15:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
            ` 
            break;
        case 16:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
            ` 
            break;
        case 17:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
            ` 
            break;
        case 18:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
            ` 
            break; 
        case 19:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
            ` 
            break;
        case 20:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
            ` 
            break;
        case 21:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
            ` 
            break; 
        case 22:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
            ` 
            break;
        case 23:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
            ` 
            break; 
        case 24:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
            <h2>Eres todo un ${name}</h2>
            ` 
            break;
        case 25:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
            ` 
            break;
        case 26:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
            ` 
            break;
        case 27:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
            ` 
            break;
        case 28:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
            ` 
            break;
        case 29:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
            ` 
            break;
        case 30:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
            ` 
            break; 
        case 31:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
            ` 
            break;
        case 32:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
            ` 
            break;
        case 33:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
            ` 
            break;
        case 34:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
            ` 
            break; 
        case 35:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
            ` 
            break;                

         default:
            break;
    }
}
btnWhichPokemon.addEventListener("click", () => {
    showPokemon(0, 36, whichPokemon, newArr)
})
