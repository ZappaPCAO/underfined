class Usuario {
  constructor(usuario) {
    this.id = usuario.id;
    this.nombre = usuario.nombre;
    this.apellido = usuario.apellido;
    this.email = usuario.email;
    this.nombreUsuario = usuario.nombreUsuario;
    this.clave = usuario.clave;
    this.monto = usuario.monto;
    this.cvu = usuario.cvu;
    this.alias = usuario.alias;
    this.cuil = usuario.cuil;
  }

  updateMonto(saldo, condicion) {
    let montoAux = parseFloat(this.monto);
    let saldoAux = parseFloat(saldo);

    if (condicion)
      montoAux += saldoAux;
    else if (saldoAux <= montoAux) montoAux -= saldoAux;

    this.monto = montoAux;
  }
}

const usuarios = [
  new Usuario({
    id: 1,
    nombre: "John",
    apellido: "Doe",
    email: "john@example.com",
    nombreUsuario: "johndoe",
    clave: "password123",
    monto: 0,
    cvu:  Math.floor(Math.random() * 10000000000000000).toString(),
    alias: "pescado.sarten.pera",
    cuil: "23-40546987-2",
  }),
];