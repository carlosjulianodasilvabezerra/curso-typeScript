let nome: string = 'Beltrano';
console.log(nome);
// nome = 19

let idade: number = 27;
// idade = 'Ana';
idade = 27.4;
console.log(idade);

// boolean
let possuiobbies: boolean = false;
// possuiobbies = 1;
console.log(possuiobbies);

// tipos explpicitos
let minhaIdade: number;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = '27';

//  array
let hobbies: any[] = ['Cozinhar', 'Praticar Esportes'];
console.log(hobbies);
console.log(typeof hobbies);

hobbies = [100, 200];
// hobbies = 100;
console.log(hobbies);

// tuplas
let endereco: [string, number, string] = ['Av Principal', 99, '']
console.log(endereco);

endereco = ['Rua Importanet', 1200, 'Bloco C']

// enums
enum Cor {
  Cinza,
  Verde,
  Azul
}

let minhaCor = Cor.Azul
console.log(minhaCor);

// any
let carro: any = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);

// funcao
function returnName(): string {
  return nome;
}

console.log(returnName());

function digaOi(): void {
  console.log('oi');
}

digaOi();

function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}

multiplicar(2, 2);

// tipo funcao
let calculo: (valor1: number, valor2: number) => number;
// calculo = digaOi;
// calculo();

calculo = multiplicar;
console.log(calculo(5, 5));

// objetos
let usuario: { nome: string, idade: number } = {
  nome: 'João',
  idade: 27
}

usuario = {
  idade: 31,
  nome: 'Maria'
}

// Desafio
/**
 * Criar um objeto funcionário com:
 * - Array de strings com os nomes dos supervisores
 * - Funcao de bater ponto que recebe a hora e retorna uma string
 *   -> Ponto normal (<=8)
 *   -> Fora do horário (>8)
 */

// alias
type Funcionario = {
  supervisores: string[],
  baterPonto: (horas: number) => string
}

const funcionario: Funcionario = {
  supervisores:  ['Bia', 'Carlos'],
  baterPonto(horario: number): string {
    if(horario <= 8) {
      return 'Ponto normal'
    } else {
      return 'Fora do horário'
    }
  }
}

let funcionario2: {
  supervisores: string[],
  baterPonto: (horas: number) => string
} = {
  supervisores: ['Bia', 'Carlos'],
  baterPonto(horario: number): string {
    if(horario <= 8) {
      return 'Ponto normal'
    } else {
      return 'Fora do horário'
    }
  }
}

console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(9));

// Union Types
let nota: number | string = 10;
console.log(`Minha nota é ${nota}`);

nota = '10';
console.log(`Minha nota é ${nota}`);

// Never
function falha(msg: string): never {
  throw new Error(msg);
}

const produto = {
  nome: 'Lapis',
  preco: 1,
  validarProduto() {
    if(!this.nome || this.nome.trim().length == 0) {
      falha('Precisa ter um nome');
    } 
    if(this.preco <= 0) {
      falha('Preco inválido!');
    }
  }
}

produto.validarProduto();

let altura = 12;
// altura = null

let alturaOpcional: null | number = 12;
alturaOpcional = null;

type Contato = {
  nome: string, 
  tel1: string,
  tel2: string | null
}

const contato1: Contato = {
  nome: 'Fulano',
  tel1: '99999-9999',
  tel2: null
}

console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);

// Desafio
type ContaBancaria = {
  saldo: number,
  depositar: (valor: number) => void
}

let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor) {
      this.saldo += valor
  }
}

type Correntista = {
  nome: string,
  contaBancaria: ContaBancaria,
  contatos: Array<string>
  // contatos: string[]
}

let correntista: Correntista = {
  nome: 'Ana Silva',
  contaBancaria: contaBancaria,
  contatos: ['34567890', '98765432']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)
