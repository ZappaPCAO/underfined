function chequearUserEnStorage() {
  let object = JSON.parse(localStorage.getItem("usuario"));
  let user = new Usuario(object);

  return user;
}

function refreshValues() {
  const saldo = document.getElementById("saldo");

  saldo.innerText = formatoArgentinoMonetario(usuarioLogg.monto);
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

const usuarioLogg = this.chequearUserEnStorage();
this.refreshValues();
