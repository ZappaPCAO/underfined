class Cripto {
  constructor(usuario) {
    this.id = usuario.id;
    this.nombre = usuario.nombre;
    this.apellido = usuario.apellido;
    this.email = usuario.email;
    this.nombreUsuario = usuario.nombreUsuario;
    this.clave = usuario.clave;
  }

  cambiarClave(clave) {
    if (clave != this.clave) this.clave = clave;
  }

  verificarClave(clave) {
    return clave === this.clave;
  }
}
