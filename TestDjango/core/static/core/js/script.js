document.addEventListener('DOMContentLoaded', function() {
    var formProducto = document.querySelector('form[name="form-producto"]');
    var formCliente = document.querySelector('form[name="form-cliente"]');
    var formEditarPerfil = document.querySelector('form[name="form-editar-perfil"]');

    if (formProducto) {
        formProducto.addEventListener('submit', function(event) {
            event.preventDefault();
            if (validarFormularioProducto()) {
                this.submit();
            }
        });
    }

    if (formCliente) {
        formCliente.addEventListener('submit', function(event) {
            event.preventDefault();
            if (validarFormularioCliente()) {
                this.submit();
            }
        });
    }

    if (formEditarPerfil) {
        formEditarPerfil.addEventListener('submit', function(event) {
            event.preventDefault();
            if (validarFormularioEditarPerfil()) {
                this.submit();
            }
        });
    }
});

console.log("Script cargado correctamente");
function validarRut(rut) {
    rut = rut.replace(/[.-]/g, ''); // Remover puntos y guión (si los hay)

    var rutBody = rut.slice(0, -1);
    var digitoVerificadorIngresado = rut.slice(-1).toLowerCase();

    var suma = 0;
    var multiplicador = 2;

    // Recorrer el RUT de derecha a izquierda y calcular la suma ponderada
    for (var i = rutBody.length - 1; i >= 0; i--) {
        suma += parseInt(rutBody.charAt(i)) * multiplicador;
        multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }

    // Calcular el dígito verificador esperado
    var digitoVerificadorEsperado = 11 - (suma % 11);
    if (digitoVerificadorEsperado === 11) {
        digitoVerificadorEsperado = 0;
    } else if (digitoVerificadorEsperado === 10) {
        digitoVerificadorEsperado = 'k';
    }

    // Comparar el dígito verificador ingresado con el esperado
    if (digitoVerificadorIngresado !== digitoVerificadorEsperado.toString()) {
        return 'El RUT ingresado es inválido.';
    }

    return ''; // El RUT es válido
}

function validarNombre(nombre) {
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚ\s]{3,20}$/.test(nombre)) {
        return 'El nombre ingresado es inválido.';
    }
    return ''; // El nombre es válido
}

function validarApellido(apellido) {
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚ\s]{3,20}$/.test(apellido)) {
        return 'El apellido ingresado es inválido.';
    }
    return ''; // El apellido paterno es válido
}

function validarDireccion(direccion) {
    if (direccion.trim() === '') {
        return 'La dirección no puede estar vacía.';
    }
    if (direccion.length < 5 || direccion.length > 100) {
        return 'La dirección debe tener entre 5 y 100 caracteres.';
    }
    return '';
}

function validarEmail(email) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return 'El correo electrónico ingresado es inválido.';
    }
    return ''; // El correo electrónico es válido
}

function validarCelular(celular) {
    if (!/^[0-9]{9,12}$/.test(celular)) {
        return 'El número de celular ingresado es inválido.';
    }
    return ''; // El número de celular es válido
}
function validarReclamo(reclamo) {
    if (reclamo.trim() === '') {
        return 'Por favor, ingrese su reclamo/sugerencia.';
    }
    if (reclamo.length < 20) {
        return 'El reclamo debe tener al menos 20 caracteres.';
    }
    return ''; // La motivación es válida
}

function validarTipo() {
    var tipo = document.getElementById('tipo');
    if (tipo.value === '') {
        return 'Por favor, seleccione tipo.';
    }
    return ''; // El tipo es válido
}

function validarPan(hallulla, marraqueta) {
    var marNum = parseInt(marraqueta);
    var halNum = parseInt(hallulla);
    
    // Validar si ambas cantidades son números válidos
    if (isNaN(marNum) && isNaN(halNum)) {
        return 'Debe ingresar la cantidad de pan.';
    }
    
    // Validar si ninguna cantidad es menor que cero
    if (marNum < 0 || halNum < 0) {
        return 'No puede ingresar valores negativos.';
    }

    // Validar si al menos una cantidad es mayor que cero
    if (marNum <= 0 && halNum <= 0) {
        return 'Debe ingresar la cantidad de pan.';
    }

    

    return ''; // La cantidad de pan es válida
}

