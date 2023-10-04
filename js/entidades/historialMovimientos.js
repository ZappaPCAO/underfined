class Historial {
  constructor(historial, cantidad) {
    this.id = historial.id;
    this.tipoTransaccion = historial.tipoTransaccion;
    this.cantidad = cantidad;
    this.date = new Date();
  }
}

const historialMovimientos = [
  {
    id: 1,
    cantidad: 14500,
    date: new Date("09/17/2023"),
    tipoTransaccion: "Transferencia recibida",
  },
  {
    id: 2,
    cantidad: 23000,
    date: new Date("08/05/2023"),
    tipoTransaccion: "Ingreso de dinero",
  },
  {
    id: 3,
    cantidad: 15870.54,
    date: new Date("07/06/2023"),
    tipoTransaccion: "Transferencia enviada",
  },
  {
    id: 4,
    cantidad: 15870.54,
    date: new Date("09/19/2023 10:45:15"),
    tipoTransaccion: "Venta CRIPTO",
  },
  {
    id: 5,
    cantidad: 10.5,
    date: new Date("09/21/2023 21:59:59"),
    tipoTransaccion: "Compra CRIPTO",
  },
  {
    id: 6,
    cantidad: 1115870.993,
    date: new Date("01/19/2023 9:45:15"),
    tipoTransaccion: "Compra CRIPTO",
  },
  {
    id: 6,
    cantidad: 1115870.993,
    date: new Date("01/19/2023 9:45:15"),
    tipoTransaccion: "Compra CRIPTO",
  },
  {
    id: 6,
    cantidad: 1115870.993,
    date: new Date("01/19/2023 9:45:15"),
    tipoTransaccion: "Compra CRIPTO",
  },
  {
    id: 6,
    cantidad: 1115870.993,
    date: new Date("01/19/2023 9:45:15"),
    tipoTransaccion: "Compra CRIPTO",
  },
  {
    id: 6,
    cantidad: 1115870.993,
    date: new Date("01/19/2023 9:45:15"),
    tipoTransaccion: "Compra CRIPTO",
  },
  {
    id: 6,
    cantidad: 1115870.993,
    date: new Date("01/19/2023 9:45:15"),
    tipoTransaccion: "Compra CRIPTO",
  },
  {
    id: 1,
    cantidad: 14500,
    date: new Date("09/17/2023"),
    tipoTransaccion: "Transferencia recibida",
  },
  {
    id: 2,
    cantidad: 23000,
    date: new Date("08/05/2023"),
    tipoTransaccion: "Ingreso de dinero",
  },
  {
    id: 3,
    cantidad: 15870.54,
    date: new Date("07/06/2023"),
    tipoTransaccion: "Transferencia enviada",
  },
  {
    id: 4,
    cantidad: 15870.54,
    date: new Date("09/19/2023 10:45:15"),
    tipoTransaccion: "Venta CRIPTO",
  },
  {
    id: 5,
    cantidad: 10.5,
    date: new Date("09/21/2023 21:59:59"),
    tipoTransaccion: "Compra CRIPTO",
  },
  {
    id: 1,
    cantidad: 14500,
    date: new Date("09/17/2023"),
    tipoTransaccion: "Transferencia recibida",
  },
  {
    id: 2,
    cantidad: 23000,
    date: new Date("08/05/2023"),
    tipoTransaccion: "Ingreso de dinero",
  },
  {
    id: 3,
    cantidad: 15870.54,
    date: new Date("07/06/2023"),
    tipoTransaccion: "Transferencia enviada",
  },
  {
    id: 4,
    cantidad: 15870.54,
    date: new Date("09/19/2023 10:45:15"),
    tipoTransaccion: "Venta CRIPTO",
  },
  {
    id: 5,
    cantidad: 10.5,
    date: new Date("09/21/2023 21:59:59"),
    tipoTransaccion: "Compra CRIPTO",
  },
  {
    id: 1,
    cantidad: 14500,
    date: new Date("09/17/2023"),
    tipoTransaccion: "Transferencia recibida",
  },
  {
    id: 2,
    cantidad: 23000,
    date: new Date("08/05/2023"),
    tipoTransaccion: "Ingreso de dinero",
  },
  {
    id: 3,
    cantidad: 15870.54,
    date: new Date("07/06/2023"),
    tipoTransaccion: "Transferencia enviada",
  },
  {
    id: 4,
    cantidad: 15870.54,
    date: new Date("09/19/2023 10:45:15"),
    tipoTransaccion: "Venta CRIPTO",
  },
  {
    id: 5,
    cantidad: 10.5,
    date: new Date("09/21/2023 21:59:59"),
    tipoTransaccion: "Compra CRIPTO",
  },
  {
    id: 1,
    cantidad: 14500,
    date: new Date("09/17/2023"),
    tipoTransaccion: "Transferencia recibida",
  },
  {
    id: 2,
    cantidad: 23000,
    date: new Date("08/05/2023"),
    tipoTransaccion: "Ingreso de dinero",
  },
  {
    id: 3,
    cantidad: 15870.54,
    date: new Date("07/06/2023"),
    tipoTransaccion: "Transferencia enviada",
  },
  {
    id: 4,
    cantidad: 15870.54,
    date: new Date("09/19/2023 10:45:15"),
    tipoTransaccion: "Venta CRIPTO",
  },
  {
    id: 5,
    cantidad: 10.5,
    date: new Date("09/21/2023 21:59:59"),
    tipoTransaccion: "Compra CRIPTO",
  },
];

const diasSemana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

//Ordeno el arreglo, para q los mas recientes queden primeros.
historialMovimientos.sort((a, b) => b.date - a.date);

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

function imprimirHistorialEnHTML(historialMovimientos) {
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
      (ingresoDinero ? "+ " : "- ") +
      "$" +
      formatoArgentinoMonetario(transaccion.cantidad.toString())
    }</b></p>
        <p class="date-end"><b>${fecha}</b></p>
      </div>  
    `;

    contenedor.appendChild(card);
  }
}

this.imprimirHistorialEnHTML(historialMovimientos);
