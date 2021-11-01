var carta1 = {
  nome: 'Meliodas(Ira)',
  imagem: 'images/meliodas.jpg',
  atributos: {
    Magia: 400,
    Força: 960,
    Espírito: 2010
  }
}

var carta2 = {
  nome: 'Diane(Inveja)',
  imagem: 'images/diane.jpg',
  atributos: {
    Magia: 900,
    Força: 1870,
    Espírito: 480
  }
}

var carta3 = {
  nome: 'Ban(Ganância)',
  imagem: 'images/ban.jpg',
  atributos: {
    Magia: 1380,
    Força: 930,
    Espírito: 910
  }
}

var carta4 = {
  nome: 'King(Preguiça)',
  imagem: 'images/king.png',
  atributos: {
    Magia: 3370,
    Força: 0,
    Espírito: 820
  }
}

var carta5 = {
  nome: 'Gowther(Luxúria)',
  imagem: 'images/gowther.jpg',
  atributos: {
    Magia: 1300,
    Força: 500,
    Espírito: 1300
  }
}

var carta6 = {
  nome: 'Merlin(Gula)',
  imagem: 'images/merlin.png',
  atributos: {
    Magia: 3540,
    Força: 70,
    Espírito: 1100
  }
}

var carta7 = {
  nome: 'Escanor(Orgulho)',
  imagem: 'images/escanor.jpg',
  atributos: {
    Magia: 5,
    Força: 5,
    Espírito: 5
  }
}

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7]
var cartaMaquina
var cartaJogador

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 7)
  cartaMaquina = cartas[numeroCartaMaquina]

  var numeroCartaJogador = parseInt(Math.random() * 7)
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 7)
  }
  cartaJogador = cartas[numeroCartaJogador]
  console.log(cartaJogador)

  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  exibirCartaJogador()
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName('atributo')

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value
    }
  }
}

function jogar() {
  console.log('chamou')
  var atributoSelecionado = obtemAtributoSelecionado()
  var divResultado = document.getElementById('resultado')

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Você Venceu!</p>"
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Você Perdeu!</p>"
  } else if (cartaJogador.atributos[atributoSelecionado] == null) {
    alert('Selecione um atributo')
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>"
  }
  divResultado.innerHTML = htmlResultado

  document.getElementById('btnJogar').disabled = true
  exibirCartaMaquina()
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById('carta-jogador')
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
  var tagHTML = "<div id='opcoes' class='carta-status'>"

  var opcoesTexto = ''
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      ' ' +
      cartaJogador.atributos[atributo] +
      '<br>'
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>'
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById('carta-maquina')
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
  var tagHTML = "<div id='opcoes' class='carta-status'>"

  var opcoesTexto = ''
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      ' ' +
      cartaMaquina.atributos[atributo] +
      '</p>'
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>'
}
