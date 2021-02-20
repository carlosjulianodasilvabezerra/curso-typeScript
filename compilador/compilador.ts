let canal: string = 'Gaveta';
let inscritos: number = 610234;

// canal = inscritos
console.log(canal);

// nome = 'Pedro';
// console.log(nome);

(function(param: number) {
  console.log(param);
})(123);

function saudar(isManha: boolean, /*horas: number*/): string {
  // let a = 1;
  let saudacao: string;
  if(isManha) {
    saudacao = 'Bom dia';
  } else {  
    saudacao = 'Tenha uma boa vida!';
  }
  return saudacao
}
