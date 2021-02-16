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
