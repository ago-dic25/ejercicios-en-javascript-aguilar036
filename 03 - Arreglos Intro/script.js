
const alumnos = [
  { nombre: "Ana Sofía Martínez Garza", carrera: "LCC" },
  { nombre: "David Alejandro Rojas Silva", carrera: "LSTI" },
  { nombre: "Valeria Herrera Mendoza", carrera: "LMAD" },
  { nombre: "Javier Eduardo Luna Campos", carrera: "LCC" },
  { nombre: "Daniela Morales Castillo", carrera: "LCC" },
  { nombre: "Miguel Ángel Flores Cruz", carrera: "LM" },
  { nombre: "Sofía Isabel Peña Ríos", carrera: "LMAD" }
];

const inputNombre = document.getElementById('filtro-nombre');
const btnBuscar = document.getElementById('btn-buscar');
const btnLimpiar = document.getElementById('btn-limpiar');
const listaContainer = document.getElementById('lista-alumnos');



/*
Función para "renderizar" la lista de alumnos en el HTML.
Recibe un arreglo de alumnos y los muestra en pantalla.
 */
function renderizarLista(lista) {
  listaContainer.innerHTML = '';

  lista.forEach(alumno => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'alumno-item';

    const nombreSpan = document.createElement('span');
    nombreSpan.className = 'alumno-nombre';
    nombreSpan.textContent = alumno.nombre;
    
    const carreraSpan = document.createElement('span');
    carreraSpan.className = 'alumno-carrera';
    carreraSpan.textContent = alumno.carrera;

    itemDiv.appendChild(nombreSpan);
    itemDiv.appendChild(carreraSpan);
    listaContainer.appendChild(itemDiv);
  });
}

/**
Función que filtra la lista de alumnos según el texto del input
 */
function filtrarAlumnos() {
  const textoFiltro = inputNombre.value.toLowerCase();

  const alumnosFiltrados = alumnos.filter(alumno => {
    const nombreAlumno = alumno.nombre.toLowerCase(); 
    return nombreAlumno.includes(textoFiltro); 
  });
  
  renderizarLista(alumnosFiltrados);
}

/**
Función para limpiar el filtro y mostrar la lista completa
 */
function limpiarFiltro() {
  inputNombre.value = ''; 
  renderizarLista(alumnos); 
}


btnBuscar.addEventListener('click', filtrarAlumnos);

btnLimpiar.addEventListener('click', limpiarFiltro);

renderizarLista(alumnos);