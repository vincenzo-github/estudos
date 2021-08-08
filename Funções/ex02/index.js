function slowDown(velocidade, printer) {
    let deceleration = 10
    while (velocidade > 0) {
        printer(velocidade)
        velocidade -= deceleration
    }
    alert("Nave parada. As comportas podem ser abertas")
}

let spaceshipVelocidade = 150

slowDown(spaceshipVelocidade, function(velocidade) {
    alert("Velocidade atual: " + velocidade)
    
})