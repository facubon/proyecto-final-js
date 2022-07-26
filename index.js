









/*USE CONSTRUCTOR*/
class Producto{
    constructor (id,nombre,imagen,precio,cantidad){
        this.id=id;
        this.nombre=nombre;
        this.imagen=imagen;
        this.precio=precio;
        this.cantidad=cantidad;
    }
}

class Carrito {
    constructor (id){
    this.id =id ;
    this.productos =[];
}

    
    calcularTotal () {
        let total = 0;

        /*use el bucle for*/
        for (let i =0; i < this.productos.length; i++) {
            total = total + this.productos [i].precio;
        }
        return total;
    }
}





/*genere el catalogo de productos y los almacene en un array*/

let catalogoProductos = [];

let Producto1 = new Producto (1,"hamburguesaxxl","hamburguesa 2.jpg",1300,1);
let Producto2 = new Producto (2,"hamburguesas","hamburguesa 3.jpg",800,1);
let Producto3 = new Producto (3,"hamburguesafat", "hamburguesa 4.jpg",1000,1);
let Producto4 = new Producto (4,"hamburguesab","hamburguesa 5.jpg",1100,1);

/*los cargue*/
catalogoProductos.push(Producto1);
catalogoProductos.push(Producto2);
catalogoProductos.push(Producto3);
catalogoProductos.push(Producto4);



/*implemento DOM generando las tarjetas del producto*/ 

let cardsDiv = document.querySelector("#cards");


catalogoProductos.forEach(Producto => {
    cardsDiv.innerHTML += renderCard(Producto);
})



/*FUNCIONES + generacion de mis cards */

function renderCard (producto){
    cardRendered =
                    `<div class="card">
                        <img src="./img/${producto.imagen} " alt="" class="card-img">
                        <h2>${producto.id}.${producto.nombre}</h2>
                        <p>Carne, huevofrito, lechuga,tomate y pan de cebolla.</p>
                        <p class="precio">${producto.precio}</p>
                        <button class="botonDeCompra" id=${producto.id}>Comprar</button>
                    </div> ` 
                    return cardRendered;

                

}


function limpiarCarrito(){
    let divCarrito = document.querySelector("#carrito");
    divCarrito.innerHTML ="";

    

    
    
}

function actualizarCarrito(carrito){
    let divCarrito = document.querySelector("#carrito");
    carrito.productos.forEach(producto =>{
        divCarrito.innerHTML += renderCard(producto);
    })
    divCarrito.innerHTML +=  `<h1>$ ${carrito.calcularTotal()}</h1> `
}





/*storage*/
function renovarStorage(){
    localStorage.removeItem ("carrito");
    /* uso de JSON*/
    localStorage.setItem("carrito",JSON.stringify (carrito));

    
}

function finalizarCompra() {

    /* uso de libreria*/
    Swal.fire({
        title: 'Antes de finalizar la compra debes registrarte!',
        showClass: {
        popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
        }
    })

}

/*cargo carrito existente */

window.addEventListener ( 'DOMContentLoaded',(e)=>{
    let storage = JSON.parse (localStorage.getItem("carrito"));
    let carritoGuardado = new Carrito(storage.id, storage.productos);
    storage.productos.forEach(producto => {
        carritoGuardado.productos.push(producto);
    })
    
    limpiarCarrito();
    actualizarCarrito(carritoGuardado);
})











/*ingresar el producto al carrito de compras*/



let carrito = new Carrito (1);

let botones = document.querySelectorAll (".botonDeCompra");

/*converti el boton a un array*/
let arrayDeBotones = Array.from(botones);


/*use eventos con el "click"*/
arrayDeBotones.forEach(boton =>{
    boton.addEventListener ("click", (e) =>{
        
        let productoSeleccionado = catalogoProductos.find (producto => producto.id == e.target.id);
        carrito.productos.push(productoSeleccionado);

        

        limpiarCarrito();

        
        actualizarCarrito(carrito)

         /* storage */
        renovarStorage();
        
        /*uso de libreria*/
        Swal.fire({
            icon: 'success',
            title: 'Agregado al carrito!',
            
        })
        
        
    

    })
})


























