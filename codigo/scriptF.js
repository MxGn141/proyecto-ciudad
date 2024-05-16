// Funciones para validar los campos del formulario
function validarTitulo() {
    const titulo = document.getElementById('titulo').value.trim();
    if (titulo === '') {
        alert('El campo "Título" es obligatorio.');
        return false;
    }
    return true;
}

function validarFecha() {
    const fecha = document.getElementById('fecha').value;
    if (fecha === '') {
        alert('El campo "Fecha y Hora de Publicación" es obligatorio.');
        return false;
    }
    return true;
}

function validarInformacionBreve() {
    const infoBreve = document.getElementById('info_breve').value.trim();
    if (infoBreve === '') {
        alert('El campo "Información Breve" es obligatorio.');
        return false;
    }
    return true;
}

function validarInformacionCompleta() {
    const infoCompleta = document.getElementById('info_completa').value.trim();
    if (infoCompleta === '') {
        alert('El campo "Información Completa" es obligatorio.');
        return false;
    }
    return true;
}

// Función para enviar el formulario
function enviarFormulario() {
    if (validarTitulo() && validarFecha() && validarInformacionBreve() && validarInformacionCompleta()) {
        alert('¡Noticia registrada correctamente!');
        // Aquí se puede implementar el código para enviar los datos a un servidor o base de datos
        // Ejemplo:
        const datos = {
            titulo: document.getElementById('titulo').value,
            fecha: document.getElementById('fecha').value,
            info_breve: document.getElementById('info_breve').value,
            info_completa: document.getElementById('info_completa').value,
            nota_prensa: document.getElementById('nota_prensa').value,
            categoria: document.getElementById('categoria').value
        };

        // Enviar datos a un servidor (código de ejemplo)
        // fetch('https://ejemplo.com/api/noticias', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(datos)
        // })
        // .then(response => response.json())
        // .then(data => console.log('Noticia enviada:', data))
        // .catch(error => console.error('Error al enviar la noticia:', error));

        // Limpiar el formulario
        document.getElementById('titulo').value = '';
        document.getElementById('fecha').value = '';
        document.getElementById('info_breve').value = '';
        document.getElementById('info_completa').value = '';
        document.getElementById('nota_prensa').value = '';
        document.getElementById('categoria').value = 'Nacionales';
    }
}

// Agregar eventos de click a los botones
const btnEnviar = document.querySelector('button[type="submit"]');
btnEnviar.addEventListener('click', enviarFormulario);


// Funciones para validar los campos del formulario (igual que antes)

// Función para mostrar una pestaña específica
function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab');
    for (const tab of tabs) {
        tab.style.display = 'none';
    }
    document.getElementById(tabName).style.display = 'block';
}

// Agregar eventos de click a los enlaces del navbar
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const tabName = event.target.getAttribute('href').substring(1);
        showTab(tabName);
    });
});

// Mostrar la pestaña "Registro" por
