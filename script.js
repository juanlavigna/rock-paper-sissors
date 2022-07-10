// DOM nodes
const ROCK = document.querySelector("#rock");
const PAPER = document.querySelector("#paper");
const SISSOR = document.querySelector("#sissor");
const PARRAFO = document.querySelector("p");
const PARRAFO2 = document.querySelector("#score");
const H2 = document.querySelector("h2");
let divs = document.querySelectorAll(".contenedor>div");

// Computer random selection
let armas = ["piedra", "papel", "tijera"]

function computerPlay (){
    let computerChoice = armas[Math.floor(Math.random()*armas.length)]
    return computerChoice
} 

// Event listener
divs.forEach((div) => {
    div.addEventListener("click", (e) =>{
        div.classList.add("transform")
        singleRound(computerPlay(), e.path[0].id)
    })
})

// Animation
divs.forEach((div) => div.addEventListener("transitionend", function (){
    div.classList.remove("transform")
}))

function removeTransition (e){
    if(e.propertyName !== "transform") return;
    console.log(propertyName)
}

/* FALTA CHEQUEAR QUIEN GANO DESPUES DE LAS 5 JUGADAS
function checkWinner() {
    if(puntaje === 0){
        console.log(`Empataron`)

    }else if(puntaje < 0){
        console.log(`Perdiste el juego`)
    }else {
        console.log(`Ganaste el juego!`)
    }
    divs.forEach((div) => {
        div.removeEventListener("click", (e) =>{
            div.classList.add("transform")
            singleRound(computerPlay(), e.path[0].id)
        })
    })
}
*/
let jugadas = 0;
const RONDAS = 3;
let userScore = 0;
let computerScore = 0;

function singleRound (computer, user) {
    if (      (computer === "piedra" && user === "papel") ||
              (computer === "tijera" && user === "piedra") ||
              (computer === "papel" && user === "tijera")) {
        userScore ++
        computerScore--
        jugadas++
        PARRAFO.textContent = `Ganaste!! ${user} le gana a ${computer}.`
        PARRAFO2.textContent = `Compu: ${computerScore} - Usuario: ${userScore}`
        if(jugadas === RONDAS && userScore>computerScore){
            H2.textContent = "Ganaste el juego rey!"
            return
        }
    }else if ((computer === "papel" && user === "piedra") ||
              (computer === "piedra" && user === "tijera") ||
              (computer === "tijera" && user === "papel")) {
        userScore--
        computerScore++
        jugadas++
        PARRAFO.textContent = `Perdiste!! ${computer} le gana a ${user}.`
        PARRAFO2.textContent = `Compu: ${computerScore} - Usuario: ${userScore}`
        if(jugadas === RONDAS && computerScore>userScore){
            H2.textContent = "Perdiste hermano, volvé a intentarlo."
            return
        }
    }else if (computer === user){
        PARRAFO.textContent = `Empataron! ambos eligieron ${user}`
        PARRAFO2.textContent = `Compu: ${computerScore} - Usuario: ${userScore}`
        // H2.textContent = `Puntaje total: ${puntaje}`
    }
    // checkWinner()

}



// function game () {
//     for (let i = 0; i < 10; i++) {
//     }
//     if (puntaje > 0){
//         console.log("Ganaste el juego!")
//     }else if(puntaje < 0) {
//         console.log("Perdiste el juego :(")
//     }else {
//         console.log("Empataron el juego!")
//     }
// }



