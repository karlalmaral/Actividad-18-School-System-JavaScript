/* =========================================
   Actividad 18 - School System
   JavaScript sin librerías y sin backend
   ========================================= */

/* ---------- Elementos del DOM ---------- */
const formulario = document.getElementById("form-alumno");
const btnLimpiar = document.getElementById("btn-limpiar");
const btnPromedio = document.getElementById("btn-promedio");
const btnMensaje = document.getElementById("btn-mensaje");
const parrafoMensaje = document.getElementById("mensaje");

const calificacion1 = document.getElementById("calificacion1");
const calificacion2 = document.getElementById("calificacion2");
const calificacion3 = document.getElementById("calificacion3");

/* ---------- Funciones ---------- */

// Muestra un mensaje en la página. Tipo puede ser "exito" o "error"
function mostrarMensaje(texto, tipo) {
  parrafoMensaje.textContent = texto;
  parrafoMensaje.className = tipo;
}

// Oculta cualquier mensaje que esté en pantalla
function ocultarMensaje() {
  parrafoMensaje.textContent = "";
  parrafoMensaje.className = "";
}

// Valida que las tres calificaciones estén completas, sean números y estén entre 0 y 10
function calcularPromedio() {
  const texto1 = calificacion1.value.trim();
  const texto2 = calificacion2.value.trim();
  const texto3 = calificacion3.value.trim();

  if (texto1 === "" || texto2 === "" || texto3 === "") {
    mostrarMensaje("Error: you must complete the three grades.", "error");
    return;
  }

  const nota1 = Number(texto1);
  const nota2 = Number(texto2);
  const nota3 = Number(texto3);

  if (Number.isNaN(nota1) || Number.isNaN(nota2) || Number.isNaN(nota3)) {
    mostrarMensaje("Error: the grades must be valid numbers.", "error");
    return;
  }

  if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
    mostrarMensaje("Error: the grades must be between 0 and 10.", "error");
    return;
  }

  const promedio = (nota1 + nota2 + nota3) / 3;
  mostrarMensaje("Average: " + promedio.toFixed(2), "exito");
}

// Evita que el formulario recargue la página y confirma el registro
function registrarAlumno(evento) {
  evento.preventDefault();
  mostrarMensaje("Student registered successfully (demo, no backend).", "exito");
}

// Muestra un mensaje de bienvenida
function mostrarMensajeBoton() {
  mostrarMensaje("Hello! This message was created with JavaScript (Activity 18).", "exito");
}

// Limpia el formulario y oculta los mensajes
function limpiarFormulario() {
  ocultarMensaje();
}

/* ---------- Eventos (addEventListener) ---------- */
formulario.addEventListener("submit", registrarAlumno);
btnLimpiar.addEventListener("click", limpiarFormulario);
btnPromedio.addEventListener("click", calcularPromedio);
btnMensaje.addEventListener("click", mostrarMensajeBoton);
