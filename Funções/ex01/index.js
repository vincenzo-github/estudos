let spacechipName = prompt("Digite o nome da nave")
let spachecipVelocity = 0
let chosenOption 

function showMenu() {
    let option
    while (option != "1" && option != "2" && option != "3" && option != "4") {
        option = prompt("O Que deseja fazer?\n" +
                        "1- Acelerar a nave em 5Km/s\n" +
                        "2- Desacelerar a  nave em 5Km/s\n" +
                        "3- Imprimir dados de bordo\n" +
                        "4- Sair do programa")
    }
    return option
}

function speedUp(velocity) {
    let newVelocity = velocity + 5
    return newVelocity
}

function slowDown(velocity) {
    let newVelocity = velocity - 5
    if(newVelocity <0) {
        newVelocity = 0
    }
    return newVelocity
}

function printSpaceshipBoardData(name, velocity) {
    alert("Espaçonave: " + name + "\nVelocidade: " + velocity + "Km/s")
}

do {
    chosenOption = showMenu()
    switch(chosenOption) {
        case "1":
            spachecipVelocity = speedUp(spachecipVelocity)
            break
        case "2":
            spachecipVelocity = slowDown(spachecipVelocity)
            break
        case "3":
            printSpaceshipBoardData(spacechipName, spachecipVelocity)
            break
            default:
                alert("Encerrando progamra de bordo")
    }
} while (chosenOption != "4")