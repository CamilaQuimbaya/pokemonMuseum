class Pokemon{
    constructor(id, name, type, evolution, photo, skills, weakness){
        this.id = id;
        this.name = name;
        this.type = type;
        this.evolution = evolution;
        this.photo = photo;
        this.skills = skills;
        this.weakness = weakness;
    }    
}
const charmander = new Pokemon(1, "charmander", "Fire", "Charmeleon", "./images/pokemones/charmander.gif", "flamethrower", "water");
const charmeleon = new Pokemon(2, "charmeleon", "Fire", "Charizard", "./images/pokemones/charmeleon.gif", "flamethrower", "water");
const charizard = new Pokemon(3, "charizard", "Fire", "None", "./images/pokemones/charizard.gif", "flamethrower", "water");
const squirtle = new Pokemon(4, "squirtle", "water", "Wartortle", "./images/pokemones/squirtle.gif", "torrent of water", "electric");
const wartortle = new Pokemon(5, "wartortle", "water", "blastoise", "./images/pokemones/wartortle.gif", "torrent of water", "electric");
const blastoise = new Pokemon(6, "blastoise", "water", "None", "./images/pokemones/blastoise.gif", "torrent of water", "electric");
const bulbasaur = new Pokemon(7, "bulbasaur", "plant", "ivysaur", "./images/pokemones/bulbasaur.gif", "blade whip", "fire");
const ivysaur = new Pokemon(8, "ivysaur", "plant", "venusaur", "./images/pokemones/ivysaur.gif", "blade whip", "fire");
const venusaur = new Pokemon(9, "venusaur", "plant", "None", "./images/pokemones/venusaur.gif", "blade whip", "fire");
const pikachu = new Pokemon(10, "pikachu", "electric", "raichu", "./images/pokemones/pikachu.gif", "shocking ray", "fire");
const raichu = new Pokemon(11, "raichu", "electric", "None", "./images/pokemones/raichu.gif", "shocking ray", "fire");
const poliwag = new Pokemon(12, "poliwag", "water", "poliwhirl", "./images/pokemones/poliwag.gif", "water absorption", "plant");
const poliwhirl = new Pokemon(13, "poliwhirl", "water", "poliwrath", "./images/pokemones/poliwhirl.gif", "water absorption", "plant");
const poliwrath = new Pokemon(14, "poliwrath", "water", "None", "./images/pokemones/poliwrath.gif", "water absorption", "plant");
const growlithe = new Pokemon(15, "growlithe", "fire", "arcanine", "./images/pokemones/growlithe.gif", "fire blast", "water");
const arcanine = new Pokemon(16, "arcanine", "fire", "None", "./images/pokemones/arcanine.gif", "fire blast", "water");
const magnemite = new Pokemon(17, "magnemite", "electric", "magneton", "./images/pokemones/magnemite.gif", "thunder wave", "fire");
const magneton = new Pokemon(18, "magneton", "electric", "None", "./images/pokemones/magneton.gif", "thunder wave", "fire");
const exeggcute = new Pokemon(19, "exeggcute", "plant", "exeggutor", "./images/pokemones/exeggcute.gif", "chlorophyll explosion", "ghost");
const exeggutor = new Pokemon(20, "exeggutor", "plant", "None", "./images/pokemones/exeggutor.gif", "chlorophyll explosion", "ghost");
const lapras = new Pokemon(21, "lapras", "water", "None", "./images/pokemones/lapras.gif", "ice ray", "plant");
const moltres = new Pokemon(22, "moltres", "fire", "none", "./images/pokemones/moltres.gif", "mega flame", "water")
const zapdos = new Pokemon(23, "zapdos", "electric", "none", "./images/pokemones/zapdos.gif", "electric storm", "ghost")
const mrmime = new Pokemon(24, "mrmime", "psychic", "none", "./images/pokemones/mrmime.gif", "psychic attack", "ghost")
const clefairy = new Pokemon(25, "clefairy", "fairy", "clafable", "./images/pokemones/clefairy.gif", "fairy blast", "poison")
const clefable = new Pokemon(26, "clefable", "fairy", "none", "./images/pokemones/clefable.gif", "fairy blast", "poison")
const jigglypuff = new Pokemon(27, "jigglypuff", "fairy", "jigglypuff", "./images/pokemones/jigglypuff.gif", "sleep song", "poison")
const wigglypuff = new Pokemon(28, "wigglypuff", "fairy", "none", "./images/pokemones/wiglypuff.gif", "sleep song", "poison")
const abra = new Pokemon(29, "abra", "psychic", "kadabra", "./images/pokemones/abra.gif", "psychic blast", "ghost")
const kadabra = new Pokemon(30, "kadabra", "psychic", "alakazam", "./images/pokemones/kadabra.gif", "psychic blast", "ghost")
const alakazam = new Pokemon(31, "alakazam", "psychic", "none", "./images/pokemones/alakazam.gif", "psychic blast", "ghost")
const slowpoke = new Pokemon(32, "slowpoke", "water", "slowbro", "./images/pokemones/slowpoke.gif", "rain dance", "plant")
const slowbro = new Pokemon(33, "slowbro", "water", "none", "./images/pokemones/slowbro.gif", "rain dance", "plant")
const mew = new Pokemon(34, "mew", "psychic", "none", "./images/pokemones/mew.gif", "physic attack", "ghost")
const mewtwo = new Pokemon(35, "mewtwo", "psychic", "none", "./images/pokemones/mewtwo.gif", "psychic attack", "ghost")

