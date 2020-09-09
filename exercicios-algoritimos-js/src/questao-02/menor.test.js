/* eslint-env jest */
const menor = require('./menor')

describe('QUESTÃO 2 - RETORNAR O MENOR VALOR DADO 4 NUMEROS INTEIROS A, B, C, D', () => {
    test('DADO OS VALORES 10, 12, 20, 100 DEVE RETORNAR 10', () => {
      const given = {
        a: 10,
        b: 12,
        c: 20,
        d: 100
      }
  
      const expected = 10
  
      const actual = menor(given.a, given.b, given.c, given.d)
      expect(actual).toEqual(expected)
    })

    test('DADO OS VALORES 55, 32, 909, 123 DEVE RETORNAR 32', () => {
        const given = {
          a: 55,
          b: 32,
          c: 909,
          d: 123
        }
    
        const expected = 32
    
        const actual = menor(given.a, given.b, given.c, given.d)
        expect(actual).toEqual(expected)
      })

      test('DADO OS VALORES 55, 32, 909, 123 DEVE RETORNAR 32', () => {
        const given = {
          a: 900,
          b: 55,
          c: 32,
          d: 123
        }
    
        const expected = 32
    
        const actual = menor(given.a, given.b, given.c, given.d)
        expect(actual).toEqual(expected)
      })

      test('DADO OS VALORES 55, 32, 909, 123 DEVE RETORNAR 32', () => {
        const given = {
          a: 900,
          b: 55,
          c: 123,
          d: 32
        }
    
        const expected = 32
    
        const actual = menor(given.a, given.b, given.c, given.d)
        expect(actual).toEqual(expected)
      })
  })