class Usuario {
  constructor(usuario, hist = []) {
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
    this.hist = hist;
  }


  setearTransaccion(historial) {
    this.hist.push(historial);
  }

  updateMonto(saldo, condicion, usuario) {
    //condicion =TRUE => Transferencia ;; =FALSE => Ingreso de dinero
    const montoAux = parseFloat(this.monto);
    const usuarioMontoAux = parseFloat(usuario.monto);
    const saldoAux = parseFloat(saldo);

    return new Promise((resolve, reject) => {
      if (condicion) {
        if (saldoAux <= montoAux) {
          this.monto = montoAux - saldoAux;
          usuario.monto = usuarioMontoAux + saldoAux;
          resolve("Éxito");
        } else {
          reject("Fondos insuficientes para realizar la transacción.");
        }
      } else {
        if (saldoAux <= usuarioMontoAux) {
          this.monto = montoAux + saldoAux;
          usuario.monto = usuarioMontoAux - saldoAux;
          resolve("Éxito");
        } else {
          reject("Fondos insuficientes para realizar la transacción.");
        }
      }
    });
  }
}


