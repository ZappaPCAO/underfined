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

function setearItenHistorial(cantidad, tipo) {
  let iten = new Historial({
    id: 1,
    tipoTransaccion: tipo,
    cantidad: formatoArgentinoMonetario(cantidad),
  });

  historial.push(iten);

  localStorage.setItem("historial", JSON.stringify(historial));
}

function chequearHistEnStorage() {
  let contenidoEnStorage = JSON.parse(localStorage.getItem("historial"));
  let array = [];

  if (contenidoEnStorage) {
    for (const objeto of contenidoEnStorage) {
      let iten = new Historial(objeto);
      array.push(iten);
    }
  }
  return array;
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
