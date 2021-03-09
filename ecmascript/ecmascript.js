"use strict";
// function normalComThis() {
//   console.log(this);
// }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
