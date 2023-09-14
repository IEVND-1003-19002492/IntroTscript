import{calcularIva2, Producto} from "./05-desestructura-funciones";

const carrito:Producto[]=[{
    desc:'Telefono1',
    precio:1000
},
{
    desc:'Telefono2',
    precio: 1000
},
{
    desc: 'Telfgono1',
    precio:800
},
{
    desc:'Telefono3',
    precio:200
}]

const[total,iva]=calcularIva2(carrito);
console.log(`Total ${total}`);
console.log(`Iva ${iva}`);







//add commit push