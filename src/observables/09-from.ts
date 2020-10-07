/**
 * of = toma argumentos y genera una secuencia 
 * from = con base en un arreglo, iterable, promise, observable
 */

import { of, from } from "rxjs";

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('Completado')
};

const miGenerador = function*() {

   yield 1;
   yield 2;
   yield 3;
   yield 4;
   yield 5;

};

const miIterable = miGenerador();

// for(let id of miIterable) {
//     console.log(id);
// }

from(miIterable).subscribe(observer);

//  const source$ = from([1,2,3,4,5]);
//  const source$ = of([1,2,3,4,5]);

// const source$ = from('Giovanni');

const source$ = from(fetch('https://api.github.com/users/klerith'));

// source$.subscribe(async(resp) => {

//    const dataResp = await resp.json();
//    console.log(dataResp);


// });

//  source$.subscribe(observer);