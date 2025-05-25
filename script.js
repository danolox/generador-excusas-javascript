
const alguien = ['Mi vecino', 'Mi perro', 'Mi hermano', 'Mi jefe', 'Mi sobrino', 'Mi hamster', 'Mi compañero de clase', 'Mi abuelo', 'El panadero del barrio', 'El frutero de la esquina'];

const verbo = ['se comió', 'tiró por la ventana', 'quemó', 'tiró en la piscina', 'rompió con un bate de béisbol', 'pulverizó', 'apostó en una partida de póker', 'horneó'];

const objeto = ['mi presentación', 'mi pasaporte', 'el informe que debo entregar', 'el examen que yo tenía que entregar', 'mi billetera'];

const quasiAdverbio = ['de forma apresurada', 'sin pestañear', 'porque sí', 'sin yo saberlo', 'sin darse cuenta'];

const tiempo = ['esta mañana', 'a mediodía', 'durante mi descanso', 'mientras yo dormía'];

const lugar = ['en la oficina', 'en mi cocina', 'en la casa del vecino', 'en el parque'];


function randomizador (lista) {
  let tope = lista.length;
  let numeroRandom = Math.floor(Math.random() * tope);
  return lista[numeroRandom];
}


function clickGenerador () {
  
  document.querySelector('#excusa').innerHTML =
    randomizador(alguien) + " " +
    randomizador(verbo) + " " +
    randomizador(objeto) + ", " +
    randomizador(quasiAdverbio) + ", " +
    randomizador(tiempo) + " " +
    randomizador(lugar) + ".";
}


document.getElementById("botonGenerador").onclick = clickGenerador;
