let armas = ["piedra", "papel", "tijera"]

function computerPlay (){
    let computerChoice = armas[Math.floor(Math.random()*armas.length)]
    return computerChoice
} 

function singleRound (computer, user) {
    if (      (computer === "piedra" && user === "papel") ||
              (computer === "tijera" && user === "piedra") ||
              (computer === "papel" && user === "tijera")) {
        console.log (`Ganaste!! ${user} le gana a ${computer}.`)
    }else if ((computer === "papel" && user === "piedra") ||
              (computer === "piedra" && user === "tijera") ||
              (computer === "tijera" && user === "papel")) {
        console.log (`Perdiste!! ${computer} le gana a ${user}.`)
    }else if (computer === user){
        console.log ("Empataronnnn")
    }else {
        console.log ("Entrada no válida")
    }
}

function game () {
    for (let i = 0; i < 5; i++) {
        let seleccionUsuario = (prompt("elige piedra, papel o tijera")).toLowerCase();
        let seleccionComputadora = computerPlay();
        singleRound(seleccionComputadora, seleccionUsuario);
    }
}

game ();
