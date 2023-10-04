ingresarDinero.addEventListener("click", () => {
  let montoIngresado = document.getElementById("montoIngresar").value;

  usuarioLogg.updateMonto(montoIngresado, true);

  localStorage.setItem("usuario", JSON.stringify(usuarioLogg));

  refreshValues();
});

function ingresarDinero() {
  let valorAIngresar = prompt(`Ingrese la cantidad a ingresar: `);

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
