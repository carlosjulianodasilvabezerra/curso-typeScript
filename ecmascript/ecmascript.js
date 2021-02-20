"use strict";
// function normalComThis() {
//   console.log(this);
// }
// const normaComThisEspecial = normalComThis.bind(1);
// normaComThisEspecial();
// function contagemRegressiva(inicio: number = 5, fim: number = inicio - 5) {
//   console.log('Inicio', inicio);
//   while(inicio > fim) { -1
//     inicio--
//     console.log(inicio);
//   }
//   console.log('Fim');
// }
// contagemRegressiva(3);
// Rest & spread => (...Espalhar)
// spread
const numbers = [1, 2, 3, 4, 5];
console.log(Math.max(...numbers));
// Rest
function soma(...args) {
    console.log(...args); // Spread
}
soma(10, 11, 12, 13, 14, 15);
