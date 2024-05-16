
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const indicadores = document.querySelector('.indicadores');
const anterior = document.querySelector('.anterior');
const siguiente = document.querySelector('.siguiente');

let indiceActivo = 0;

// Función para crear indicadores
function crearIndicadores() {
    indicadores.innerHTML = ''; // Borrar indicadores existentes
    slides.forEach((slide, i) => {
        const indicador = document.createElement('div');
        indicador.classList.add('indicador');
        if (i === indiceActivo) {
            indicador.classList.add('activo');
        }
        indicador.dataset.indice = i;
        indicadores.appendChild(indicador);
    });
}

crearIndicadores(); // Crear indicadores al cargar la página

// Función para seleccionar diapositiva
function seleccionarDiapositiva(indice) {
    slides.forEach((slide, i) => {
        slide.classList.remove('activo');
        slide.style.opacity = 0;
        slide.style.transform = `translateX(${i - indiceActivo} * 100%)`;
    });

    slides[indice].classList.add('activo');
    slides[indice].style.opacity = 1;
    slides[indice].style.transform = 'translateX(0)';

    actualizarIndicador(indice);
}

// Función para actualizar indicador activo
function actualizarIndicador(indice) {
    const indicadores = document.querySelectorAll('.indicador');
    indicadores.forEach(indicador => indicador.classList.remove('activo'));
    indicadores[indice].classList.add('activo');
}

// Evento click en indicadores
indicadores.addEventListener('click', (e) => {
    const indice = parseInt(e.target.dataset.indice);
    seleccionarDiapositiva(indice);
});

// Eventos click en botones de navegación
anterior.addEventListener('click', () => {
    if (indiceActivo === 0) {
        indiceActivo = slides.length - 1;
    } else {
        indiceActivo--;
    }

    seleccionarDiapositiva(indiceActivo);
});

siguiente.addEventListener('click', () => {
    if (indiceActivo === slides.length - 1) {
        indiceActivo = 0;
    } else {
        indiceActivo++;
    }

    seleccionarDiapositiva(indiceActivo);
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const logoPlaceholder = document.querySelector('.logo-placeholder');
  
    const scrollTop = window.pageYOffset;
    const navbarHeight = navbar.offsetHeight;
    const logoHeight = logoPlaceholder.offsetHeight;
  
    if (scrollTop > logoHeight) {
      navbar.style.opacity = 1;
    } else {
      navbar.style.opacity = scrollTop / logoHeight;
    }
  });
  
  // script.js

$(document).ready(function() {
    // Inicializar el carrusel de noticias
    $('#carouselNoticias').carousel();

    // Agregar funcionalidad a las pestañas de noticias por categoría
    $('.nav-pills a').on('show.bs.tab', function(event) {
        var categoryId = $(event.target).attr('href');
        // Cargar noticias para la categoría seleccionada
        loadNews(categoryId);
    });

    // Función para cargar noticias por categoría
    function loadNews(categoryId) {
        $.ajax({
            url: '/noticias/' + categoryId,
            method: 'GET',
            success: function(data) {
                // Procesar la respuesta y mostrar las noticias en la pestaña correspondiente
            },
            error: function(error) {
                console.error('Error al cargar noticias:', error);
            }
        });
    }
});

//contenedor
document.addEventListener("DOMContentLoaded", function(e){
    
    const parrafos = document.querySelector('.contenido');

    let alturas = [];
    let alturamaxima = 0;

    const aplicarAlturas = (function aplicarAlturas(){
        parrafos.foreach(parrafo =>{
            if(alturamaxima ==0){
                alturas.push(parrafo.clientHeight);
            }else{
                parrafo.style.height = alturamaxima +"px";
            }
        });
        return aplicarAlturas;
    })();
    alturamaxima = Math.max.apply(Math, alturas);
    aplicarAlturas();
});

// funciones del registro 

//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

    //FUNCIONES

function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
};
