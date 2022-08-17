



/*variables*/


let cardsProductos = document.getElementById('cardsProductos')
let productoHamburguesa = document.getElementById('productoHamburguesa').content
let itemsHamburguesa = document.getElementById('itemsProductos')
let footer = document.getElementById('footer')
let fragment = document.createDocumentFragment()
let piecarrito = document.getElementById('piecarrito').content
let pieCarrito2 = document.getElementById('piecarrito2').content
let nCantidad
let nPrecio
let btnVaciar
let producto
let pintarCarrito
let pintarCard


/*carrito*/
let carrito = []






/*-------------events-----------------*/
document.addEventListener('DOMContentLoaded', ()=>{
    /*consiga desafio*/
	fetchData()
	if(localStorage.getItem('carrito')){
		carrito = JSON.parse(localStorage.getItem('carrito'))
		pintarCarrito()
	}
}
)

cardsProductos.addEventListener('click', e =>{
	addCarrito(e)
})

itemsHamburguesa.addEventListener('click', e=>{
	btnAccion(e)
})

/*consigna desafio*/
const fetchData = async()=>{
	try{
		const res = await fetch('hamburguesas.js')
		const data = await res.json()
		pintarCard(data)

	}catch(error){
		console.log(error)
	}
}

	pintarCard = data=>{
	data.forEach(item => {
		productoHamburguesa.querySelector('h5').textContent = item.titulo
		productoHamburguesa.querySelector('p').textContent = item.precio
		productoHamburguesa.querySelector('img').setAttribute('src', item.imagen)
		productoHamburguesa.querySelector('.btn-dark').dataset.id = item.id
		const clone = productoHamburguesa.cloneNode(true)
		fragment.appendChild(clone)
	})
	cardsProductos.appendChild(fragment)
}

const addCarrito = e =>{
	
	if(e.target.classList.contains('btn-dark')){
		setCarrito(e.target.parentElement)
	}

e.stopPropagation()
}







/*carrito de compras*/
const setCarrito = item => {
	
	const producto = {
		title: item.querySelector('h5').textContent,
		precio: item.querySelector('p').textContent,
		id: item.querySelector('.btn-dark').dataset.id,
		cantidad: 1
	}

	if(carrito.hasOwnProperty(producto.id)){
		producto.cantidad = carrito[producto.id].cantidad + 1
	}

	carrito[producto.id] = { ...producto}
	pintarCarrito()
}



/* innerHTML del carrito*/
	pintarCarrito = ()=> {
	
	itemsHamburguesa.innerHTML = ''
	Object.values(carrito).forEach(producto => {
		pieCarrito2.querySelector('th').textContent = producto.id
		pieCarrito2.querySelectorAll('td')[0].textContent = producto.title
		pieCarrito2.querySelectorAll('td')[1].textContent = producto.cantidad
		pieCarrito2.querySelector('.btn-success').dataset.id = producto.id
		pieCarrito2.querySelector('.btn-danger').dataset.id = producto.id
		pieCarrito2.querySelector('span').textContent = producto.cantidad * producto.precio
		const clone = pieCarrito2.cloneNode(true)
		fragment.appendChild(clone)
	})

	itemsHamburguesa.appendChild(fragment)

	pintarFooter()

	localStorage.setItem('carrito', JSON.stringify(carrito))

}






/* pie del carrito*/
const pintarFooter = () => {
		footer.innerHTML = ''
		if(Object.keys(carrito).length === 0){
			footer.innerHTML = `
			<th scope="row" colspan="5">Todavia no elegiste ninguna Burger!</th>
			`
			return
		}

		nCantidad = Object.values(carrito).reduce((acc, {cantidad})=> acc + cantidad, 0)
		nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0)
		
		piecarrito.querySelectorAll('td')[0].textContent = nCantidad
		piecarrito.querySelector('span').textContent = nPrecio
	
		const clone = piecarrito.cloneNode(true)
		fragment.appendChild(clone)
		footer.appendChild(fragment)
	
		btnVaciar = document.getElementById('vaciar-carrito')
		btnVaciar.addEventListener('click', ()=>{

			Swal.fire({
				icon: 'success',
				title: 'El carrito a sido borrado correctamente',
				text: 'No te quedes sin tu hamburguesa!',
			})

			carrito = []
			pintarCarrito()


		})
	}






	/*boton accion */
const btnAccion = e =>{
	
	if(e.target.classList.contains('btn-success')){
		
		producto = carrito[e.target.dataset.id]
		producto.cantidad++

		carrito[e.target.dataset.id] = {...producto}
		pintarCarrito()
	}

	if(e.target.classList.contains('btn-danger')){
		producto = carrito[e.target.dataset.id]
		producto.cantidad--
		if(producto.cantidad ===0){
			delete carrito[e.target.dataset.id]
		}
		pintarCarrito()

	}

	e.stopPropagation()
}