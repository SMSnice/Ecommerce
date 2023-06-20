
const PRECIO_MEMBRILLO = 60;
const PRECIO_CHIPSCHOCO = 80;
const PRECIO_OREO = 95;
const SALIR = 6;
const ArrayGalletitas = [];
const ArrayCarrito = [];
let ID = 1;


class Galletitas{
        constructor(id, categoria, precio, descripcion){
                this.id = id;
                this.categoria = categoria;
                this.precio = precio;
                this.descripcion = descripcion;
                }
}

const galletita1 = new Galletitas(ID, "Galletitas de membrillo", 60, "Paquete de 100 gr. de galletitas de membrillo");
ArrayGalletitas.push(galletita1);

const galletita2 = new Galletitas(ID, "Galletitas con chips de chocolate", 80, "Paquete de 100 gr. de galletitas con chips de chocolate");
ArrayGalletitas.push(galletita2);

const galletita3 = new Galletitas(ID, "Galletitas tipo Oreo", 80, "Paquete de 100 gr. de galletitas tipo Oreo");
ArrayGalletitas.push(galletita3);

const AgregarCarritoCompras = (categoria) =>{
        ArrayGalletitas.filter((el)=> el.categoria === categoria); // el filter, retorna un array con los elementos cuya condicion sean verdaderas
        let salida = '';
        (ArrayGalletitas.filter((el)=> el.categoria === categoria)).forEach((el) =>{
        salida += "\n" + el.id + "-Galletitas: " + el.categoria + " " + "\nPrecio: " + el.precio
        });
        const id = parseInt(prompt(salida + "\n" + "Ingrese producto para agregar al carrito"));
        const productoEcontrado = ArrayGalletitas.find(el => el.id === id);
        ArrayGalletitas.push(productoEcontrado);
        }

const MostrarCarritoCompras = () => {
        let salida = 'Listado del Carrito de Compras \n';
        ArrayGalletitas.forEach((el) =>{
                salida += "\n" + "Galletitas: " + el.categoria + " " + "\nPrecio: " + el.precio});
        const total = ArrayGalletitas.reduce((acumulador,element) => acumulador + element.precio,0)
        salida += "\nEl total es: " + total
        alert(salida);
}


let marca_galletitas = parseInt(prompt("Ingrese categoría de galletitas 1,2,3 o 4 para SALIR, \n '1' (100 gr GALLETITAS CON MEMBRILLO/PEPAS $60) \n '2'(100 gr GALLETITAS CON CHIPS DE CHOCOLATE $80) \n '3' (100 gr GALLETITAS OREO $95) \n '4' Agregar al Carrito de Compras  \n '5' Ver Carrito de Compras  \n '6' SALIR"));

const calcular_precio_total = (precio, cantidad_paquetes) => {
    const precio_total = precio * cantidad_paquetes;
    alert("\nEl precio total es: $"+ precio_total);
  }

while(marca_galletitas != SALIR ){
let cantidad_paquetes = parseInt(prompt("Ingrese cantidad de paquetes"));

    switch(marca_galletitas){
        case 1: calcular_precio_total(PRECIO_MEMBRILLO, cantidad_paquetes);
                break;
        case 2: calcular_precio_total(PRECIO_CHIPSCHOCO, cantidad_paquetes);
                break;
        case 3: calcular_precio_total(PRECIO_OREO, cantidad_paquetes);
                break;
        case 4: AgregarCarritoCompras();
                break;
        case 5: MostrarCarritoCompras();
                break;
        case 6: 
                break;
        default:
            alert("ERROR. Ingrese sólo 1, 2, 3, 4, 5");
            break;
    }

    marca_galletitas = parseInt(prompt("Ingrese categoría de galletitas 1,2,3 o 4 para SALIR, \n '1' (100 gr GALLETITAS CON MEMBRILLO/PEPAS $60) \n '2'(100 gr GALLETITAS CON CHIPS DE CHOCOLATE $80) \n '3' (100 gr GALLETITAS OREO $95) \n '4' Agregar al Carrito de Compras  \n '5' Ver Carrito de Compras  \n '6' SALIR"));
    
}
alert("Gracias, lo esperamos pronto!")