function validarNombreProducto(nombre) {
    if (!/^[a-zA-Z0-9áéíóúÁÉÍÓÚ\s]{3,30}$/.test(nombre)) {
        return 'El nombre del producto es inválido. Debe tener entre 3 y 30 caracteres alfanuméricos.';
    }
    return '';
}

function validarDescripcionProducto(descripcion) {
    if (descripcion.length < 10 || descripcion.length > 200) {
        return 'La descripción debe tener entre 10 y 200 caracteres.';
    }
    return '';
}

function validarPrecio(precio) {
    if (!/^\d+(\.\d{1,2})?$/.test(precio) || parseFloat(precio) <= 0) {
        return 'El precio debe ser un número positivo con hasta dos decimales.';
    }
    return '';
}

function validarStock(stock) {
    if (!/^\d+$/.test(stock) || parseInt(stock) < 0) {
        return 'El stock debe ser un número entero no negativo.';
    }
    return '';
}

function validarCategoria(categoria) {
    if (categoria.length < 3 || categoria.length > 30) {
        return 'La categoría debe tener entre 3 y 30 caracteres.';
    }
    if (categoria.trim() === '') {
        return 'Por favor, seleccione una categoría.';
    }
    return '';
}

function validarPassword(password) {
    if (password.length < 8) {
        return 'La contraseña debe tener al menos 8 caracteres.';
    }
    return '';
}

function validarReserva(){
    var nombre = document.getElementById('nombre').value;
    var celular = document.getElementById('celular').value;
    var marNum = document.getElementById('marraqueta').value;
    var halNum = document.getElementById('hallulla').value;

    var mensajeError = '';

    mensajeError = validarNombre(nombre);
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    mensajeError = validarCelular(celular);
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    mensajeError = validarPan(halNum,marNum);
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    var aviso = "Estimado/a cliente del almacén Daniella,\n" +
                "su reserva fue ingresada exitosamente.\n" +
                "Su reserva es de "+marNum+" marraquetas y "+halNum+" hallullas.\n\n" +
                "Nos comunicaremos con usted al número indicado para confirmar su reserva.\n" +
                "¡Muchas gracias por preferirnos!\n\n" +
                "Atentamente, almacén Daniella.";
    alert(aviso);
}

function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var apellido= document.getElementById('apellido').value;
    var tipo = document.getElementById('tipo').value;
    var email = document.getElementById('email').value;
    var celular = document.getElementById('celular').value;
    var reclamo = document.getElementById('reclamo').value;

    var mensajeError = '';

    mensajeError = validarNombre(nombre);
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    mensajeError = validarApellido(apellido);
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    mensajeError = validarTipo();
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    mensajeError = validarEmail(email);
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    mensajeError = validarCelular(celular);
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    mensajeError = validarReclamo(reclamo);
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    var aviso = "Estimado/a cliente del almacén Daniella,\n" +
                "su " + tipo + " fue ingresado exitosamente.\n" +
                "La solicitud será revisada lo antes posible.\n" +
                "¡Muchas gracias por preferirnos!\n\n" +
                "Atentamente, almacén Daniella.";
    alert(aviso);

    return true; // Si todas las validaciones pasan, retornar true
}

