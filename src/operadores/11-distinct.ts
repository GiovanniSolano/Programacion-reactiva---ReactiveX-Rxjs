import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';
/**
 * distinct: deja pasar unicamente los valores que no han sido previamente
 * emitidos por el observable
*/

const numeros$ = of(1,1,1,3,3,2,2,4,4,5,3,1);

numeros$
.pipe(distinct()) // ===
.subscribe(console.log);

interface Personaje {
    nombre: string
};

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'x'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Megaman'
    },
];

from(personajes)
.pipe(distinct(p => p.nombre))
.subscribe(console.log);