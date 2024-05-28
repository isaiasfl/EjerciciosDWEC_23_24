/**
 * @author: José Manuel Cordó Castillo
 * @description: Crea un simulador de vehículos en JavaScript. Define una clase base Vehiculo con
propiedades comunes como marca, modelo, anio, y un método acelerar. Luego, crea dos clases
derivadas, Coche y Moto, que hereden de Vehiculo y tengan métodos específicos, como arrancar
y frenar. Este script contiene el ejercicio realizado con Funciones Constructoras.
 */

// ------------------- IMPORTS -------------------
import { CocheFunction, MotoFunction } from "./assets/modules";

// ------------------- VARIABLES GLOBALES -------------------
//Variables relacionadas con Coche
const startCarButton = document.getElementById("car-start");
const acelerarCarButton = document.getElementById("car-acelerar");
const stopCarButton = document.getElementById("car-stop");
const carModelForm = document.getElementById("modelo");
const carYearForm = document.getElementById("anio");
const carBrandForm = document.getElementById("marca");
const carWindow = document.getElementById("car");
//Variables relacionadas con Moto
const startMotoButton = document.getElementById("moto-start");
const acelerarMotoButton = document.getElementById("moto-acelerar");
const stopMotoButton = document.getElementById("moto-stop");
const motoModelForm = document.getElementById("m-modelo");
const motoYearForm = document.getElementById("m-anio");
const motoBrandForm = document.getElementById("m-marca");
const motoWindow = document.getElementById("motorbike");
let coche = null;
let moto = null;

// ------------------- FUNCIONES -------------------
//COCHE
/**
 * Esta función se encarga de crear el coche y ponerlo en marcha
 * @param {Event} e - El evento que activa la función, en este caso será el click sobre el botón correspondiente
 */
const handleStartButton = (e) => {
  //Desactivamos el reload de la página al darle click al botón del formulario
  e.preventDefault();
  //Recogemos la info del formulario y creamos un objeto Coche utilizando funciones constructoras
  const marca = carBrandForm.value;
  const anio = carYearForm.value;
  const modelo = carModelForm.value;
  coche = new CocheFunction(marca, modelo, anio);
  console.log(coche);
  //console.log(Object.acelerar());
  //Arrancamos el coche
  coche.arrancar();
  //Introducimos en el bloque HTML correspondiente la información del coche y la imagen
  carWindow.innerHTML = `<p>${coche.marca}, ${coche.modelo}, ${
    coche.anio
  } -----> <span id="velocidad">${coche.velocidad * 10} km/h</span></p>`;
  carWindow.innerHTML += '<img id="coche" src="./assets/img/car.png" />';
};

/**
 * Esta función se encarga de ir acelerando la animación que hace el coche
 * @param {Event} e - El evento que activa la función, en este caso será el click sobre el botón correspondiente
 */
const handleAcelerarButton = (e) => {
  //Desactivamos el reload de la página al darle click al botón del formulario
  e.preventDefault();
  //Si el coche está arrancado, vamos actualizando la velocidad y cambiando la duración de la animación
  //para hacerla más rápida
  if (coche !== null) {
    if (coche.velocidad > 0) {
      const speedShow = document.getElementById("velocidad");
      coche.acelerar();
      speedShow.innerHTML = `${coche.velocidad * 10} km/h`;
      const imgCoche = document.getElementById("coche");
      const imagenStyle = window.getComputedStyle(imgCoche);
      const currentAnimationTime = parseFloat(
        imagenStyle.getPropertyValue("animation-duration")
      );
      if (coche.velocidad < 10) {
        imgCoche.style.animationDuration = currentAnimationTime - 1 + "s";
      } else {
        alert("El coche no puede acelerar más");
      }
    } else {
      alert("Debes arrancar primero el coche!");
    }
  } else {
    alert("Debes arrancar primero el coche!");
  }
};

/**
 * Esta función detiene el coche y actualiza la velocidad a 0
 * @param {Event} e - El evento que activa la función, en este caso será el click sobre el botón correspondiente
 */
