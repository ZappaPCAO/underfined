function getIngreso(tipoTransaccion) {
  return (
    tipoTransaccion === "Transferencia recibida" ||
    tipoTransaccion === "Ingreso de dinero" ||
    tipoTransaccion === "Venta CRIPTO"
  );
}

function chequearHistEnStorage() {
  let contenidoEnStorage = JSON.parse(localStorage.getItem("usuario"));
  let array = [];

  if (contenidoEnStorage) {
    for (const objeto of contenidoEnStorage.hist) {
      let iten = new Historial(objeto);
      array.push(iten);
    }
  }
  return array;
}

function getDiaSemana(movimiento) {
  let indice = historialMovimientos.indexOf(movimiento);

  const objAnt = historialMovimientos[indice > 0 ? indice - 1 : indice];

  let fechaAnt = objAnt.date;
  let fecha = movimiento.date;

  if (moment().diff(fecha, "day") <= 1) return moment(fecha).format("hh:mm");

  if (moment().diff(fecha, "day") <= 7) {
    if (moment().diff(fechaAnt, "day") <= 1) insertLine();
    return moment(fecha).format("dddd");
  }

  if (moment().diff(fechaAnt, "day") <= 7) insertLine();
  return moment(fecha).format("L");
}

function insertLine() {
  let contenedor = document.getElementById("historial");
  let line = document.createElement("div");

  line.classList.add("line");

  contenedor.appendChild(line);
}

function imprimirHistorialEnHTML() {
  let contenedor = document.getElementById("historial");
  let ingresoDinero = false;
  let fecha;

  for (const transaccion of historialMovimientos) {
    let card = document.createElement("div");
    ingresoDinero = getIngreso(transaccion.tipoTransaccion);

    fecha = getDiaSemana(transaccion);

    card.classList.add("row", "justify-content-start", "historial-iten");

    card.innerHTML = `
      <div class="col-lg-6 historial-text">
        <p>${transaccion.tipoTransaccion} </p>
        <p>de <b>Alguien</b></p>
      </div>
      <div class="col-lg-6 historial-monto">
        <p class="monto-${ingresoDinero ? "ingreso" : "retiro"}"><b>${
      (ingresoDinero ? "+ " : "- ") + "$" + transaccion.cantidad
    }</b></p>
        <p class="date-end"><b>${fecha}</b></p>
      </div>  
    `;

    contenedor.appendChild(card);
  }
}

const historialMovimientos = chequearHistEnStorage();

//Ordeno el arreglo, para q los mas recientes queden primeros.
historialMovimientos.sort((a, b) => b.id - a.id);

this.imprimirHistorialEnHTML();
