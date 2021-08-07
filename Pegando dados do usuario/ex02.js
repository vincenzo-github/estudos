let nameVelha = prompt("Qual é o nome da pessoa mais velha?")
let idadeVelha = prompt("Qual é a idade da pessoa mais velha?")
let nameNova = prompt("Qual é o nome da pessoa mais nova?")
let idadeNova = prompt("Qual é a idade da pessoa mais nova?")

let diferencaIdade = idadeVelha - idadeNova

alert(
    "Pessoas mais velhas: " + nameVelha + "\nIdade:  " + idadeVelha + 
    "\n\nPessoa mais nova: " + nameNova + "\nIdade: " + idadeNova + 
    "\n\nDifereça de idade: " + diferencaIdade
)