const whichPokemon = document.getElementById("whichPokemon")
const btnWhichPokemon = document.getElementById("btnWhichPokemon")

const newArr = [charmander, charmeleon, charizard, squirtle,
    wartortle, blastoise, bulbasaur, ivysaur, venusaur, pikachu, raichu, poliwag, poliwhirl, poliwrath, growlithe, arcanine, magnemite, magneton, exeggcute, exeggutor, lapras, moltres, zapdos, mrmime, clefairy, clefable, jigglypuff, wigglypuff, abra, kadabra, alakazam, slowpoke, slowbro, mew, mewtwo
]

const pokedex = document.getElementById("pokedex")
const section1 = document.getElementById("section1")
const section2 = document.getElementById("section2")
const section3 = document.getElementById("section3")
const showpict = document.getElementById("showpict")
const pokeball = document.getElementById("pokeball")
const showMuseum = document.getElementById("showMuseum")
// Inicio funciones
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
const showSections = (elem) => {
    elem.classList.remove("d-none")
}
const showPokeball = (element) => {
    element.classList.remove("d-none")
    element.classList.add("animation")
}
const museumfun = () => {
    newArr.forEach((val) => {
        const myNode = document.createElement("div")
        myNode.classList.add("card", "col-4")
        const myNodeCardBody = document.createElement("div")
        myNodeCardBody.classList.add("card-body")
        const myNodeTitle = document.createElement("h5")
        myNodeTitle.classList.add("card-title")
        myNodeTitle.textContent = val.name
        const myNodeImage = document.createElement("img")
        myNodeImage.classList.add("pic")
        myNodeImage.setAttribute("src", val.photo)
        const myNodeType = document.createElement("p")
        myNodeType.classList.add("card-text")
        myNodeType.textContent = val.type

        myNodeCardBody.appendChild(myNodeTitle)
        myNodeCardBody.appendChild(myNodeImage)
        myNodeCardBody.appendChild(myNodeType)
        myNode.appendChild(myNodeCardBody)
        showMuseum.appendChild(myNode)
    })
}
// Inicio eventos
document.addEventListener("DOMContentLoaded", () => {
    alert("Hola! Disfruta tu museo Pokemón,esperamos te guste mucho!")
})
btnWhichPokemon.addEventListener("click", () => {
    showPokemon(0, 36, whichPokemon, newArr)
})
pokedex.addEventListener("dblclick", () => {
    showSections(section1)
})
pokeball.addEventListener("mouseover", () => {
    showPokeball(showpict)
    showPokeball(section2)
})
document.addEventListener("keydown", () =>{
    museumfun()
})