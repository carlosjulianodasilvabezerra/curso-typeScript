// Exercício 1 - Classe

class Moto {

  constructor(public nome: string, 
    public velocidade: number = 0) { }

  buzinar(): void { 
    console.log('Toooooooooot');
  }

  acelerar(delta: number): void {
    this.velocidade = this.velocidade + delta
  }
}

const moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)

// // Exercício 2 - Herança

abstract class Object2D {
  abstract base: number
  abstract altura: number
}

class Retangulo extends Object2D {

  constructor(public base: number = 0, public altura: number = 0) {
    super(base, altura)
  }  

  area(): number {
    return this.base * this.altura
  }
}

const retangulo1 = new Retangulo(5, 7)
console.log(retangulo1.area())

// Exercício 3 - Getters & Setters
// var estagiario = {
//   _primeiroNome: ''
// }

// Object.defineProperty(estagiario, 'primeiroNome', {
//   get: function () {
//       return this._primeiroNome
//   },
//   set: function (valor) {
//       if (valor.length >= 3) {
//           this._primeiroNome = valor
//       } else {
//           this._primeiroNome = ''
//       }
//   },
//   enumerable: true,
//   configurable: true
// })

// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Le'
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Leonardo'
// console.log(estagiario.primeiroNome)