// DOM nodes
const ROCK = document.querySelector("#rock");
const PAPER = document.querySelector("#paper");
const SISSOR = document.querySelector("#sissor");
const PARRAFO = document.querySelector("p");
const H2 = document.querySelector("h2")
let divs = document.querySelectorAll(".contenedor>div")

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

divs.forEach((div) => div.addEventListener("transitionend", function (){
    div.classList.remove("transform")
}))

function removeTransition (e){
    if(e.propertyName !== "transform") return;
    console.log(propertyName)
}

let puntaje = 0

function singleRound (computer, user) {
    if (      (computer === "piedra" && user === "papel") ||
              (computer === "tijera" && user === "piedra") ||
              (computer === "papel" && user === "tijera")) {
        PARRAFO.textContent = `Ganaste!! ${user} le gana a ${computer}.`
        puntaje++
        H2.textContent = `Puntaje total: ${puntaje}`
    }else if ((computer === "papel" && user === "piedra") ||
              (computer === "piedra" && user === "tijera") ||
              (computer === "tijera" && user === "papel")) {
        PARRAFO.textContent = `Perdiste!! ${computer} le gana a ${user}.`
        puntaje--
        H2.textContent = `Puntaje total: ${puntaje}`
    }else if (computer === user){
        PARRAFO.textContent = `Empataron! ambos eligieron ${user}`
        H2.textContent = `Puntaje total: ${puntaje}`
    }else {
        console.log ("Entrada no válida")
    }

}



function game (e) {
    for (let i = 0; i < 10; i++) {
        let seleccionUsuario = e.path[0].id
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



