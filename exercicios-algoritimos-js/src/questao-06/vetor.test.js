/* eslint-env jest */
const vetor1 = require('./vetor-1')
const vetor2 = require('./vetor-2')
const vetor3 = require('./vetor-3')
const vetor4 = require('./vetor-4')

describe('QUESTÃO 6 - UTILIZANDO O VETOR INICIAL', () => {
    test('DADO O VETOR [32,45,89,66,12,35,10,96,38,15,13,11,65,81,35,64,16,89,54,19] DEVE RETORNAR O MENOR VALOR QUE SERÁ 11', () => {
        const given = {
            vetor: [32, 45, 89, 66, 12, 35, 10, 96, 38, 15, 13, 11, 65, 81, 35, 64, 16, 89, 54, 19]
        }

        const expected = 10
        const actual = vetor1(given.vetor)
        expect(actual).toEqual(expected)
    })

    test('DADO O VETOR [32,45,89,66,12,35,10,96,38,15,13,11,65,81,35,64,16,89,54,19] DEVE RETORNAR O MAIOR VALOR QUE SERÁ 96', () => {
        const given = {
            vetor: [32, 45, 89, 66, 12, 35, 10, 96, 38, 15, 13, 11, 65, 81, 35, 64, 16, 89, 54, 19]
        }

        const expected = 96

        const actual = vetor2(given.vetor)
        expect(actual).toEqual(expected)
    })

    test('DADO O VETOR [32,45,89,66,12,35,10,96,38,15,13,11,65,81,35,64,16,89,54,19] DEVE RETORNAR O VETOR DOS NUMEROS PARES [32,66,12,10,96,38,64,16,54]', () => {
        const given = {
            vetor: [32, 45, 89, 66, 12, 35, 10, 96, 38, 15, 13, 11, 65, 81, 35, 64, 16, 89, 54, 19]
        }

        const expected = [32, 66, 12, 10, 96, 38, 64, 16, 54]

        const actual = vetor3(given.vetor)
        expect(actual).toEqual(expected)
    })

    test('DADO O VETOR [32,45,89,66,12,35,10,96,38,15,13,11,65,81,35,64,16,89,54,19] DEVE RETORNAR O VETOR DOS NUMEROS IMPARES [45, 89, 35, 15, 13, 11, 65, 81, 35, 89, 19]', () => {
        const given = {
            vetor: [32, 45, 89, 66, 12, 35, 10, 96, 38, 15, 13, 11, 65, 81, 35, 64, 16, 89, 54, 19]
        }

        const expected = [45, 89, 35, 15, 13, 11, 65, 81, 35, 89, 19]

        const actual = vetor4(given.vetor)
        expect(actual).toEqual(expected)
    })
})