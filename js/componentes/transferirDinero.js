document.getElementById("transferirDinero").addEventListener("click", () => {
  event.preventDefault();

  let montoTransferir = document.getElementById("montoTransferir").value;
  let desde = document.getElementById("inputCvuAlias").value;

  let usuarioLogg = new Usuario(JSON.parse(localStorage.getItem("usuario")));

  usuarioLogg.updateMonto(montoTransferir, false);

  localStorage.setItem("usuario", JSON.stringify(usuarioLogg));

  Swal.fire({
    title: "Transferencia exitosa",
    text: `a cvu/alias => ${desde}`,
    icon: "success",
    allowOutsideClick: false,
  }).then((result) => {
    if (result.isConfirmed) {
      setearItenHistorial(montoTransferir, "Transferencia enviada");
      window.location.href = "../index.html";
    }
  });
});

//////////////////////////////////////////////
const historial = this.chequearHistEnStorage();
