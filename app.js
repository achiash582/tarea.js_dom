// Arreglo que guarda los productos agregados al carrito
var carrito = [];

// Función que agrega un curso al carrito
function agregarAlCarrito(nombre, precio) {
  var producto = {
    nombre: nombre,
    precio: precio
  };

  carrito.push(producto);
  mostrarCarrito();
}

// Función que elimina un producto del carrito según su posición
function eliminarDelCarrito(posicion) {
  carrito.splice(posicion, 1);
  mostrarCarrito();
}

// Función que dibuja el carrito en la tabla y calcula el total
function mostrarCarrito() {
  var cuerpoCarrito = document.getElementById("cuerpoCarrito");
  cuerpoCarrito.innerHTML = "";

  var total = 0;

  for (var i = 0; i < carrito.length; i++) {
    var fila = "<tr>";
    fila += "<td>" + carrito[i].nombre + "</td>";
    fila += "<td>$" + carrito[i].precio + "</td>";
    fila += "<td><button class='eliminar' onclick='eliminarDelCarrito(" + i + ")'>Eliminar</button></td>";
    fila += "</tr>";

    cuerpoCarrito.innerHTML += fila;

    total += carrito[i].precio;
  }

  document.getElementById("totalPagar").innerText = "$" + total;
}