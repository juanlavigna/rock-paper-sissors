let armas = ["piedra", "papel", "tijera"]

function computerPlay (){
    let computerChoice = armas[Math.floor(Math.random()*armas.length)]
    console.log(`La computadora eligió ${computerChoice}.`) 
} 

computerPlay()