const handleStopButton = (e) => {
  //Desactivamos el reload de la página al darle click al botón del formulario
  e.preventDefault();
  //Si el coche está en marcha, actualizamos la velocidad a 0 y paramos la animación
  if (coche !== null) {
    if (coche.velocidad > 0) {
      const speedShow = document.getElementById("velocidad");
      coche.frenar();
      speedShow.innerHTML = `${coche.velocidad} km/h`;
      const imgCoche = document.getElementById("coche");
      imgCoche.style.animationDuration = "0s";
    }
  }
};

//MOTO
/**
 * Esta función se encarga de crear la moto y ponerla en marcha
 * @param {Event} e - El evento que activa la función, en este caso será el click sobre el botón correspondiente
 */
const handleMotoStartButton = (e) => {
  //Desactivamos el reload de la página al darle click al botón del formulario
  e.preventDefault();

  //Recogemos la info del formulario y creamos un objeto Moto utilizando funciones constructoras.
  const marca = motoBrandForm.value;
  const anio = motoYearForm.value;
  const modelo = motoModelForm.value;
  moto = new MotoFunction(marca, modelo, anio);

  //Arrancamos la moto
  moto.arrancar();

  //Introducimos en el bloque HTML correspondiente la información del coche y la imagen
  motoWindow.innerHTML = `<p>${moto.marca}, ${moto.modelo}, ${
    moto.anio
  } -----> <span id="m-velocidad">${moto.velocidad * 10} km/h</span></p>`;
  motoWindow.innerHTML += '<img id="moto" src="./assets/img/motorbike.png" />';
};

/**
 * Esta función se encarga de ir acelerando la animación que hace la moto
 * @param {Event} e - El evento que activa la función, en este caso será el click sobre el botón correspondiente
 */
const handleMotoAcelerarButton = (e) => {
  //Desactivamos el reload de la página al darle click al botón del formulario
  e.preventDefault();

  //Si el coche está arrancado, vamos actualizando la velocidad y cambiando la duración de la animación
  //para hacerla más rápida
  if (moto != null) {
    if (moto.velocidad > 0) {
      const speedShow = document.getElementById("m-velocidad");
      moto.acelerar();
      speedShow.innerHTML = `${moto.velocidad * 10} km/h`;
      const imgMoto = document.getElementById("moto");
      const imagenStyle = window.getComputedStyle(imgMoto);
      const currentAnimationTime = parseFloat(
        imagenStyle.getPropertyValue("animation-duration")
      );
      if (moto.velocidad < 10) {
        imgMoto.style.animationDuration = currentAnimationTime - 1 + "s";
      } else {
        alert("La moto no puede acelerar más");
      }
    } else {
      alert("Debes arrancar primero la moto!");
    }
  } else {
    alert("Debes arrancar la moto primero!");
  }
};

/**
 * Esta función detiene la moto y actualiza la velocidad a 0
 * @param {Event} e - El evento que activa la función, en este caso será el click sobre el botón correspondiente
 */
const handleMotoStopButton = (e) => {
  //Desactivamos el reload de la página al darle click al botón del formulario
  e.preventDefault();

  //Si la moto está en marcha, actualizamos la velocidad a 0 y paramos la animación
  if (moto !== null) {
    if (moto.velocidad > 0) {
      const speedShow = document.getElementById("m-velocidad");
      moto.frenar();
      speedShow.innerHTML = `${moto.velocidad} km/h`;
      const imgMoto = document.getElementById("moto");
      imgMoto.style.animationDuration = "0s";
    }
  }
};

/**
 * Inicializa la aplicación estableciendo los listeners de todos los botones
 */
function init() {
  startCarButton.addEventListener("click", handleStartButton);
  acelerarCarButton.addEventListener("click", handleAcelerarButton);
  stopCarButton.addEventListener("click", handleStopButton);

  startMotoButton.addEventListener("click", handleMotoStartButton);
  acelerarMotoButton.addEventListener("click", handleMotoAcelerarButton);
  stopMotoButton.addEventListener("click", handleMotoStopButton);
}

// ------------------- INICIO DE LA APLICACIÓN -------------------
document.addEventListener("DOMContentLoaded", init);
