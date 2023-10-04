class Usuario {
  constructor(usuario) {
    this.id = usuario.id;
    this.nombre = usuario.nombre;
    this.apellido = usuario.apellido;
    this.email = usuario.email;
    this.nombreUsuario = usuario.nombreUsuario;
    this.clave = usuario.clave;
    this.monto = 0;
    this.cvu = Math.floor(Math.random() * 10000000000000000).toString();
    this.alias = "pescado.sarten.pera";
    this.cuil = "23-40546987-2";
  }

  updateMonto(saldo, condicion) {
    if (condicion)
      // true -> va a cargar plata
      this.monto += saldo;
    else if (saldo <= this.monto) this.monto -= saldo;
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
  }),
  new Usuario({
    id: 2,
    nombre: "Franco",
    apellido: "Dreher",
    email: "none",
    nombreUsuario: "dreher23",
    clave: "dreher23",
  }),
];