function validarFormularioProducto() {
    console.log("Iniciando validación del formulario de producto");

    var nombreInput = document.getElementById('id_nombre');
    var descripcionInput = document.getElementById('id_descripcion');
    var precioInput = document.getElementById('id_precio');
    var stockInput = document.getElementById('id_stock');
    var categoriaInput = document.getElementById('id_categoria');

    if (!nombreInput || !descripcionInput || !precioInput || !stockInput || !categoriaInput) {
        console.error("Uno o más campos del formulario no fueron encontrados");
        return false;
    }

    var nombre = nombreInput.value;
    var descripcion = descripcionInput.value;
    var precio = precioInput.value;
    var stock = stockInput.value;
    var categoria = categoriaInput.value;

    console.log("Nombre:", nombre);
    console.log("Descripción:", descripcion);
    console.log("Precio:", precio);
    console.log("Stock:", stock);
    console.log("Categoría:", categoria);

    var mensajeError = '';

    mensajeError = validarNombreProducto(nombre);
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    mensajeError = validarDescripcionProducto(descripcion);
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    mensajeError = validarPrecio(precio);
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    mensajeError = validarStock(stock);
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    mensajeError = validarCategoria(categoria);
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    console.log("Validación exitosa");
    alert("Producto registrado con éxito.");
    return true;
}

function validarFormularioCliente() {
    console.log("Iniciando validación del formulario de cliente");

    var rutInput = document.getElementById('id_rut');
    var nombreInput = document.getElementById('id_nombre');
    var apellidoInput = document.getElementById('id_apellido');
    var celularInput = document.getElementById('id_celular');
    var direccionInput = document.getElementById('id_direccion');
    var passwordInput = document.getElementById('id_password1'); // Cambiado de id_password a id_password1

    console.log("RUT input:", rutInput);
    console.log("Nombre input:", nombreInput);
    console.log("Apellido input:", apellidoInput);
    console.log("Celular input:", celularInput);
    console.log("Dirección input:", direccionInput);
    console.log("Password input:", passwordInput);

    if (!rutInput || !nombreInput || !apellidoInput || !celularInput || !direccionInput || !passwordInput) {
        console.error("Uno o más campos del formulario no fueron encontrados");
        return false;
    }

    var rut = rutInput.value;
    var nombre = nombreInput.value;
    var apellido = apellidoInput.value;
    var celular = celularInput.value;
    var direccion = direccionInput.value;
    var password = passwordInput.value;

    var mensajeError = '';

    mensajeError = validarRut(rut);
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    mensajeError = validarNombre(nombre);
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    mensajeError = validarApellido(apellido);
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    mensajeError = validarCelular(celular);
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    mensajeError = validarDireccion(direccion);
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    mensajeError = validarPassword(password);
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    console.log("Validación exitosa");
    alert("Cliente registrado con éxito.");
    return true;
}

function validarFormularioEditarPerfil() {
    console.log("Iniciando validación del formulario de edición de perfil");

    var nombreInput = document.getElementById('id_nombre');
    var apellidoInput = document.getElementById('id_apellido');
    var celularInput = document.getElementById('id_celular');
    var direccionInput = document.getElementById('id_direccion');

    if (!nombreInput || !apellidoInput || !celularInput || !direccionInput) {
        console.error("Uno o más campos del formulario no fueron encontrados");
        return false;
    }

    var nombre = nombreInput.value;
    var apellido = apellidoInput.value;
    var celular = celularInput.value;
    var direccion = direccionInput.value;

    var mensajeError = '';

    mensajeError = validarNombre(nombre);
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    mensajeError = validarApellido(apellido);
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    mensajeError = validarCelular(celular);
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    mensajeError = validarDireccion(direccion);
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    console.log("Validación exitosa");
    alert("Perfil actualizado con éxito.");
    return true;
}

// Función para obtener una imagen aleatoria de Unsplash relacionada con un supermercado y establecerla como fondo del cuerpo
function setBackgroundImage() {
    fetch('https://api.unsplash.com/photos/random?query=supermarket&client_id=Muo0DxdFOriFaeLk_RX10rENykezs5IhvdzNANHRIv8')
    .then(response => response.json())
    .then(data => {
        const imageUrl = data.urls.regular;
        document.body.style.backgroundImage = `url('${imageUrl}')`;
    })
    .catch(error => console.error('Error al obtener la imagen:', error));
}

// Llama a setBackgroundImage() al cargar la página y luego cada 10 segundos
window.onload = function() {
    setBackgroundImage();
    setInterval(setBackgroundImage, 10000);
}