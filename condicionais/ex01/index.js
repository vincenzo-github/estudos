let namePilot = prompt( "Qual é o seu nome?")

let velocidade = 0
let newVelocidade = prompt("Qual a velocidade que você gostaira de acelerar?")

let confirmacao = confirm("Estamos indo para " + newVelocidade + "Km/s")

if(confirmacao){
    velocidade = newVelocidade
}

if (velocidade <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade");
} else {
    if(newVelocidade < 40) {
        alert("Você está devagar. Podemos aumentar mais");
    } else {
        if (newVelocidade < 80) {
            alert("Parece uma boa velocidade para manter");
        } else{
            if (newVelocidade <100) {
                alert("Velocidade Alta. Considera diminuir");
            } else{
                alert(namePilot + " você esta com a velocidade perigosa. Controle automatico forçado.")
            }
        }
    }
} 

alert("Sua velicidade final é de " + newVelocidade + "Km/s")