
interface Reproductor{
    volumen:number;
    segundos: number;
    cancion: string;
    detalles:Detalles;
}

interface Detalles{
    cantante:string;
    year:number;
}

const reproductor:Reproductor={
    volumen:90,
    segundos: 60,
    cancion: 'Mi cama',
    detalles:{
        cantante:"Teo?",
        year: 2023
    }
}
/*console.log( `El volumen actula es: ${reproductor.volumen}`);
console.log(`El cantante es: ${reproductor.detalles.cantante}`);*/

const{volumen, detalles}=reproductor
const{cantante}=detalles
console.log(`El volumen actual es:=${volumen}`);
console.log(`El cantante es: ${cantante}`);

const colores:string[]=['red','blue','green','violet'];
console.log(`Color1 : ${colores[0]}`)
console.log(`Color2 : ${colores[1]}`)
console.log(`Color3 : ${colores[2]}`)
console.log(`Color4 : ${colores[3]}`)
const[a,,,b]=colores;

console.log(`Color1 : ${a}`)
console.log(`Color2 : ${b}`)