document.getElementById("ingresarDinero").addEventListener("click", () => {
  event.preventDefault();

  let montoIngresado = document.getElementById("montoIngresar").value;
  let desde = document.getElementById("inputCvuAlias").value;
  console.log("oa");
  let usuarioLogg = new Usuario(JSON.parse(localStorage.getItem("usuario")));

  usuarioLogg.updateMonto(montoIngresado, true);

  localStorage.setItem("usuario", JSON.stringify(usuarioLogg));

  Swal.fire({
    title: "Dinero ingresado correctamente",
    text: `desde cvu/alias => ${desde}`,
    icon: "success",
    allowOutsideClick: false,
  }).then((result) => {
    if (result.isConfirmed) {
      setearItenHistorial(montoIngresado, "Ingreso de dinero");
      window.location.href = "../index.html";
    }
  });
});

//////////////////////////////////////////////
const historial = this.chequearHistEnStorage();
