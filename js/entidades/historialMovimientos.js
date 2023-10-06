class Historial {
  constructor(historial, idPersona = 999) {
    this.id = historial.id;
    this.tipoTransaccion = historial.tipoTransaccion;
    this.cantidad = historial.cantidad;
    this.date = new Date();
    this.idPersona = idPersona;
  }
}

// const historialMovimientos = [
//   {
//     id: 1,
//     cantidad: 14500,
//     date: new Date("09/17/2023"),
//     tipoTransaccion: "Transferencia recibida",
//   },
//   {
//     id: 2,
//     cantidad: 23000,
//     date: new Date("08/05/2023"),
//     tipoTransaccion: "Ingreso de dinero",
//   },
//   {
//     id: 3,
//     cantidad: 15870.54,
//     date: new Date("07/06/2023"),
//     tipoTransaccion: "Transferencia enviada",
//   },
//   {
//     id: 4,
//     cantidad: 15870.54,
//     date: new Date("09/19/2023 10:45:15"),
//     tipoTransaccion: "Venta CRIPTO",
//   },
//   {
//     id: 5,
//     cantidad: 10.5,
//     date: new Date("09/21/2023 21:59:59"),
//     tipoTransaccion: "Compra CRIPTO",
//   },
//   {
//     id: 6,
//     cantidad: 1115870.993,
//     date: new Date("01/19/2023 9:45:15"),
//     tipoTransaccion: "Compra CRIPTO",
//   },
//   {
//     id: 6,
//     cantidad: 1115870.993,
//     date: new Date("01/19/2023 9:45:15"),
//     tipoTransaccion: "Compra CRIPTO",
//   },
//   {
//     id: 6,
//     cantidad: 1115870.993,
//     date: new Date("01/19/2023 9:45:15"),
//     tipoTransaccion: "Compra CRIPTO",
//   },
//   {
//     id: 6,
//     cantidad: 1115870.993,
//     date: new Date("01/19/2023 9:45:15"),
//     tipoTransaccion: "Compra CRIPTO",
//   },
//   {
//     id: 6,
//     cantidad: 1115870.993,
//     date: new Date("01/19/2023 9:45:15"),
//     tipoTransaccion: "Compra CRIPTO",
//   },
//   {
//     id: 6,
//     cantidad: 1115870.993,
//     date: new Date("01/19/2023 9:45:15"),
//     tipoTransaccion: "Compra CRIPTO",
//   },
//   {
//     id: 1,
//     cantidad: 14500,
//     date: new Date("09/17/2023"),
//     tipoTransaccion: "Transferencia recibida",
//   },
//   {
//     id: 2,
//     cantidad: 23000,
//     date: new Date("08/05/2023"),
//     tipoTransaccion: "Ingreso de dinero",
//   },
//   {
//     id: 3,
//     cantidad: 15870.54,
//     date: new Date("07/06/2023"),
//     tipoTransaccion: "Transferencia enviada",
//   },
//   {
//     id: 4,
//     cantidad: 15870.54,
//     date: new Date("09/19/2023 10:45:15"),
//     tipoTransaccion: "Venta CRIPTO",
//   },
//   {
//     id: 5,
//     cantidad: 10.5,
//     date: new Date("09/21/2023 21:59:59"),
//     tipoTransaccion: "Compra CRIPTO",
//   },
//   {
//     id: 1,
//     cantidad: 14500,
//     date: new Date("09/17/2023"),
//     tipoTransaccion: "Transferencia recibida",
//   },
//   {
//     id: 2,
//     cantidad: 23000,
//     date: new Date("08/05/2023"),
//     tipoTransaccion: "Ingreso de dinero",
//   },
//   {
//     id: 3,
//     cantidad: 15870.54,
//     date: new Date("07/06/2023"),
//     tipoTransaccion: "Transferencia enviada",
//   },
//   {
//     id: 4,
//     cantidad: 15870.54,
//     date: new Date("09/19/2023 10:45:15"),
//     tipoTransaccion: "Venta CRIPTO",
//   },
//   {
//     id: 5,
//     cantidad: 10.5,
//     date: new Date("09/21/2023 21:59:59"),
//     tipoTransaccion: "Compra CRIPTO",
//   },
//   {
//     id: 1,
//     cantidad: 14500,
//     date: new Date("09/17/2023"),
//     tipoTransaccion: "Transferencia recibida",
//   },
//   {
//     id: 2,
//     cantidad: 23000,
//     date: new Date("08/05/2023"),
//     tipoTransaccion: "Ingreso de dinero",
//   },
//   {
//     id: 3,
//     cantidad: 15870.54,
//     date: new Date("07/06/2023"),
//     tipoTransaccion: "Transferencia enviada",
//   },
//   {
//     id: 4,
//     cantidad: 15870.54,
//     date: new Date("09/19/2023 10:45:15"),
//     tipoTransaccion: "Venta CRIPTO",
//   },
//   {
//     id: 5,
//     cantidad: 10.5,
//     date: new Date("09/21/2023 21:59:59"),
//     tipoTransaccion: "Compra CRIPTO",
//   },
//   {
//     id: 1,
//     cantidad: 14500,
//     date: new Date("09/17/2023"),
//     tipoTransaccion: "Transferencia recibida",
//   },
//   {
//     id: 2,
//     cantidad: 23000,
//     date: new Date("08/05/2023"),
//     tipoTransaccion: "Ingreso de dinero",
//   },
//   {
//     id: 3,
//     cantidad: 15870.54,
//     date: new Date("07/06/2023"),
//     tipoTransaccion: "Transferencia enviada",
//   },
//   {
//     id: 4,
//     cantidad: 15870.54,
//     date: new Date("09/19/2023 10:45:15"),
//     tipoTransaccion: "Venta CRIPTO",
//   },
//   {
//     id: 5,
//     cantidad: 10.5,
//     date: new Date("09/21/2023 21:59:59"),
//     tipoTransaccion: "Compra CRIPTO",
//   },
// ];

const diasSemana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];
