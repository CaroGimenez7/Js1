// let products = [`gaseosa`, `agua`, `cerveza`, `vino`, `fernet`, `gin`, `vodka`];
// let carrito = [];

// const agregarProducto = () => {
//    const productoAgregado = prompt(`que producto desea llevar?`).toLocaleLowerCase()
//    if (products.includes(productoAgregado)) {
//     carrito.push(productoAgregado);
//     alert(`producto agregado!`)
//    }else{
//     alert(`no vendemos ese producto, volove la proxima!`)
//    }
// }

// const mostrarCarrito = () => {
//    alert(`tus productos seleccionados son: ` + carrito.join(`\n `)) // \n hace un salto de linea

// }

// const buscarUnProducto = () => {
//    const producABuscar = prompt(`ingrese el producto que desea buscar`).toLocaleLowerCase()
//    const productoEncontrado = carrito.find(producto => producto == producABuscar )
//    alert(productoEncontrado)

// }

// const buscarcoincidencias = () => {
//    const buscar = prompt(`buscar coincidencias`).toLocaleLowerCase();
//    const resultado = products.filter(producto => producto.includes(buscar));
//    alert(resultado)
// }

// const eliminarProducto = () => {
//    productoAEliminar = prompt(`ingrese el producto que desea eliminar`);
//    const productoSeleccionado = carrito.indexOf(productoAEliminar)
//    if (carrito.includes(productoAEliminar)) {
//       carrito.splice(productoSeleccionado, 1)
//       alert(`producto eliminado correctamente`)
//    }else{
//       alert(`producto no encontrado`)
//    }
// }