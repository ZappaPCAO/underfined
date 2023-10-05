document.getElementById("transferirDinero").addEventListener("click", () => {
  let montoIngresado = document.getElementById("montoTransferir").value;

  let usuarioLogg = new Usuario(JSON.parse(localStorage.getItem("usuario")))

  usuarioLogg.updateMonto(montoIngresado, false);

  localStorage.setItem("usuario", JSON.stringify(usuarioLogg));
});