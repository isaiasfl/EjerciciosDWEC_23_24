/**
 * @author Carlos Álvarez Martín
 * @title Relación POO Ejercicio 6
 * @description Ejercicio 6 Sistema de Gestión de Empleados 🦸
   Enunciado: Crea un sistema de gestión de empleados en JavaScript que incluye las siguientes clases:
   Empleado, Gerente, Desarrollador. Cada clase debe heredar de la clase Empleado y debe tener
   propiedades específicas de acuerdo a su rol. El sistema debe permitir agregar empleados, calcular los
   salarios totales y mostrar la información de cada empleado.
 * 
 */

// Imports
import { empleadoLiteral as Empleado } from "./assets/modules.js";
import { gerenteLiteral as Gerente } from "./assets/modules.js";
import { desarrolladorLiteral as Desarrollador } from "./assets/modules.js";

// Variables globales
let empleadoAñadidoId = 1;

// Funciones

/**
 * Maneja la inserción de empleados en la interfaz y en el almacenamiento local.
 * @param {Event} e - El evento de envío del formulario.
 */
function handlerInsertarEmpleado(e) {
  e.preventDefault();

  // Obtiene los valores del formulario
  const nombreFrm = document.getElementById("nombre").value;
  const salarioFrm = parseFloat(document.getElementById("salarioBase").value);
  const rolSelect = document.getElementById("rol").value;

  let nuevoEmpleado;

  // Comprueba el rol seleccionado y crea una instancia correspondiente
  if (rolSelect === "Gerente") {
    const departamento = document.getElementById("departamento").value;
    const nSubordinados = parseInt(
      document.getElementById("nSubordinados").value
    );
    const complementoSalarial = parseFloat(
      document.getElementById("complementoSalarial").value
    );
    nuevoEmpleado = Object.create(Gerente);
    nuevoEmpleado.id = empleadoAñadidoId;
    nuevoEmpleado.nombre = nombreFrm;
    nuevoEmpleado.salario = salarioFrm;
    nuevoEmpleado.departamento = departamento;
    nuevoEmpleado.nSubornidados = nSubordinados;
    nuevoEmpleado.complementoSalarial = complementoSalarial;
    nuevoEmpleado.rol = "Gerente";
  } else if (rolSelect === "Desarrollador") {
    const lenguajeProgramacion = document.getElementById(
      "lenguajeProgramacion"
    ).value;
    const proyectoAsignado = document.getElementById("proyectoAsignado").value;
    const experiencia = parseInt(document.getElementById("experiencia").value);
    nuevoEmpleado = Object.create(Desarrollador);
    nuevoEmpleado.id = empleadoAñadidoId;
    nuevoEmpleado.nombre = nombreFrm;
    nuevoEmpleado.salario = salarioFrm;
    nuevoEmpleado.lenguajeProgramacion = lenguajeProgramacion;
    nuevoEmpleado.proyectoAsignado = proyectoAsignado;
    nuevoEmpleado.experiencia = experiencia;
    nuevoEmpleado.rol = "Desarrollador";
    nuevoEmpleado.complementoSalarial = 0;
  } else {
    nuevoEmpleado = Object.create(Empleado);
    nuevoEmpleado.id = empleadoAñadidoId;
    nuevoEmpleado.nombre = nombreFrm;
    nuevoEmpleado.salario = salarioFrm;
    nuevoEmpleado.rol = "Empleado";
    nuevoEmpleado.complementoSalarial = 0;
  }

  // Obtiene los empleados existentes del almacenamiento local
  let empleadosExistentes =
    JSON.parse(localStorage.getItem("datosEmpleados")) || [];

  // Verifica si el ID del nuevo empleado ya existe
  const idExiste = empleadosExistentes.some(
    (empleado) => empleado.id === nuevoEmpleado.id
  );

  // Si el ID no existe, agrega el nuevo empleado al almacenamiento local
  if (!idExiste) {
    empleadosExistentes.push(nuevoEmpleado);
    localStorage.setItem("datosEmpleados", JSON.stringify(empleadosExistentes));
    empleadoAñadidoId++;

    // Limpia los campos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("salarioBase").value = "";
    document.getElementById("departamento").value = "";
    document.getElementById("nSubordinados").value = "";
    document.getElementById("complementoSalarial").value = "";
    document.getElementById("lenguajeProgramacion").value = "";
    document.getElementById("proyectoAsignado").value = "";
    document.getElementById("experiencia").value = "";

    // Continúa con la lógica para mostrar y actualizar la lista de empleados.
    actualizarListaEmpleados();
  } else {
    alert("Este empleado ya está registrado");
  }
}

/**
 * Actualiza la lista de empleados en la interfaz.
 */
function actualizarListaEmpleados() {
  const listaEmpleados = document.getElementById("listaEmpleados");
  listaEmpleados.innerHTML = "";

  // Obtiene los empleados existentes del almacenamiento local
  const empleadosExistentes =
    JSON.parse(localStorage.getItem("datosEmpleados")) || [];

  // Itera a través de los empleados y crea filas en la tabla
  empleadosExistentes.forEach((empleado) => {
    const row = document.createElement("tr");
    const nombreCell = document.createElement("td");
    const rolCell = document.createElement("td");
    const salarioCell = document.createElement("td");

    nombreCell.textContent = empleado.nombre;
    rolCell.textContent = empleado.rol; // Accede al getter de 'rol'
    salarioCell.textContent = empleado.salario + empleado.complementoSalarial;

    // Agrega las celdas a la fila y la fila a la tabla
    row.appendChild(nombreCell);
    row.appendChild(rolCell);
    row.appendChild(salarioCell);

    listaEmpleados.appendChild(row);
  });
}

/**
 * Calcula el salario total de todos los empleados y lo muestra en la interfaz.
 */
function calcularSalarioTotal() {
  const empleadosExistentes =
    JSON.parse(localStorage.getItem("datosEmpleados")) || [];

  const salarioTotal = empleadosExistentes.reduce((total, empleado) => {
    return total + empleado.salario + empleado.complementoSalarial;
  }, 0);

  const salarioTotalInput = document.getElementById("salarioTotal");
  salarioTotalInput.value = salarioTotal;
}

// Llama a la función para calcular el salario total en el evento del botón
document
  .getElementById("calcularSalario")
  .addEventListener("click", calcularSalarioTotal);

// Inicio de la aplicación
document.addEventListener("DOMContentLoaded", init);

function init() {
  const agregarEmpleadoForm = document.getElementById("agregarEmpleadoForm");
  const rolSelect = document.getElementById("rol");
  const campoEspecificoGerente = document.getElementById(
    "campoEspecificoGerente"
  );
  const campoEspecificoDesarrollador = document.getElementById(
    "campoEspecificoDesarrollador"
  );

  rolSelect.addEventListener("change", function () {
    const selectedOption = rolSelect.value;
    if (selectedOption === "Gerente") {
      campoEspecificoGerente.style.display = "block";
      campoEspecificoDesarrollador.style.display = "none";
    } else if (selectedOption === "Desarrollador") {
      campoEspecificoGerente.style.display = "none";
      campoEspecificoDesarrollador.style.display = "block";
    } else {
      campoEspecificoGerente.style.display = "none";
      campoEspecificoDesarrollador.style.display = "none";
    }
  });

  agregarEmpleadoForm.addEventListener("submit", handlerInsertarEmpleado);

  actualizarListaEmpleados();
}
