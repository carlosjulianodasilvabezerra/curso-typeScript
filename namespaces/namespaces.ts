// namespace Geometria {

//   export namespace Area {
    
//     const PI = 3.14;
    
//     export function circuferencia(raio: number): number {
//       return PI * Math.pow(raio, 2);
//     }
    
//     export function retangulo(base: number, altura: number): number {
//       return base * altura;
//     }
  
//   }

// }

///<reference path="geometriaCirc.ts"/>
///<reference path="geometriaRect.ts"/>

console.log(Geometria.Area.circuferencia(10));
console.log(Geometria.Area.retangulo(10, 20));
