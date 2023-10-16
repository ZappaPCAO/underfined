if(!localStorage.getItem("usuarios")){
  fetch("../user.json")
    .then((response) => response.json())
    .then((data) => {
      const usuarios = data.map((usuarioData) => new Usuario(usuarioData));
      localStorage.setItem("usuarios", JSON.stringify(usuarios))
    })
    .catch((error) => console.error("Error al cargar el archivo JSON: ", error));
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let usuarios = JSON.parse(localStorage.getItem("usuarios"))

  const nombreUsuario = document.getElementById("nombreUsuario").value;
  const clave = document.getElementById("clave").value;

  const usuario = usuarios.find(
    (u) => u.nombreUsuario === nombreUsuario && u.clave === clave
  );

  if (usuario) {
    localStorage.setItem("usuario", JSON.stringify(usuario));
    window.location.href = "../index.html";
  } else {
    Swal.fire({
      title: "Credenciales incorrectas. Por favor, inténtalo de nuevo.",
      icon: "error",
    });
  }
});
