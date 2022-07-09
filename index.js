
/*objetivo: Implementar el DOM y EVENTOS*/



class Producto{
    constructor (id,nombre,precio){
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
    }
}


/*genere el catalogo de productos*/

let catalogoProductos = [];

let Producto1 = new Producto (1,"hamburguesaxxl",1300);
let Producto2 = new Producto (2,"hamburguesas",800);
let Producto3 = new Producto (3,"hamburguesafat",1000);
let Producto4 = new Producto (4,"hamburguesab",1100);
let Producto5 = new Producto (5,"hamburguesap",900);
let Producto6 = new Producto (6,"hamburguesav",1500);
let Producto7 = new Producto (7,"papafritas",650);
let Producto8 = new Producto (8,"nachosconcheddar",950);

catalogoProductos.push(Producto1);
catalogoProductos.push(Producto2);
catalogoProductos.push(Producto3);
catalogoProductos.push(Producto4);
catalogoProductos.push(Producto5);
catalogoProductos.push(Producto6);
catalogoProductos.push(Producto7);
catalogoProductos.push(Producto8);


/*implemento DOM y agrego en consola los productos*/

let botonUno = document.getElementById("btnEventoUno");
let botonDos = document.getElementById("btnEventoDos");
let botonTres = document.getElementById("btnEventoTres");
let botonCuatro = document.getElementById("btnEventoCuatro");
let botonCinco = document.getElementById("btnEventoCinco");
let botonSeis = document.getElementById("btnEventoSeis");
let botonSiete= document.getElementById("btnEventoSiete");
let botonOcho = document.getElementById("btnEventoOcho");


/*implemento el evento onclick para comprar y se agrega el producto a la consola*/
/*aca le agregue el producto completo directamente.... pero podria haber puesto un mensaje y mostrar la cantidad en una misma linea*/

botonUno.onclick = () =>{
    console.log(Producto1);
    }
    


botonDos.onclick = () =>{
    console.log(Producto2);
}

botonTres.onclick = () =>{
    console.log(Producto3);
}

botonCuatro.onclick = () =>{
    console.log(Producto4);
}

botonCinco.onclick = () =>{
    console.log(Producto5);
}

botonSeis.onclick = () =>{
    console.log(Producto6);
}

botonSiete.onclick = () =>{
    console.log(Producto7);
}

botonOcho.onclick = () =>{
    console.log(Producto8);
}











