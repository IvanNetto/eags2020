/* eslint-env jest */
const triangulo = require('./triangulo')

describe('QUESTÃO 4 - DADO 3 VALORES INTEIROS QUE SÃO OS LADOS DE UM TRIANGULO RETORNE SE O TRINGULA É EQUILATEDO, ISOSCELES OU ESCALENO', () => {
    test('DADO OS VALOR 4, 5, 7 DEVE RETORNAR ESCALENO', () => {
      const given = {
        a: 4,
        b: 5,
        c: 7
      }
  
      const expected = 'escaleno'
  
      const actual = triangulo(given.a, given.b, given.c)
      expect(actual).toEqual(expected)
    })
    test('DADO OS VALOR 4, 7, 7 DEVE RETORNAR ISÓSCELES', () => {
        const given = {
          a: 4,
          b: 5,
          c: 7
        }
    
        const expected = 'isósceles'
    
        const actual = triangulo(given.a, given.b, given.c)
        expect(actual).toEqual(expected)
      })
      test('DADO OS VALORES 7, 7, 7 DEVE RETORNAR EQUILÁTERO', () => {
        const given = {
          a: 7,
          b: 7,
          c: 7
        }
    
        const expected = 'equilátero'
    
        const actual = triangulo(given.a, given.b, given.c)
        expect(actual).toEqual(expected)
      })
  })