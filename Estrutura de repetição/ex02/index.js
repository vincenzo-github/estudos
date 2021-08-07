let spaceship = prompt("Digite o nome da nave")

let charToReplace = prompt("Qual caracter voce desja substiruir?")

let replacementeChar = prompt("Por qual caracter voce deseja subistituir?")

let newSpaceship = ""

for(let pos = 0; pos < spaceship.length; pos++){
    if(spaceship[pos] == charToReplace) {
        newSpaceship += replacementeChar
    } else {
        newSpaceship += spaceship[pos]
    }
}

alert ("O novo nome da nave é  " + newSpaceship)