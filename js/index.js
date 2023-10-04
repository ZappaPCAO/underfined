function chequearUserEnStorage() {
  let object = JSON.parse(localStorage.getItem("usuario"));
  let user = new Usuario(object);

  return user;
}

function refreshValues() {
  const saldo = document.getElementById("saldo");

  saldo.innerText = formatoArgentinoMonetario(usuarioLogg.monto);
}

function copiarAlPortapapeles(id_elemento) {
  var aux = document.createElement("textarea");
  aux.innerHTML = document.getElementById(id_elemento).innerHTML;
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}

function mostrarNotificacion() {
  const notificacion = document.getElementById("copiadoNotificacion");
  notificacion.style.display = "block";

  document.getElementById(
    "copiarCVU"
  ).innerHTML = `<i class="bi bi-clipboard-check"></i>`;

  setTimeout(() => {
    notificacion.style.display = "none";
  }, 2000); // La notificación se ocultará después de 5 segundos
}

function mostrarNotificacionCart() {
  const notificacion = document.getElementById("agregadoNotificacion");
  notificacion.style.display = "block";

  setTimeout(() => {
    notificacion.style.display = "none";
  }, 2000); // La notificación se ocultará después de 5 segundos
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

function realizarTransferencia() {
  prompt(`Ingrese el CVU al cual quiere transferir.`);
  //verificar CVU proxima entregas...
  let valorAtransferir = prompt(`Ingrese la cantidad a transferir: `);

  while (isNaN(valorAtransferir)) {
    valorAtransferir = prompt(`Ingrese una cantidad valida: `);
  }

  const saldoAct = document.getElementById("saldo");
  let cadenaAux = saldoAct.textContent.replace(".", ""); //esto lo hago para respetar el formato español en la vista.
  let saldoNew = parseFloat(cadenaAux.replace(",", "."));

  if (saldoNew >= valorAtransferir)
    saldoNew = (saldoNew - valorAtransferir).toFixed(2);

  cadenaAux = saldoNew.toString().replace(".", ",");

  saldoAct.textContent = setNuevoMonto(cadenaAux);
}

function convertirMonto() {
  const saldoAct = document.getElementById("saldo");
  const signoAct = document.getElementById("signo-monetario");

  let cadenaAux = saldoAct.textContent.replace(".", "");
  const saldoCurrency = parseFloat(cadenaAux.replace(",", "."));

  const baseCurrency = signoAct.textContent === "$" ? "ARS" : "USD"; // Cambia esto según la moneda base que desees utilizar
  const targetCurrency = signoAct.textContent !== "$" ? "ARS" : "USD"; // Cambia esto según la moneda objetivo que desees obtener

  const apiUrl = `https://api.exchangerate.host/convert?from=${baseCurrency}&to=${targetCurrency}&amount=${saldoCurrency}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("No se pudo obtener el tipo de cambio.");
      }
      return response.json();
    })
    .then((data) => {
      saldoAct.innerText = formatoArgentinoMonetario(data.result.toString());
      signoAct.innerText = signoAct.textContent === "$" ? "USD" : "$";
    })
    .catch((error) => {
      console.error("Error al obtener el tipo de cambio:", error);
    });
}

btnOcultar.addEventListener("click", () => {
  const saldoElement = document.getElementById("saldo");
  const toggleButton = document.getElementById("btnOcultar");

  if (
    saldoElement.style.visibility === "visible" ||
    saldoElement.style.visibility === ""
  ) {
    saldoElement.style.visibility = "hidden";
    toggleButton.innerHTML = `<i class="bi bi-eye-fill"></i>`;
    toggleButton.setAttribute("title", "ir a Modo clasico");
  } else {
    saldoElement.style.visibility = "visible";
    toggleButton.innerHTML = `<i class="bi bi-eye-slash-fill"></i>`;
    toggleButton.setAttribute("title", "ir a Modo oculto");
  }
});

refCVU.addEventListener("click", () => {
  const user = JSON.parse(localStorage.getItem("usuario"));

  document.getElementById("cvu").innerText = user.cvu;
  document.getElementById("alias").innerText = user.alias;
  document.getElementById("cuil").innerText = user.cvu;
  document.getElementById("fondo").style.display = "block";
  document.getElementById("ventanaFlotante").style.display = "block";

  const cerrarVentanaFlotante = () => {
    document.getElementById("fondo").style.display = "none";
    document.getElementById("ventanaFlotante").style.display = "none";
    document.getElementById(
      "copiarCVU"
    ).innerHTML = `<i class="bi bi-clipboard"></i>`;
    document.getElementById("copiadoNotificacion").style.display = "none";
  };

  cerrarvf.addEventListener("click", cerrarVentanaFlotante);
  fondo.addEventListener("click", cerrarVentanaFlotante);

  copiarCVU.addEventListener("click", () => {
    copiarAlPortapapeles("cvu");
    mostrarNotificacion();
  });
});

const usuarioLogg = this.chequearUserEnStorage();
this.refreshValues();
