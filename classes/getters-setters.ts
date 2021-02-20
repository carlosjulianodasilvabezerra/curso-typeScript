class Pessoa {
  private _idade: number = 0;

  get idade(): number {
    return this._idade;
  }

  set idade(value: number) {
    if(value >= 0 && value <= 120) {
      this._idade = value;
    }
  }
}

const pessoa1 = new Pessoa
pessoa1.idade = 10;
console.log(pessoa1.idade);

pessoa1.idade = -3;
console.log(pessoa1.idade);
