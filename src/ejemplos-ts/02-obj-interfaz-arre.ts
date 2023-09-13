
interface Alumno{ //interfaz
    matricula:number;
    nombre:string;
    email:string;
    edad:number;
}

const alumno:Alumno={ //variables
    nombre:'mario',
    email:'mario@gmail.com',
    edad:23,
    matricula:19002444
}

let mascotas=['perro','gato','perico'] //arreglo
console.table(mascotas);
mascotas[1]='nuevo gato';
mascotas.push('perico blanco');
console.table(mascotas);

let nuevoArre:(number|string)[]=[]
nuevoArre.push('RCR');
nuevoArre.push(789456123);