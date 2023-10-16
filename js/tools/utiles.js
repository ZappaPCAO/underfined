moment.locale("es");

function copiarAlPortapapeles(id_elemento) {
  return new Promise((resolve) => {
    var aux = document.createElement("textarea");
    aux.innerHTML = document.getElementById(id_elemento).innerHTML;
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);

    resolve("exito");
  });
}

function setearItenHistorial(cantidad, tipo, usuario, id_hasta) {
  const id = usuario.hist.length >= 1 ? (usuario.hist[(usuario.hist.length) - 1].id) + 1 : 1;

  let iten = new Historial({
    id: id,
    tipoTransaccion: tipo,
    cantidad: formatoArgentinoMonetario(cantidad),
    date:  moment((new Date()).toLocaleString(), "L, LTS"),
    idUsuario: id_hasta,
  });

  console.log(iten)

  usuario.setearTransaccion(iten);
}

function mostrarNotificacion(id) {
  return new Promise((resolve) => {
    const notificacion = document.getElementById(id);
    notificacion.style.display = "block";

    setTimeout(() => {
      notificacion.style.display = "none";
    }, 2000); // La notificación se ocultará después de 5 segundos

    resolve("exito");
  });
}

function formatoArgentinoMonetario(cadena) {
  cadena = cadena.toString().replace(",", ".");

  const numero = parseFloat(cadena);

  if (isNaN(numero)) {
    return "formato invalido";
  }

  const formatoArgentino = numero.toLocaleString("es-AR", {
    currency: "ARS",
    minimumFractionDigits: 3,
  });

  return formatoArgentino;
}