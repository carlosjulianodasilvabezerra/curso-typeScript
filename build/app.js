"use strict";
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
const a = 'Teste TS!';
console.log(a);
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
