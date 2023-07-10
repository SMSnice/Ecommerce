const contenedorGeneral = document.querySelector('#contenedorGeneral');
const contenedorCarrito = document.querySelector('#contenedorCarrito');
const spanTotal = document.querySelector('#spanTotal');
const btnComprar = document.querySelector('#btnComprar');


/* OBTENGO LOS PRODUCTOS DEL CARRITO */
let carrito = JSON.parse(localStorage.getItem("carritoLocal")) || [];

function armarEstructuraCarrito (contenedor, carritoProductos){
    carritoProductos.forEach(producto => {
        contenedor.innerHTML += `
        <div class="col-12 col-md-3">
        <div class="card">
          <img src="../imagenes/${producto.imagen}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">Precio:$${producto.precio}</p>
            <p class="card-text">Cantidad: ${producto.cantidad}</p>
            <p class="card-text">Subtotal: $${producto.subtotal}</p>
            <a class="btn-quitar btn btn-danger mt-3" id="${producto.id}"  href="#">Quitar</a>
          </div>
        </div>
      </div>
        `;
    
    })

    
    const btnQuitar = document.querySelectorAll('.btn-quitar');
    btnQuitar.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.parentNode.parentNode.parentNode.remove();

            let indexRemove = carritoProductos.findIndex(element => element.id === e.target.id);
            
            carrito.splice(indexRemove,1);
            localStorage.setItem("carritoLocal", JSON.stringify(carrito));

            // CALCULAR TOTAL 
            let total = carrito.reduce((acumulador,el)=> acumulador + el.subtotal,0);
            spanTotal.textContent = total;

            if(total == 0){
                contenedorGeneral.innerHTML = `
                <div class="text-center p-3 bg-success text-white w-100">Su carrito está vacío, porfavor seleccione un producto.</div>
                `;
            }


        });
    });


    // CALCULAR TOTAL 
    let total = carritoProductos.reduce((acumulador,el)=> acumulador + el.subtotal,0);
    spanTotal.textContent = total;
}

if(carrito.length > 0){
    armarEstructuraCarrito(contenedorCarrito, carrito);
}else{
    contenedorGeneral.innerHTML = `
    <div class="text-center p-3 bg-success text-white w-100">Su carrito está vacío, porfavor seleccione un producto.</div>
    `;
}

btnComprar.addEventListener('click', (e) => {
    e.preventDefault();
       /* LIBRERIA MOMENT  */
       const toDay = moment().format('L');
       const toDaySplit = toDay.split('/');
       const toDayParse = `${toDaySplit[1]}/${toDaySplit[0]}/${toDaySplit[2]}`;

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Muchas gracias por tu compra!',
        text:'N° de pedido 24234i32u4234 \n Fecha: ' + toDayParse,
        showConfirmButton: true,
        confirmButtonText: 'Excelente',
        timer: 6000
      }); 

      contenedorGeneral.innerHTML = `
    <div class="text-center p-3 bg-success text-white w-100">Su compra ha sido procesada.</div>
    `;
      localStorage.clear();
})


//