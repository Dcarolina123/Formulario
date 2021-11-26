const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const documento = document.getElementById('documento');
const correo = document.getElementById('email');
const observaciones = document.getElementById('observaciones');
const form = document.getElementById('form');
const parrafo = document.getElementById('warnings'); 

form.addEventListener('submit', e => {
	e.preventDefault();
	let warnings = " "
	let entrar = false
	let regexemail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	parrafo.innerHTML = " "
	if(nombre.value.length < 6){
		warnings += 'El nombre no es valido <br>'
		entrar = true
	}
	if(apellido.value.length < 6){
		warnings += 'El apellido no es valido <br>'
		entrar = true
	}
	if(documento.value.length < 8){
		warnings += 'El documento no es valido <br>'
		entrar = true
	}
	if (!regexemail.test(email.value)) {
		warnings += 'El correo no es valido <br>'
		entrar = true 
	}

	if (entrar){
		parrafo.innerHTML = warnings
	}
	else {
	parrafo.innerHTML = 'Enviado'
	}
	}) 