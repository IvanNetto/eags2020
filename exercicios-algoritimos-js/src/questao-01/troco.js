module.exports = function(valorPago, valorProduto) {

    var troco = valorProduto - valorProduto

    console.log('O valor do troco é: ' + troco)
    return valorPago - valorProduto
}