const cvuVector = []; //Para obtener un cvu random
for (let i = 0; i < 10; i++) {
  const cvu = Math.floor(Math.random() * 10000000000000000).toString();
  cvuVector.push(cvu);
}

function copiarAlPortapapeles(id_elemento) {
  // Crea un campo de texto "oculto", este por un textarea
  var aux = document.createElement("textarea");

  // Asigna el contenido del elemento especificado al valor del campo
  // este para vaciar el contenido
  aux.innerHTML = document.getElementById(id_elemento).innerHTML;

  // Añade el campo a la página
  document.body.appendChild(aux);

  // Selecciona el contenido del campo
  aux.select();

  // Copia el texto seleccionado
  document.execCommand("copy");

  // Elimina el campo de la página
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

btnOcultar.addEventListener("click", () => {
  const saldoElement = document.getElementById("saldo");
  const toggleButton = document.getElementById("btnOcultar");

  let saldoVisible = toggleButton.innerText === "👁️";

  if (!saldoVisible) {
    saldoElement.style.visibility = "visible";
    toggleButton.textContent = "👁️";
  } else {
    // Oculta el saldo reemplazándolo con asteriscos
    saldoElement.style.visibility = "hidden";
    toggleButton.textContent = "🙈";
  }
});

refCVU.addEventListener("click", () => {
  const indice = Math.floor(Math.random() * 10);
  console.log("oa")
  document.getElementById("cvu").innerText = cvuVector[indice].toString();
  document.getElementById("alias").innerText = "BARCO.ALPARGATA.PEZ";
  document.getElementById("cuil").inertText = "11-11111111-1";
  document.getElementById("fondo").style.display = "block";
  document.getElementById("ventanaFlotante").style.display = "block";
});
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

//****************************************************************** */
function formatoArgentinoMonetario(cadena) {
  // Reemplaza la coma con el punto (para separador decimal)
  cadena = cadena.replace(",", ".");

  // Convierte la cadena a un número con formato inglés
  const numero = parseFloat(cadena);

  // Verifica si el número es un valor numérico válido
  if (isNaN(numero)) {
    return "Formato inválido";
  }

  // Formatea el número en formato argentino
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

function ingresarDinero() {
  prompt(`Ingrese el CVU desde el cual quiere ingresar dinero: `);
  //verificar cvu proxima entregas...
  let valorAIngresar = prompt(`Ingrese la cantidad a ingresar: `);
  //ver la forma de verificar el monto en futuraws entregas...

  while (isNaN(valorAIngresar)) {
    valorAIngresar = prompt(`Ingrese una cantidad valida: `);
  }

  const saldoAct = document.getElementById("saldo");
  let cadenaAux = saldoAct.textContent.replace(".", ""); //esto lo hago para respetar el formato moneda en la vista.
  let saldoNew = parseFloat(cadenaAux.replace(",", "."));

  saldoNew = (saldoNew + parseFloat(valorAIngresar)).toFixed(2);

  cadenaAux = saldoNew.toString().replace(".", ",");

  saldoAct.innerText = setNuevoMonto(cadenaAux);
}

function setNuevoMonto(cadenaAux) {
  let cont = 0,
    j = 0;
  let cadenaFinal = [""];
  for (let i = cadenaAux.length - 4; i >= 0; i--) {
    cont++;
    cadenaFinal[j] = cadenaAux[i];

    if (cont == 3 && i - 1 >= 0) {
      cont = 0;
      j++;
      cadenaFinal[j] = ".";
    }
    j++;
  }
  cadenaFinal = cadenaFinal.reverse();
  for (let i = cadenaAux.length - 3; i < cadenaAux.length; i++) {
    cadenaFinal[j] = cadenaAux[i];
    j++;
  }
  return cadenaFinal.join("");
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
