import fs from 'fs';

// Array de nombres
const nombres = ['Felipe Arce', 'Mario Luis', 'Pedro Gómez'];

function quitarAcentos(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// Función para crear la carpeta con comentario
function crearCarpetaConComentario(nombre) {
  // Reemplazamos los espacios por _
  const nombreSinAcentos = quitarAcentos(nombre);
  const nombreCarpeta = nombreSinAcentos.replace(/\s/g, '_');

  // Obtenemos los componentes de la fecha y hora actual
  const fechaActual = new Date();
  const dia = fechaActual.getDate();
  const mes = fechaActual.getMonth() + 1; // Los meses en JavaScript comienzan desde 0
  const anio = fechaActual.getFullYear();
  const hora = fechaActual.getHours();
  const minutos = fechaActual.getMinutes();
  const segundos = fechaActual.getSeconds();

  const nombreCarpetaFinal = `${nombreCarpeta}/${dia}_${mes}_${anio}/${hora}_${minutos}_${segundos}`;

  // Ruta de la carpeta a crear
  const rutaCarpeta = nombreCarpetaFinal;

  try {
    // Creamos la carpeta
    fs.mkdirSync(rutaCarpeta, { recursive: true });

    const comentario = `Carpeta ${nombreCarpetaFinal} creada correctamente. Fecha y hora: ${fechaActual.toLocaleString()}`;
    // eslint-disable-next-line no-console
    console.log(comentario);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`Error al crear la carpeta ${rutaCarpeta}: ${err}`);
  }
}

nombres.forEach((nombre) => {
  crearCarpetaConComentario(nombre);
});
