let armas = ["piedra", "papel", "tijera"]

function computerPlay (){
    let computerChoice = armas[Math.floor(Math.random()*armas.length)]
    return computerChoice
} 

let puntaje = 0

function singleRound (computer, user) {
    if (      (computer === "piedra" && user === "papel") ||
              (computer === "tijera" && user === "piedra") ||
              (computer === "papel" && user === "tijera")) {
        console.log (`Ganaste!! ${user} le gana a ${computer}.`)
        puntaje++
        console.log(puntaje)
    }else if ((computer === "papel" && user === "piedra") ||
              (computer === "piedra" && user === "tijera") ||
              (computer === "tijera" && user === "papel")) {
        console.log (`Perdiste!! ${computer} le gana a ${user}.`);
        puntaje--
        console.log(puntaje)
    }else if (computer === user){
        console.log (`Empataron! ambos eligieron ${user}`)
        console.log(puntaje)
    }else {
        console.log ("Entrada no válida")
    }
}

function game () {
    for (let i = 0; i < 10; i++) {
        let seleccionUsuario = (prompt("elige piedra, papel o tijera")).toLowerCase();
        let seleccionComputadora = computerPlay();
        singleRound(seleccionComputadora, seleccionUsuario);
    }
    if (puntaje > 0){
        console.log("Ganaste el juego!")
    }else if(puntaje < 0) {
        console.log("Perdiste el juego :(")
    }else {
        console.log("Empataron el juego!")
    }
}

game ();
