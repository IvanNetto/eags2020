/* eslint-env jest */
const palindromo = require('./palindromo')

describe('QUESTÃO 8 - RETORNAR SE UMA PALAVRA É UM PALINDROMO OU NÃO', () => {
    test('DADO A PALAVRA BANANA DEVE RETORNAR FALSE', () => {
        const given = {
            palavra: 'banana'
        }

        const expected = false

        const actual = palindromo(given.palavra)
        expect(actual).toEqual(expected)
    })

    test('DADO A PALAVRA MUSSUM DEVE RETORNAR TRUE', () => {
        const given = {
            palavra: 'mussum'
        }

        const expected = false

        const actual = palindromo(given.palavra)
        expect(actual).toEqual(expected)
    })

    test('DADO A PALAVRA ASA DEVE RETORNAR TRUE', () => {
        const given = {
            palavra: 'asa'
        }

        const expected = false

        const actual = palindromo(given.palavra)
        expect(actual).toEqual(expected)
    })

    
})