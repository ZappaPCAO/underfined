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
    copiarAlPortapapeles("cvu").then((resultado) => {
      mostrarNotificacion("copiadoNotificacion").then((resultado) => {
        document.getElementById(
          "copiarCVU"
        ).innerHTML = `<i class="bi bi-clipboard-check"></i>`;
      });
    });
  });
});

cerrarSesion.addEventListener("click", () => {
  localStorage.removeItem("usuario");
  window.location.href = "../../pages/login.html"
})
