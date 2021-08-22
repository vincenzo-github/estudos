class Spaceship {
    constructor(name, crewQuantity) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.isHiteched = false
        this.entraceDoorsOpen = false
    }

    hitch() {
        this.isHiteched = true
        this.entraceDoorsOpen = true
    }
}

function showMenu() {
    let chosenOption
    while (chosenOption != "1" && chosenOption != "2" && chosenOption != "3") {
        chosenOption = prompt("O que deseja fazer? \n" + "1 - Engatar naves\n" + "2 - Imprimir naves\n" + "3 - Sair do programa")
    }
    return chosenOption
}

function createSpaceship() {
    let spaceshipName = prompt("Informe o nome da nave")
    let crewQuantity = prompt("Informe a quantidade de tripulantes")
    let spaceship = new Spaceship(spaceshipName, crewQuantity)
    return spaceship
}

function printSpaceshipList(Spaceships) {
    let spaceshipList = ""
    Spaceships.forEach((Spaceship, index) =>{
        spaceshipList += (index + 1) + "- " + Spaceship.name + " (" + Spaceship.crewQuantity + " tripulantes)\n"
    })
    alert(spaceshipList)
}

let hitchedSpaceships = []

let chosenOption

while (chosenOption != "3") {
    chosenOption = showMenu()
    switch (chosenOption) {
        case "1":
            let SpaceshipToAdd = createSpaceship()
            SpaceshipToAdd.hitch()
            hitchedSpaceships.push(SpaceshipToAdd)
            break
        case "2":
            printSpaceshipList(hitchedSpaceships)
            break
    }

}

