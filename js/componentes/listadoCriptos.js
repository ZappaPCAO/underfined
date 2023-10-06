function imprimirProductosEnHTML(criptos) {
  let contenedor = document.getElementById("listado-criptos");
  contenedor.innerHTML = ``;

  for (const cripto of criptos) {
    let card = document.createElement("div");

    card.classList.add(("card", "col-lg-3"));

    card.style.width = "18rem";

    card.innerHTML = `
      <img src="../img${cripto.img}" class="card-img-top" alt="img cripto item ${cripto.id}">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          <b>Nombre: </b><i>${cripto.nombre}</i>
          <b>Valor: </b><p>${cripto.precio}</p>
          <b>Cantidad: </b><p>${cripto.cantidad}</p>
        </p>
        <button id="comprar${cripto.id}" type="button" class="btn btn-dark"> Comprar </button>
      </div>`;

    contenedor.appendChild(card);

    let boton = document.getElementById(`comprar${cripto.id}`);
    boton.addEventListener("click", () => agregarAlCarrito(cripto.id));
  }
}

this.imprimirProductosEnHTML(criptos);
