const contenedorProductos = document.querySelector("#contenedorProductos");

let carrito = JSON.parse(localStorage.getItem("carritoLocal")) || [];



function notificacion(mensaje, color) {
  Toastify({
    text: mensaje,
    duration: 2000,
    close: false,
    gravity: "top", 
    position: "right", 
    stopOnFocus: true, 
    style: {
      background: color,
      
    },
  }).showToast();
}


function agregarAlCarrito(productoSeleccionado, cantidad) {
  let indiceProd = carrito.findIndex((el) => el.id === productoSeleccionado.id);
  let subtotal = parseFloat(productoSeleccionado.precio * cantidad);
  if (indiceProd != -1) {
    if (
      productoSeleccionado.verificarStock(
        carrito[indiceProd].cantidad + cantidad
      )
    ) {
      carrito[indiceProd].cantidad += cantidad;
      carrito[indiceProd].subtotal += subtotal;
      notificacion(
        "Producto agregado correctamente!",
        "linear-gradient(to right, #00b09b, #96c93d)"
      );
    } else {
      notificacion("Ha superado el stock disponible del producto.", "red");
    }
  } else {
    if (productoSeleccionado.verificarStock(cantidad)) {
      carrito.push({
        id: productoSeleccionado.id,
        imagen: productoSeleccionado.imagen,
        nombre: productoSeleccionado.nombre,
        precio: productoSeleccionado.precio,
        precio: parseFloat(productoSeleccionado.precio),
        cantidad: cantidad,
        subtotal: subtotal,
      });
      notificacion(
        "Producto agregado correctamente!",
        "linear-gradient(to right, #00b09b, #96c93d)"
      );
    } else {
      notificacion("Ha superado el stock disponible del producto.", "red");
    }
  }

  localStorage.setItem("carritoLocal", JSON.stringify(carrito));
}



async function cargarProductos(){
  const resp = await fetch('../productos.json');
  const productos = await resp.json();
  armarEstructura(contenedorProductos, productos);
}


function armarEstructura(contenedor, productos) {
  console.log(productos);
  productos.forEach((producto) => {
    contenedor.innerHTML += `
        <div class="col-12 col-md-3">
        <div class="card">
          <img src="../imagenes/${producto.imagen}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title mb-0">${producto.nombre}</h5>
            <p class="card-text">${producto.categoria}</p>
            <p class="card-text">${producto.descripcion}</p>
            <p class="card-text"><strong>$${producto.precio}</strong></p>
            <p class="card-text">Stock: ${producto.stock}</p>
            <label>Cantidad: </label>
            <input type="number" min="1" value="1">
            <a class="btn-agregar btn btn-primary mt-3" id="${producto.id}"  href="#">Añadir al carrito</a>
          </div>
        </div>
      </div>
        `;
  });

  const btnAgregar = document.querySelectorAll(".btn-agregar");
  btnAgregar.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      let prodSelecionado = arrayProductos.find(
        (element) => element.id === e.target.id
      );
      let cantidad = parseInt(e.target.previousElementSibling.value);
      agregarAlCarrito(prodSelecionado, cantidad);
      console.log(carrito);
    });
  });
}

cargarProductos();