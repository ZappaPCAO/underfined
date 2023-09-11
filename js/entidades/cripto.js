// Versión con uso de Storage
class Cripto {
    constructor(cripto, cantidad) {
        this.id = cripto.id;
        this.nombre = cripto.nombre;
        this.precio = cripto.precio;
        this.cantidad = cantidad;
        this.precioTotal = cripto.precio;
    }

    agregarUnidad(cantidad = 1) {
        if (cantidad > 1)
            this.cantidad += cantidad;
        else
            this.cantidad++;
    }

    quitarUnidad(cantidad = 1) {
        if (cantidad > 1 && cantidad <= this.cantidad)
            this.cantidad -= cantidad;
        else if (cantidad <= this.cantidad)
            this.cantidad--;
    }

    actualizarPrecioTotal() {
        this.precioTotal = this.precio * this.cantidad;
    }
    
}

// Constantes y variables
const criptos = [
    { id: 1, nombre: 'Bitcoin',   precio: 45000, img: "/criptos/bitcoin.jpg", cantidad: 25},
    { id: 2, nombre: 'Ethereum',  precio: 3200,  img: "/criptos/cardano.jpg", cantidad: 25},
    { id: 3, nombre: 'Ripple',    precio: 1.5,   img: "/criptos/chainlink.webp", cantidad: 25},    
    { id: 4, nombre: 'Litecoin',  precio: 150,   img: "/criptos/ethereum.jpg", cantidad: 225},
    { id: 5, nombre: 'Cardano',   precio: 2.5,   img: "/criptos/litecoin.jpg", cantidad: 225},
    { id: 6, nombre: 'Polkadot',  precio: 30,    img: "/criptos/polkadot.jpg", cantidad: 235},
    { id: 7, nombre: 'Chainlink', precio: 25,    img: "/criptos/ripple.jpg", cantidad: 245},
    { id: 8, nombre: 'Stellar',   precio: 0.7,   img: "/criptos/solana.jpg", cantidad: 2755},
    { id: 9, nombre: 'VeChain',   precio: 0.1,   img: "/criptos/stellar.jpg", cantidad: 275},
    { id: 10,nombre: 'Solana',    precio: 150,   img: "/criptos/vechain.jpg", cantidad: 285},
];

