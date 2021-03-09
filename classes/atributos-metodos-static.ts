class Matematica {
  static PI: number = 3.14;

  static areaCirc(raio: number): number {
    return this.PI * raio * raio;
  }
}

// const m1 = new Matematica
// m1.PI = 4.2;
// console.log(m1.areaCirc(4));

Matematica.PI = 4.2;
console.log(Matematica.areaCirc(4));



class Unico {
  private static instance: Unico = new Unico;
  private constructor() {}

  static getInstance(): Unico {
    return Unico.instance;
  }

  agora() {
    return new Date
  }
}


// const erraro = new Unico

console.log(Unico.getInstance().agora());