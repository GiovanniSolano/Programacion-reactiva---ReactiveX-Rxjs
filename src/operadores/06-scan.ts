import { from } from 'rxjs';
import { reduce, scan, map } from 'rxjs/operators';
/**
 * scan: igual que reduce, cuando los valores son emitidos por el observable
 * inmediatamente van saliendo pero con el valor acumulado
 */

 const numeros = [1,2,3,4,5];

//  const totalAcumulador = (acc, cur) => {
//     return acc + cur;
//  };

const totalAcumulador = (acc, cur) => acc + cur;

// Reduce
from(numeros)
.pipe(reduce(totalAcumulador, 0))
.subscribe(console.log);

// Scan
from(numeros)
.pipe(scan(totalAcumulador, 0))
.subscribe(console.log);

// Redux

interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}
const user: Usuario[] = [
    {id: 'gio', autenticado: false, token: null},
    {id: 'gio', autenticado: true, token: 'abc'},
    {id: 'gio', autenticado: true, token: 'abc123'},
];

const state$ = from(user).pipe(
    scan<Usuario>((acc, cur) => {
        return {...acc, ...cur};
    }, {edad: 33})
);

const id$ = state$.pipe(
    map(state => state)
);

id$.subscribe(console.log);