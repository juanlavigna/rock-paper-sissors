let armas = ["piedra", "papel", "tijera"]

function computerPlay (){
    let computerChoice = armas[Math.floor(Math.random()*armas.length)]
    return computerChoice
} 


function jugada (computer, user) {
    if (      (computer === "piedra" && user === "papel") ||
              (computer === "tijera" && user === "piedra") ||
              (computer === "papel" && user === "tijera")) {
        console.log (`You win!! ${user} beats ${computer}.`)
    }else if ((computer === "papel" && user === "piedra") ||
              (computer === "piedra" && user === "tijera") ||
              (computer === "tijera" && user === "papel")) {
        console.log (`You lose!! ${computer} beats ${user}.`)
    }else {
        console.log ("Empataronnnn")
    }
}

let seleccionUsuario = prompt("elige piedra, papel o tijera");
seleccionUsuario = seleccionUsuario.toLowerCase();

let seleccionComputadora = computerPlay();

jugada(seleccionComputadora, seleccionUsuario);



