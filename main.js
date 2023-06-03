
const PRECIO_MEMBRILLO = 60;
const PRECIO_CHIPSCHOCO = 80;
const PRECIO_OREO = 95;
const SALIR = 4;

let marca_galletitas = parseInt(prompt("Ingrese opción de galletitas 1,2,3 o 4 para SALIR, \n '1' (100 gr GALLETITAS CON MEMBRILLO/PEPAS $60), \n '2'(100 gr GALLETITAS CON CHIPS DE CHOCOLATE $80), \n '3' (100 gr GALLETITAS OREO $95), \n '4' SALIR"));
let cantidad_paquetes = parseInt(prompt("Ingrese cantidad de paquetes"));

const calcular_precio_total = (precio, cantidad_paquetes) => {
    const precio_total = precio * cantidad_paquetes;
    alert("El precio total es: $"+ precio_total);
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
        default:
            alert("ERROR. Ingrese sólo 1, 2 o 3");
            break;
    }

    marca_galletitas = parseInt(prompt("Ingrese opción de galletitas 1,2,3 o 4 para SALIR, \n '1' (100 gr GALLETITAS CON MEMBRILLO/PEPAS $60), \n '2'(100 gr GALLETITAS CON CHIPS DE CHOCOLATE $80), \n '3' (100 gr GALLETITAS OREO $95), \n '4' SALIR"));
    //cantidad_paquetes = parseInt(prompt("Ingrese cantidad de paquetes"));
}
alert("Gracias, lo esperamos pronto!")