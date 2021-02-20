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
