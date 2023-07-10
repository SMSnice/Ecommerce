const bbdd = [
    {
        "id":"1",
        "nombre":"Galletitas Oreo",
        "categoria":"Galletitas Dulce",
        "precio":"1500",
        "descripcion": "Galletitas Oreo sabor chocolate y crema. Paquete de 15 unidades",
        "stock":"15",
        "imagen":"../imagenes/oreo2.png"
    },
    {
        "id":"7",
        "nombre":"Galletitas de aceitunas",
        "categoria":"Galletitas saladas",
        "precio":"2900",
        "descripcion": "Galletitas sabor aceituna. Paquete de 10 unidades",
        "stock":"10",
        "imagen":"aceituna.png"
    },
    {
        "id":"8",
        "nombre":"Galletitas de oregano y queso",
        "categoria":"Galletitas saladas",
        "precio":"2850",
        "descripcion": "Galletitas sabor oregano y queso. Paquete de 8 unidades",
        "stock":"20",
        "imagen":"oreganoyqueso.png"
    },
    
    {
        "id":"4",
        "nombre":"Galletitas de vainilla con pasas de uva",
        "categoria":"Galletitas dulces",
        "precio":"2500",
        "descripcion": "Galletitas sabor vainilla con pasas de uva. Paquete de 10 unidades",
        "stock":"12",
        "imagen":"pasas.png"
    },
    {
        "id":"5",
        "nombre":"Galletitas de zanahoria",
        "categoria":"Galletitas agridulces",
        "precio":"2350",
        "descripcion": "Galletitas sabor zanahoria. Paquete de 10 unidades",
        "stock":"15",
        "imagen":"zanahoria.png"
    },
    {
        "id":"6",
        "nombre":"Galletitas de queso y almendras",
        "categoria":"Galletitas saladas",
        "precio":"2700",
        "descripcion": "Galletitas sabor queso y almendras. Paquete de 10 unidades",
        "stock":"13",
        "imagen":"quesoyalmen.png"
    },

    {
        "id":"2",
        "nombre":"Galletitas Pepas",
        "categoria":"Galletitas Dulce",
        "precio":"850",
        "descripcion": "Galletitas pepas sabor membrillo. Paquete de 10 unidades",
        "stock":"10",
        "imagen":"pepas2.png"
    },
    
    {
        "id":"3",
        "nombre":"Galletitas Chips de chocolate",
        "categoria":"Galletitas Dulce",
        "precio":"2000",
        "descripcion": "Galletitas con chips de chocolate. Paquete de 20 unidades",
        "stock":"8",
        "imagen":"chipschoco4.png"
    },
    
]

class Galletitas {
    constructor(data){
        const { id, nombre, categoria, precio, descripcion, stock, imagen  } = data;
        this.id =  id,
        this.nombre =  nombre,
        this.categoria =  categoria,
        this.precio =  precio,
        this.descripcion =  descripcion,
        this.stock =  stock,
        this.imagen = imagen
    }

    verificarStock(cantidad){
        return (this.stock >= cantidad) ? true : false;
    }
}

const arrayProductos = [new Galletitas(bbdd[0]), new Galletitas(bbdd[1]), new Galletitas(bbdd[2]), new Galletitas(bbdd[3]), new Galletitas(bbdd[4]), new Galletitas(bbdd[5]), new Galletitas(bbdd[6]), new Galletitas(bbdd[7])];


