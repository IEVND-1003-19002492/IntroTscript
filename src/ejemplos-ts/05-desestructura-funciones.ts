export interface Producto{
    desc:string;
    precio:number;

}
const telefono:Producto={
    desc:'Sony erickson',
    precio:23923,
}
const tablet:Producto={
    desc:'IPad Air',
    precio: 2398
}
function calcularIva(productos:Producto[]):number{
    let total=0;
    productos.forEach((producto)=>{
        total+=producto.precio;
    })
    return total*0.16;
}
const articulos1=[telefono,tablet];
const iva1=calcularIva(articulos1);
console.log(`IVA: ${iva1}`);

export function calcularIva2(productos:Producto[]):[number,number]{
    let total=0;
    productos.forEach(({precio})=>{
        total+=precio;
    })
    return [total, total*0.16]
}
const articulos2=[telefono,tablet];
const [total, iva]=calcularIva2(articulos2);
console.log(`Total: ${total}`);
console.log(`Iva ${iva1}`);