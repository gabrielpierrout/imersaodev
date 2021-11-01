// function Converter() {
//  var valorElemento = document.getElementById('valor')
//  var valor = valorElemento.value
//  var valorDolar = parseFloat(valor)
//
//  var valorReal = valorDolar * 5.24
//
//  var elementoValorConvertido = document.getElementById('valorConvertido')
//  var valorConvertido = 'O resultado em real é R$ ' + valorReal
//  elementoValorConvertido.innerHTML = valorConvertido
// }

function Converter() {
  var valorElemento = document.getElementById('valor')
  var valor = valorElemento.value
  var valorDolar = parseFloat(valor)
  var valorReal = valorDolar * 5.24
  var elementoValorConvertido = document.getElementById('valorConvertido')
  var valorConvertido = 'O resultado em real é R$ ' + valorReal
  elementoValorConvertido.innerHTML = valorConvertido
}
