module.exports = function(a, b ,c) {

    if(a === b && b === c) {
        return 'equilátero'
    }

    if(a === b && b !== c || b == c && b !== a) {
        return 'isósceles'
    }

    return 'escaleno'

    
}