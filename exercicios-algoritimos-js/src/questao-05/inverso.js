module.exports = function(array) {
    var tamanho = array.length
    var arrayInverso = []

    for(i = 0; i <= tamanho; i++){
        arrayInverso[(tamanho -1) - i] = array[i]
    }

    return arrayInverso
}