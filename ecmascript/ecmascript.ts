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
// const numbers = [1, 2, 3, 4, 5]
// console.log(Math.max(...numbers));

// // Rest
// function soma(...args: Array<number>) { // Rest
//   console.log(...args); // Spread
// }

// soma(10, 11, 12, 13, 14, 15)


// callback
type Callback = (dados: string) => void

function esperar3s(callback: Callback) { 
  setTimeout(() => {
    callback('3s depois..');
  }, 3000);
}

const fn = (resultado: string) => console.log(resultado);
esperar3s(fn);

// Promise
function esperar3sPromise() { 
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('3s depois Promise...');
    }, 3000);
  })
}

esperar3sPromise()
  .then(dado => console.log(dado))

// async/waint
async function resultado() {
  let resul = await esperar3sPromise();
  console.log(resul);
}

resultado();
