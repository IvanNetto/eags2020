/* eslint-env jest */
const inverso = require('./inverso')

describe('QUESTÃO 5 - DADO UM VETOR RETORNE-O EM SUA ORDEM INVERSA', () => {
    test('DADO O VETOR [1, 2, 3, 4, 5, 6] DEVE RETORNAR O VETOR [6, 5, 4, 3, 2, 1]', () => {
      const given = {
        vetor = [1, 2, 3, 4, 5, 6]
      }
  
      const expected = [6, 5, 4, 3, 2, 1]
  
      const actual = inverso(given.vetor)
      expect(actual).toEqual(expected)
    })

    test('DADO O VETOR [a, b, c, d, e, f] DEVE RETORNAR O VETOR [f, e, d, c, b, a]', () => {
        const given = {
          vetor = ['a', 'b', 'c', 'd', 'e', 'f']
        }
    
        const expected = ['f', 'e', 'd', 'c', 'b', 'a']
    
        const actual = inverso(given.vetor)
        expect(actual).toEqual(expected)
      })
  })