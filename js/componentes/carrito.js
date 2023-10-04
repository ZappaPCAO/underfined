function chequearCarritoEnStorage() {
  let contenidoEnStorage = JSON.parse(localStorage.getItem("carritoEnStorage"));
  let array = [];

  if (contenidoEnStorage) {
    for (const objeto of contenidoEnStorage) {
      let cripto = new Cripto(objeto, objeto.cantidad);
      cripto.actualizarPrecioTotal();
      array.push(cripto);
    }
    this.imprimirTabla(array);
  }
  return array;
}

function agregarAlCarrito(idCripto) {
  let criptoEnCarrito = carrito.find((cripto) => cripto.id === idCripto);

  if (criptoEnCarrito) {
    let index = carrito.findIndex(
      (elemento) => elemento.id === criptoEnCarrito.id
    );

    carrito[index].agregarUnidad();
    carrito[index].actualizarPrecioTotal();
  } else {
    carrito.push(
      new Cripto(
        criptos.find((x) => x.id === idCripto),
        1
      )
    );
  }

  this.mostrarNotificacionCart();

  // Actualizamos el storage y el contenido de la tabla
  localStorage.setItem("carritoEnStorage", JSON.stringify(carrito));
  imprimirTabla(carrito);
}

function eliminarDelCarrito(idCripto) {
  let cripto = carrito.find((cripto) => cripto.id === idCripto);

  let index = carrito.findIndex((element) => element.id === cripto.id);

  if (cripto.cantidad > 1) {
    carrito[index].quitarUnidad();
    carrito[index].actualizarPrecioTotal();
  } else {
    carrito.splice(index, 1);
  }

  swal("Producto eliminado con éxito", "", "success");

  localStorage.setItem("carritoEnStorage", JSON.stringify(carrito));
  imprimirTabla(carrito);
}

function eliminarCarrito() {
  carrito.length = 0;
  localStorage.removeItem("carritoEnStorage");

  document.getElementById("carrito").innerHTML = "";
  document.getElementById("acciones-carrito").innerHTML = "";
}

function obtenerPrecioTotal(array) {
  return array.reduce((total, elemento) => total + elemento.precioTotal, 0);
}

function imprimirTabla(array) {
  let precioTotal = obtenerPrecioTotal(array);
  let contenedor = document.getElementById("carrito");
  contenedor.innerHTML = "";

  // Creamos el div que contendrá la tabla
  let tabla = document.createElement("div");

  // A ese div le agregaremos todos los datos de la tabla
  tabla.innerHTML = `
      <table id="tablaCarrito" class="table table-striped">
          <thead>         
              <tr>
                  <th>Cripto</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>Accion</th>
              </tr>
          </thead>

          <tbody id="bodyTabla">
          </tbody>
      </table>
  `;

  contenedor.appendChild(tabla);

  // Una vez que dibujamos la tabla, obtenemos el id del body de la tabla
  // donde imprimiremos los datos del array
  let bodyTabla = document.getElementById("bodyTabla");

  for (let cripto of array) {
    let datos = document.createElement("tr");
    datos.innerHTML = `
              <td>${cripto.nombre}</td>
              <td>${cripto.cantidad}</td>
              <td>$${cripto.precioTotal}</td>
              <td><button title="Eliminar" id="eliminar${cripto.id}" class="btn btn-dark"><i class="bi bi-trash3-fill"></i></button></td>
    `;

    bodyTabla.appendChild(datos);

    let botonEliminar = document.getElementById(`eliminar${cripto.id}`);
    botonEliminar.addEventListener("click", () =>
      eliminarDelCarrito(cripto.id)
    );
  }

  let accionesCarrito = document.getElementById("acciones-carrito");
  accionesCarrito.innerHTML = `
  <h5>PrecioTotal: $${precioTotal}</h5></br>
  <button id="vaciarCarrito" onclick="eliminarCarrito()" class="btn btn-dark">Vaciar Carrito</button>
`;
}

////////////////////////////////////////////////
const carrito = this.chequearCarritoEnStorage();
