let dataPartida = prompt("Digite a data de partida (formato DD/MM/YYYY)")

let dataModificada = moment(dataPartida, "DD/MM/YYYY")

let hoje = moment()

let dataDiferanca = hoje - dataModificada
let chosenOpition = prompt("Escolha como gtostaria de exibir o tempo de partida\n1- Segundo\n2- Munutos\n3- Hora\n4- Dia")

if(chosenOpition == "1") {
    let segundos = Math.round(dataDiferanca / 1000)
    alert("Tempo de vôo: " + segundos + " segundos")
} else if(chosenOpition == "2"){
    let minutos = Math.round(dataDiferanca / 1000 / 60)
    alert("Tempo de vôo: " + minutos + " minutos")
} else if(chosenOpition == "3"){
    let horas = Math.round(dataDiferanca / 1000 / 3600)
    alert("Tempo de vôo: " + horas + " horas")
} else if(chosenOpition == "4"){
    let dias = Math.round(dataDiferanca / 1000 / 86400 )
    alert("Tempo de vôo: " + dias + " dias")
} else{
    alert("Opção invalida")
}