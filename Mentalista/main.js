var secretNumber = parseInt(Math.random() * 11)

function Chutar() {
  var result = document.getElementById('resultado')
  var kick = parseInt(document.getElementById('valor').value)

  console.log(secretNumber)
  if (kick == secretNumber) {
    result.innerHTML = 'Você acertou! =D'
  } else if (kick > 10 || kick < 0) {
    result.innerHTML = 'Digite um valor entre 1 e 10'
  } else if (kick > secretNumber) {
    result.innerHTML = 'O número é menor que ' + kick
  } else if (kick < secretNumber) {
    result.innerHTML = 'O número é maior que ' + kick
  }
}
