let warpCount = 0
let chosenOption = ""

let spaceship = prompt("Digite o nome da nave")

chosenOption = prompt("Deseja entrar em dora espacial?\n1- Sim\n2- Não")

while(chosenOption == "1") {
    warpCount += 1
    chosenOption = prompt("Deseja realizar a proxima dobra?\n1- Sim\n2- Não")
}

alert("Nave: " + spaceship + "\n Quantidade de dobras: " + warpCount)