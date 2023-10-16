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

document.getElementById("ingresarDinero").addEventListener("click", (e) => {
  e.preventDefault();

  let montoEnviar = document.getElementById("montoIngresar").value;
  let desde = document.getElementById("ingresoCvuAlias").value;
  let usuarioLogg = new Usuario(JSON.parse(localStorage.getItem("usuario"))); //Usuario en el localStorage
  let usuarios = chequearUsuariosEnStorage(); //Traigo todos los usuarios del localStorage

  let usuarioDesde = usuarios.find((u) => u.cvu == desde);

  let usuario = usuarios.find((u) => u.id == usuarioLogg.id);

  usuario
    .updateMonto(montoEnviar, false, usuarioDesde)
    .then((resultado) => {
      Swal.fire({
        title: "Transferencia exitosa",
        text: `al CVU: ${usuarioDesde.cvu}`,
        icon: "success",
        allowOutsideClick: false,
      }).then((result) => {
        setearItenHistorial(
          montoEnviar,
          "Ingreso de dinero",
          usuario,
          usuarioDesde.id,          
        );
        setearItenHistorial(
          montoEnviar,
          "Retiro de dinero",
          usuarioDesde,
          usuario.id,
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

