
// Los arrays fueron cambiados a "let" para poder ser modificados

let persona = ['Mi vecino', 'Mi perro', 'Mi hermano', 'Mi jefe', 'Mi sobrino', 'Mi hamster', 'Mi compañero de clase', 'Mi abuelo', 'El panadero del barrio', 'El frutero de la esquina'];

let verbo = ['se comió', 'tiró por la ventana', 'quemó', 'tiró en la piscina', 'rompió con un bate de béisbol', 'pulverizó', 'apostó en una partida de póker', 'horneó'];

let objeto = ['mi presentación', 'mi pasaporte', 'el informe que debo entregar', 'el examen que yo tenía que entregar', 'mi billetera'];

let adverbio = ['de forma apresurada', 'sin pestañear', 'porque sí', 'sin yo saberlo', 'sin darse cuenta'];

let tiempo = ['esta mañana', 'a mediodía', 'durante mi descanso', 'mientras yo dormía'];

let lugar = ['en la oficina', 'en mi cocina', 'en la casa del vecino', 'en el parque'];


// Función que selecciona aleatoriamente un elemento del array pasado como argumento
function randomizador(lista) {
  let tope = lista.length;
  let numeroRandom = Math.floor(Math.random() * tope);
  return lista[numeroRandom];
}


// NUEVA función para crear frase
function clickGenerador() {
  const excusaElement = document.querySelector('#excusa');

  // Cada parte se genera de forma separada con un Span y con `template literal`, con una clase para seleccionarlos en
  const personaParte =        `<span class="alguien text-primary fw-bold">${randomizador(persona)}</span>`;
  const verboParte =          `<span class="verbo text-secondary fw-bold">${randomizador(verbo)}</span>`;
  const objetoParte =         `<span class="objeto text-success fw-bold">${randomizador(objeto)}</span>`;
  const quasiAdverbioParte =  `<span class="quasiAdverbio text-danger fw-bold">${randomizador(adverbio)}</span>`;
  const tiempoParte =         `<span class="tiempo text-warning fw-bold">${randomizador(tiempo)}</span>`;
  const lugarParte =          `<span class="lugar text-info fw-bold">${randomizador(lugar)}</span>`;

  excusaElement.innerHTML = `${personaParte} ${verboParte} ${objetoParte}, ${quasiAdverbioParte}, ${tiempoParte} ${lugarParte}.`;
}


// Función para agregar nuevos elementos a los arrays
function agregarInput(arrayName, inputId) {

  let inputElement = document.getElementById(inputId);
  
  let nuevoValor = inputElement.value.trim();

  if (nuevoValor) {

    // Utilizamos un array para elegir/conectar los inputs y arrays correspondientes
    switch (arrayName) {

      case 'persona':
        persona.push(nuevoValor);
        break;

      case 'verbo':
        verbo.push(nuevoValor);
        break;

      case 'objeto':
        objeto.push(nuevoValor);
        break;

      case 'adverbio':
        adverbio.push(nuevoValor);
        break;

      case 'tiempo':
        tiempo.push(nuevoValor);
        break;

      case 'lugar':
        lugar.push(nuevoValor);
        break;
    }

    // Vaciamos el contenido para que pueda añadirse otro desde cero
    inputElement.value = '';

    // Mostramos una notificación al usuario para que lo sepa
    alert(`"${nuevoValor}" ha sido añadido a "${arrayName}"`);

  } else {
    alert('Por favor ingresa un valor');
  }
}

document.getElementById("botonGenerador").onclick = clickGenerador;
