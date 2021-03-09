"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Matematica {
    static areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
Matematica.PI = 3.14;
// const m1 = new Matematica
// m1.PI = 4.2;
// console.log(m1.areaCirc(4));
Matematica.PI = 4.2;
console.log(Matematica.areaCirc(4));
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico;
// const erraro = new Unico
console.log(Unico.getInstance().agora());
// class Data {
//   dia: number;
//   public mes: number;
//   ano: number;
//   constructor(dia: number = 1, mes: number = 1,
//     ano: number = 1970) {
//     this.dia = dia;
//     this.mes = mes;
//     this.ano = ano;
//   }
// }
// const aniversario = new Data(3, 11, 1991);
// aniversario.dia = 4;
// console.log(aniversario.dia);
// console.log(aniversario);
// const casamento = new Data
// casamento.ano = 2017
// console.log(casamento);
// class Data {
//   constructor(public dia: number = 1, public mes: number = 1,
//     public ano: number = 1970) { }
// }
// const aniversario = new Data(3, 11, 1991);
// aniversario.dia = 4;
// console.log(aniversario.dia);
// console.log(aniversario);
// const casamento = new Data
// casamento.ano = 2017
// console.log(casamento);
// class Produto {
//   constructor(public nome: string, public preco: number,
//     public desconto: number = 0) {}
// }
// const produto1 = new Produto('Caneta', 1.99);
// console.log(produto1);
// const produto2 = new Produto('Lápis', 2.40, 0.4);
// console.log(produto2);
// class Produto {
//   constructor(public nome: string, public preco: number,
//     public desconto: number = 0) {}
//   public resumo(): string {
//     return `${this.nome} custa R$${this.preco} (${this.desconto * 100}% off)`
//   }
// }
// const produto1 = new Produto('Caneta', 1.99);
// console.log(produto1);
// const produto2 = new Produto('Lápis', 2.40, 0.4);
// console.log(produto2.resumo());
// class Produto {
//   constructor(public nome: string, public preco: number,
//     public desconto: number = 0) {}
//   private precoComDesconto(): number {
//     return this.preco * (1 - this.desconto)
//   }  
//   public resumo(): string {
//     return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% off)`
//   }
// }
// const produto1 = new Produto('Caneta', 1.99);
// produto1.desconto = 0.05;
// console.log(produto1.resumo());
// const produto2 = new Produto('Lápis', 2.40, 0.4);
// console.log(produto2.resumo());
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
}
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
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(value) {
        if (value >= 0 && value <= 120) {
            this._idade = value;
        }
    }
}
const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1.idade);
pessoa1.idade = -3;
console.log(pessoa1.idade);
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Snake extends Animal {
    constructor(name) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
let canal = 'Gaveta';
let inscritos = 610234;
// canal = inscritos
console.log(canal);
// nome = 'Pedro';
// console.log(nome);
(function (param) {
    console.log(param);
})(123);
function saudar(isManha) {
    // let a = 1;
    let saudacao;
    if (isManha) {
        saudacao = 'Bom dia';
    }
    else {
        saudacao = 'Tenha uma boa vida!';
    }
    return saudacao;
}
// function normalComThis() {
//   console.log(this);
// }
function esperar3s(callback) {
    setTimeout(() => {
        callback('3s depois..');
    }, 3000);
}
const fn = (resultado) => console.log(resultado);
esperar3s(fn);
// Promise
function esperar3sPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('3s depois Promise...');
        }, 3000);
    });
}
esperar3sPromise()
    .then(dado => console.log(dado));
// async/waint
function resultado() {
    return __awaiter(this, void 0, void 0, function* () {
        let resul = yield esperar3sPromise();
        console.log(resul);
    });
}
resultado();
const a = 'Teste TS!';
console.log(a);
var Geometria;
(function (Geometria) {
    let Area;
    (function (Area) {
        const PI = 3.14;
        function circuferencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Area.circuferencia = circuferencia;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
var Geometria;
(function (Geometria) {
    let Area;
    (function (Area) {
        function retangulo(base, altura) {
            return base * altura;
        }
        Area.retangulo = retangulo;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
// namespace Geometria {
//   export namespace Area {
//     const PI = 3.14;
//     export function circuferencia(raio: number): number {
//       return PI * Math.pow(raio, 2);
//     }
//     export function retangulo(base: number, altura: number): number {
//       return base * altura;
//     }
//   }
// }
///<reference path="geometriaCirc.ts"/>
///<reference path="geometriaRect.ts"/>
console.log(Geometria.Area.circuferencia(10));
console.log(Geometria.Area.retangulo(10, 20));
let nome = 'Beltrano';
console.log(nome);
// nome = 19
let idade = 27;
// idade = 'Ana';
idade = 27.4;
console.log(idade);
// boolean
let possuiobbies = false;
// possuiobbies = 1;
console.log(possuiobbies);
// tipos explpicitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = '27';
//  array
let hobbies = ['Cozinhar', 'Praticar Esportes'];
console.log(hobbies);
console.log(typeof hobbies);
hobbies = [100, 200];
// hobbies = 100;
console.log(hobbies);
// tuplas
let endereco = ['Av Principal', 99, ''];
console.log(endereco);
endereco = ['Rua Importanet', 1200, 'Bloco C'];
// enums
var Cor;
// enums
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
let minhaCor = Cor.Azul;
console.log(minhaCor);
// any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
// funcao
function returnName() {
    return nome;
}
console.log(returnName());
function digaOi() {
    console.log('oi');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
multiplicar(2, 2);
// tipo funcao
let calculo;
// calculo = digaOi;
// calculo();
calculo = multiplicar;
console.log(calculo(5, 5));
// objetos
let usuario = {
    nome: 'João',
    idade: 27
};
usuario = {
    idade: 31,
    nome: 'Maria'
};
const funcionario = {
    supervisores: ['Bia', 'Carlos'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
let funcionario2 = {
    supervisores: ['Bia', 'Carlos'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(9));
// Union Types
let nota = 10;
console.log(`Minha nota é ${nota}`);
nota = '10';
console.log(`Minha nota é ${nota}`);
// Never
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Lapis',
    preco: 1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preco inválido!');
        }
    }
};
produto.validarProduto();
let altura = 12;
// altura = null
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'Fulano',
    tel1: '99999-9999',
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
