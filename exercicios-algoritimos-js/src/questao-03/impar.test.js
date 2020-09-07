/* eslint-env jest */
const impar = require('./impar')

describe('QUESTÃO 3 - RETORNAR SE UM NUMERO É IMPAR OU NÃO', () => {
    test('DADO O VALOR 7 DEVE RETORNAR TRUE', () => {
        const given = {
            n: 7
        }

        const expected = true

        const actual = impar(given.n)
        expect(actual).toEqual(expected)
    })
})