function adicionarFilme() {
  var nomeFilme = document.getElementById('nomeFilme').value
  var filmeFavorito = document.getElementById('filme').value
  console.log(nomeFilme)

  if (filmeFavorito.endsWith('.jpg')) {
    listarFilmes(nomeFilme, filmeFavorito)
  } else {
    alert('Endereço de imagem inválido!')
  }

  document.getElementById('filme').value = ''
  document.getElementById('nomeFilme').value = ''
}

function listarFilmes(nomeFilme, filmeFavorito) {
  var elementoNomeFilme = document.getElementById('nomeFilme').value
  var elementoFilmeFavorito = '<img src=' + filmeFavorito + '>'
  var listaFilmes = document.getElementById('listaFilmes')
  listaFilmes.innerHTML =
    listaFilmes.innerHTML + elementoNomeFilme + elementoFilmeFavorito
}
