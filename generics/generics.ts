function echo(objeto: any) {
  return objeto
}

console.log(echo('João').length);
console.log(echo(27).length);
console.log(echo({ nome: 'João' }));

// Usando Generics
function echoMelhorado<T>(objeto: T): T {
  return objeto
}

console.log(echoMelhorado('João').length);
// console.log(echoMelhorado<number>(27).length);
console.log(echoMelhorado<number>(27));
console.log(echoMelhorado({ nome: 'João' }));

// Desafio
type Par<C, V> = { chave: C, valor: V}

class Mapa<X, Y> {
  itens: Array<Par<X, Y>> = new Array<Par<X, Y>>();

  obter(chave: X): Par<X, Y> | null {
    const resultado = this.itens.filter(i => i.chave === chave);

    return resultado ? resultado[0] : null;
  }

  colocar(par: Par<X, Y>) {
    const encontrado = this.obter(par.chave);
    if(encontrado) {
      encontrado.valor = par.valor;
    } else {
      this.itens.push(par)
    }
  }

  limpar() {
    this.itens = new Array<Par<X, Y>>()
  }

  imprimier() {
    console.log(this.itens);
  }
}