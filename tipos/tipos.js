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
