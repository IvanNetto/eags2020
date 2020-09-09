/* eslint-env jest */
const valores1 = require('./valores-1')
const valores2 = require('./valores-2')
const valores3 = require('./valores-3')
const valores4 = require('./valores-4')

describe('QUESTÃO 7 - RECEBER UM NUMERO "N" E EXECUTAR AS TAREFAS PEDIDAS', () => {
    test('DADO O VALOR 3 DEVE RETORNAR O ARRAY [1, 3]', () => {
        const given = {
            n: 3
        }

        const expected = [1, 3]

        const actual = valores1(given.n)
        expect(actual).toEqual(expected)
    })

    test('DADO O VALOR 4 DEVE RETORNAR A SOMA DE 2 E 4 QUE SERÁ O INTEIRO 6', () => {
        const given = {
            n: 4
        }

        const expected = 6

        const actual = valores2(given.n)
        expect(actual).toEqual(expected)
    })

    test('DADO O VALOR 4 E 8 DEVE RETORNAR O ARRAY [5, 7]', () => {
        const given = {
            a: 4,
            b: 8
        }

        const expected = [5, 7]

        const actual = valores3(given.a, given.b)
        expect(actual).toEqual(expected)
    })

    test('DADO O VALOR 4 E 8 DEVE RETORNAR O ARRAY [3, 5, 7]', () => {
        const given = {
            a: 2,
            b: 8
        }

        const expected = [15]

        const actual = valores4(given.a, given.b)
        expect(actual).toEqual(expected)
    })
})