interface Humano {
  nome: string
  idade?: number // quando usa ?, esse atributo torna opcional
  [prop: string]: any
  saudar(sobrenome: string): void 
}

function saudarComOla(pessoa: Humano) {
  console.log(`Nome: ${pessoa.nome}, idade: ${pessoa.idade}, ${pessoa.xyz}`);
}

const pessoa: Humano = {
  nome: 'João',
  idade: 27,  
  saudar(sobrenome: string) {
    console.log('Olá, meu nome é '
      + this.nome + ' ' + sobrenome);
  }
}

saudarComOla(pessoa)
// saudarComOla({ nome: 'João', idade: 27, xyz: true})
pessoa.saudar('Bezerra')


// Usando Classes...
class Cliente implements Humano {

  nome: string = ''

  saudar(sobrenome: string) {
    console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
  }

}

const meuCliente = new Cliente
meuCliente.nome = 'Han'

// Herança
interface A {
  a(): void
}

interface B {
  b(): void
}

interface ABC extends A, B {
  c(): void
}

class RrealA implements A {  
  a(): void {}
}

class RealB implements A, B {  
  a(): void {}
  b(): void {}  
}

class RealABC implements ABC {
  a(): void {}
  b(): void {}
  c(): void {}
}
