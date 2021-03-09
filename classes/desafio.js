"use strict";
// Exercício 1 - Classe
class Moto {
    constructor(nome, velocidade = 0) {
        this.nome = nome;
        this.velocidade = velocidade;
    }
    buzinar() {
        console.log('Toooooooooot');
    }
    acelerar(delta) {
        this.velocidade = this.velocidade + delta;
    }
}
const moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
// // Exercício 2 - Herança
class Object2D {
}
class Retangulo extends Object2D {
    constructor(base = 0, altura = 0) {
        super(base, altura);
        this.base = base;
        this.altura = altura;
    }
    area() {
        return this.base * this.altura;
    }
}
const retangulo1 = new Retangulo(5, 7);
console.log(retangulo1.area());
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
