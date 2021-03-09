"use strict";
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
