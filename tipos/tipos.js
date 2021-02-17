"use strict";
var nome = 'Beltrano';
console.log(nome);
// nome = 19
var idade = 27;
// idade = 'Ana';
idade = 27.4;
console.log(idade);
// boolean
var possuiobbies = false;
// possuiobbies = 1;
console.log(possuiobbies);
// tipos explpicitos
var minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = '27';
//  array
var hobbies = ['Cozinhar', 'Praticar Esportes'];
console.log(hobbies);
console.log(typeof hobbies);
hobbies = [100, 200];
// hobbies = 100;
console.log(hobbies);
// tuplas
var endereco = ['Av Principal', 99, ''];
console.log(endereco);
endereco = ['Rua Importanet', 1200, 'Bloco C'];
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
var minhaCor = Cor.Azul;
console.log(minhaCor);
// any
var carro = 'BMW';
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
var calculo;
// calculo = digaOi;
// calculo();
calculo = multiplicar;
console.log(calculo(5, 5));
// objetos
var usuario = {
    nome: 'João',
    idade: 27
};
usuario = {
    idade: 31,
    nome: 'Maria'
};
// Desafio
/**
 * Criar um objeto funcionário com:
 * - Array de strings com os nomes dos supervisores
 * - Funcao de bater ponto que recebe a hora e retorna uma string
 *   -> Ponto normal (<=8)
 *   -> Fora do horário (>8)
 */
var funcionario = {
    supervisores: ['Ana', 'Maria'],
    baterPonto: function (horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
