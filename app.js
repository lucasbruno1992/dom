let bienvenida = document.querySelector(".bienvenida");
let usuario = []
let nombreUsuario = prompt(`Ingrese nombre: `); //A nombreUsuario le asigno una variable que le ingreso mediante prompt
usuario.push(nombreUsuario.toUpperCase()) // Guardo en el array vacio el nombre del usuario

let contenedorBienvenida = document.createElement("div"); // Creo un elemento div en una variable contenedor
contenedorBienvenida.innerHTML = `<h3> Bienvenido/a ${usuario}</h3>`; // Modifico el interior del html 
bienvenida.appendChild(contenedorBienvenida); //Lo muestro en el html

let listaVacia = document.querySelector(".listaVacia"); 

let productos = [ //Creo mi array de objetos
    {
    id: 1,
    nombre: "te",
    precio: 100,
    categoria: "almacen",
    },
    {
    id: 2,
    nombre: "yerba",
    precio: 200,
    categoria: "almacen",
    },
    {
    id: 3,
    nombre: "aceite",
    precio: 300,
    categoria: "almacen",
    },
];

for (producto of productos) { //Lo itero y pido que me lo muestre en el DOM
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> Producto: ${producto.nombre}</h3>
    <p> Precio: $ ${producto.precio}</p>`;
    listaVacia.appendChild(contenedor);
}

