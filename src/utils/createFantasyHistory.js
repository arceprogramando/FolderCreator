const generos = ['perro', 'tractor', 'mujer', 'helicoptero'];
const paises = ['Argentina', 'Chile', 'Brasil', 'México', 'Perú'];
const relaciones = ['novia', 'amiga', 'novio', 'mascota', 'compañero de trabajo'];
const nombres = ['María', 'José', 'Eduardo', 'Pepito', 'Carlos', 'Ana', 'Valentina', 'Joaquín'];
const sentimientosPadres = ['le querían mucho', 'le odiaban', 'le apreciaban', 'le ignoraban'];
const eventosImportantes = [
  'ganó una competencia de baile',
  'encontró un tesoro oculto',
  'aprendió a volar',
  'construyó una nave espacial',
  'descubrió una nueva especie de planta',
  'escribió un libro exitoso',
  'viajó a la luna',
  'abrió su propio restaurante',
];

const getRandomElement = (array) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};

const createFantasyHistory = (name, date, time) => {
  const genero = getRandomElement(generos);
  const pais = getRandomElement(paises);
  const relacion = getRandomElement(relaciones);
  const nombreRelacion = getRandomElement(nombres);
  const sentimientoPadres = getRandomElement(sentimientosPadres);
  const eventoImportante = getRandomElement(eventosImportantes);

  return `${name}: era del género ${genero} , nació en ${pais}. En su vida tuvo un(a) ${relacion} llamado(a) ${nombreRelacion}. Sus padres ${sentimientoPadres}. Una vez, ${eventoImportante}. Este evento ocurrió el ${date} a las ${time} horas.`;
};

export default createFantasyHistory;
