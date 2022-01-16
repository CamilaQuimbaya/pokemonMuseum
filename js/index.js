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
                             <h6>Prefieres las cosas calientes. Dicen que 
                             cuando llueve te sale vapor de la punta de la 
                             cola.</h6>               
           ` 
            break;
        case 2:
           elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
                            <h6>Eres de naturaleza agresiva ataca en combate
                             con su cola llameante y hace trizas al rival con 
                             sus afiladas garras.</h6>
           ` 
            break;
        case 3:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
                            <h6>Escupes un fuego tan caliente que funde las rocas. 
                            Causa incendios forestales sin querer.</h6>
            ` 
            break;
        case 4:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
                            <h6>Cuando se siente en peligro, se esconde en 
                            su caparazón y escupe chorros de agua por la boca.</h6>
            ` 
             break;
        case 5:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                             <h2>Eres todo un ${name}</h2>
                             <h6>Se te considera un símbolo de longevidad. 
                             Los ejemplares más ancianos tienen musgo
                              sobre el caparazón.</h6>
            ` 
            break;
        case 6:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
                            <h6>Para acabar con su enemigo, lo aplasta con 
                            el peso de su cuerpo. 
                            En momentos de apuro, se esconde en el caparazón.</h6>
            ` 
            break; 
        case 7:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
                            <h6>Este Pokémon nace con una semilla en el lomo, 
                            que brota con el paso del tiempo.</h6>
            ` 
            break;
        case 8:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
                            <h6>La luz del sol lo fortalece y hace que le 
                            crezca el capullo que tiene en el lomo.</h6>
            ` 
            break; 
        case 9:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
                            <h6>La flor que tiene en el lomo libera un delicado
                             aroma, que tiene un efecto relajante en combate.</h6>
            ` 
            break;
        case 10:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
                            <h6>Los miembros de esta especie se saludan entre 
                            sí uniendo sus colas y transmitiéndose
                             corriente eléctrica.</h6>
            ` 
            break;
        case 11:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
                            <h6>Cuando ha descargado las bolsas de las mejillas, 
                            levanta la cola y absorbe la carga eléctrica que hay
                             en el ambiente.</h6>
                            
            ` 
            break;
        case 12:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
                            <h6>En ríos de aguas bravas, usa sus gruesos labios
                             a modo de ventosa para adherirse a las rocas.</h6>
            ` 
            break; 
        case 13:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
                            <h6>Secreta un sudor viscoso que le sirve para
                             escurrirse y escapar del agarre de sus enemigos.</h6>
            ` 
            break;
        case 14:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
                            <h6>Su cuerpo es puro músculo. Logra abrirse paso
                             por aguas gélidas partiendo el hielo con sus fornidos
                              brazos.</h6>
            ` 
            break;
        case 15:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
                            <h6>De naturaleza valiente y honrada, se enfrenta
                            sin miedo a enemigos más grandes y fuertes.</h6>
            ` 
            break;
        case 16:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
                            <h6>Muchos han quedado cautivados por su belleza 
                            desde la antigüedad. Corre ágilmente como si tuviera
                             alas.</h6>
            ` 
            break;
        case 17:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
                            <h6>A veces se desploman al suelo tras agotar
                             su suministro eléctrico interno, pero basta una 
                             pequeña batería para reanimarlos.</h6>
            ` 
            break;
        case 18:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
                            <h6>Emite de forma constante una potente fuerza
                             magnética que causa estragos en prácticamente 
                             cualquier ordenador al que se acerque.</h6>
            ` 
            break; 
        case 19:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
                            <h6>Necesita contar con la totalidad de sus
                             seis miembros para mantener la calma. 
                             Si desaparece uno siquiera, le entran ganas
                              de salir huyendo.</h6>
            ` 
            break;
        case 20:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
                            <h6>Cada una de las tres cabezas piensa de forma
                             independiente y apenas muestra interés por el resto.</h6>
            ` 
            break;
        case 21:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
                            <h6>Este Pokémon posee una notable inteligencia
                             y un corazón de oro. Entona un canto melodioso
                              mientras surca el mar.</h6>
            ` 
            break; 
        case 22:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
                            <h6>Una de las aves legendarias. Al batir las alas,
                             las llamas que las envuelven emiten un hermoso fulgor rojo.</h6>
            ` 
            break;
        case 23:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
                            <h6>Una de las aves legendarias. Dicen que,
                            cuando este Pokémon frota las alas, cae al 
                            instante un relámpago del cielo.</h6>
            ` 
            break; 
        case 24:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
                            <h6>Muchos estudiosos sostienen que el desarrollo 
                            de sus enormes manos se debe a su afán por practicar 
                            la pantomima.</h6>
            ` 
            break;
        case 25:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
                            <h6>Se dice que la felicidad llegará a quien 
                            vea un grupo de Clefairy bailando a la luz de la
                             luna llena.</h6>
            ` 
            break;
        case 26:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
                            <h6>Este Pokémon de aspecto feérico,
                             raramente visto por los humanos, corre a
                              esconderse en cuanto detecta que hay alguien cerca.</h6>
            ` 
            break;
        case 27:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
                            <h6>Su capacidad pulmonar es excepcional, 
                            incluso para un Pokémon. Es capaz de cantar nanas 
                            sin cesar hasta que su rival se duerma.</h6>
            ` 
            break;
        case 28:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
                            <h6>Cuanto más aire inhala, más aumenta de
                             tamaño. Si se enfada, hincha el cuerpo con
                              el fin de intimidar a su oponente.</h6>
            ` 
            break;
        case 29:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
                            <h6>Es capaz de usar sus poderes psíquicos
                             aun estando dormido. Al parecer, el contenido
                              del sueño influye en sus facultades.</h6>
            ` 
            break;
        case 30:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
                            <h6>Duerme suspendido en el aire gracias a sus 
                            poderes psíquicos. La cola, de una flexibilidad extraordinaria, 
                            hace las veces de almohada.</h6>
            ` 
            break; 
        case 31:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
                            <h6>Posee una capacidad intelectual fuera de
                             lo común que le permite recordar todo lo sucedido desde 
                             el instante de su nacimiento.</h6>
            ` 
            break;
        case 32:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
                            <h6>Es lento y abstraído. Aunque le devoren la cola, 
                            ni siquiera se percata, ya que no siente ningún dolor. 
                            Tampoco nota cuando le vuelve a crecer.</h6>
            ` 
            break;
        case 33:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
                            <h6>Ha evolucionado después de que lo mordiera un 
                            Shellder, al cual le embelesa la sustancia que 
                            secreta por la cola.</h6>
            ` 
            break;
        case 34:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
                            <h6>Si se observa a través de un microscopio, 
                            puede distinguirse cuán corto, fino y delicado 
                            es el pelaje de este Pokémon.</h6>
            ` 
            break; 
        case 35:
            elem.innerHTML = `<img src="${pic}" alt="pokemon" class="pic">
                            <h2>Eres todo un ${name}</h2>
                            <h6>Su ADN es casi el mismo que el de Mew. 
                            Sin embargo, su tamaño y carácter son muy
                             diferentes da miedo.</h6>
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