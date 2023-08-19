let products = [`gaseosa`, `agua`, `cerveza`, `vino`, `fernet`, `gin`, `vodka`];
let carrito = [];

const agregarProducto = () => {
   const productoAgregado = prompt(`que producto desea llevar?`).toLocaleLowerCase()
   if (products.includes(productoAgregado)) {
    carrito.push(productoAgregado);
    alert(`producto agregado!`)
   }else{
    alert(`no vendemos ese producto, volove la proxima!`)
   }
}
