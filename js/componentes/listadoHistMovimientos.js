function getIngreso(tipoTransaccion) {
  return (
    tipoTransaccion === "Transferencia recibida" ||
    tipoTransaccion === "Ingreso de dinero" ||
    tipoTransaccion === "Venta CRIPTO"
  );
}

function getDiasTranscurridos(fechaEsp) {
  const fechaActual = new Date();
  const diferenciaFechas = fechaActual - fechaEsp;
  const diasTranscurridos = diferenciaFechas / 86400000;

  return diasTranscurridos;
}

function getDiaSemana(movimiento) {
  let indice = historialMovimientos.indexOf(movimiento);

  const objAnt = historialMovimientos[indice > 0 ? indice - 1 : indice];

  const diasTranscurridosAnt = getDiasTranscurridos(objAnt.date);
  const diasTranscurridos = getDiasTranscurridos(movimiento.date);

  if (diasTranscurridos <= 1)
    return movimiento.date.getHours() + ":" + movimiento.date.getMinutes();

  if (diasTranscurridos <= 7) {
    if (diasTranscurridosAnt <= 1) insertLine();
    return diasSemana[movimiento.date.getDay()];
  }

  if (diasTranscurridosAnt <= 7) insertLine();
  return movimiento.date.toLocaleDateString();
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
historialMovimientos.sort((a, b) => b.date - a.date);

this.imprimirHistorialEnHTML();
