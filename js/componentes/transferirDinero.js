function chequearUsuariosEnStorage() {
  let contenidoEnStorage = JSON.parse(localStorage.getItem("usuarios"));
  let array = [];

  if (contenidoEnStorage) {
    for (const objeto of contenidoEnStorage) {
      let usuario = new Usuario(objeto, objeto.hist);
      
      array.push(usuario);
    }
  }
  return array;
}

document.getElementById("transferirDinero").addEventListener("click", (e) => {
  e.preventDefault();

  let montoTransferir = document.getElementById("montoTransferir").value;
  let hacia = document.getElementById("inputCvuAlias").value;
  let usuarioLogg = new Usuario(JSON.parse(localStorage.getItem("usuario"))); //Usuario en el localStorage
  let usuarios = chequearUsuariosEnStorage(); //Traigo todos los usuarios del localStorage

  let usuarioHacia = usuarios.find((u) => u.cvu == hacia);

  let usuario = usuarios.find((u) => u.id == usuarioLogg.id);

  usuario
    .updateMonto(montoTransferir, true, usuarioHacia)
    .then((resultado) => {
      Swal.fire({
        title: "Transferencia exitosa",
        text: `al CVU: ${usuarioHacia.cvu}`,
        icon: "success",
        allowOutsideClick: false,
      }).then((result) => {
        setearItenHistorial(
          montoTransferir,
          "Transferencia enviada",
          usuario,
          usuarioHacia.id
        );
        setearItenHistorial(
          montoTransferir,
          "Transferencia recibida",
          usuarioHacia,
          usuario.id
        );
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        localStorage.setItem("usuario", JSON.stringify(usuario));
        if (result.isConfirmed) {
          window.location.href = "../index.html";
        }
      });
    })
    .catch((error) => {
      Swal.fire({
        title: "Error en la transferencia",
        text: `Intentelo nuevamente`,
        icon: "error",
      });
      console.log(error);
    });
});
