const spaceship = {
  velocity: 0,
  speedUp: (acceleration) => {
    this.velocity += acceleration;
  },
};

const registerSpaceship = () => {
  spaceship.name = prompt("Informe o nome da nave");
  spaceship.type = prompt("Informe o tipo da nave");
  spaceship.maxVelocity = Number(
    prompt("Informe a velocidade maxima da nave (Km/s)")
  );
};

function acelerate() {
  let acceleration = Number(prompt("Quanto voce quer acelerar? (Km/s)"));
  spaceship.speedUp(acceleration);
  if (spaceship.velocity > spaceship.maxVelocity) {
    alert(
      `VELOCIDADE MAXIMA ULTRAPASSADA! 
            Velocidade da nave: ${spaceship.velocity}Km/s
            Velocidade maxima da nave: ${spaceship.maxVelocity}Km/s"`
    );
  }
}

function stop() {
  alert(
    "Nome: " +
      spaceship.name +
      "\nTipo: " +
      spaceship.type +
      "\nVelocidade da nave: " +
      spaceship.velocity +
      "\nMaxima da nave: " +
      spaceship.maxVelocity
  );
}

function showMenu() {
  let choseOption;
  do {
    choseOption = prompt("Voce dseja:\n1- Acelerar\n2- Parar");
    switch (choseOption) {
      case "1":
        acelerate();
        break;
      case "2":
        stop();
        break;
      default:
        alert("Opção invalida");
    }
  } while (choseOption != "2");
}

registerSpaceship();
showMenu();
