const output = document.getElementById('output');
const input = document.getElementById('input');
const prompt = document.querySelector('.prompt')
const inputsublime = document.getElementById('input').value;
const my_section = document.querySelector('.my_section')


input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        executeCommand(input.value);
        input.value = '';

    }
});

function executeCommand(command) {
    const response = interpretCommand(command);
  
    output.innerHTML += `<p><span class="prompt">Untechables@user:></span> ${command}</p>`;
    
    if (response) {
        output.innerHTML += `<p>${response}</p>`;
    }
}

function getDate() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
  return now.toLocaleString('es-ES', options);
}

function interpretCommand(command) {

    switch (command.trim()) {
        case 'help':
            return `Estos son los posible comandos: "untech hora"`;


        case 'untech hora':
            return getDate();


        case 'untech --version':
            return 'Untechables version(10.234.21.5)'


        case 'untech cambiar (o) color/':
         return prompt.classList.add('cambiarcolor');
         return prompt.classList.remove('prompt')


          case 'untech remove (o) color/':
          return  prompt.classList.remove('cambiarcolor');
          return  prompt.classList.add('prompt');

        



        case 'clear':
            output.innerHTML = '';
            output.innerHTML = `<p id="version">Untechables [Versión 5.13.52.1]<br>
            (c) Untechables Corporation. <strong>Todos los derechos reservados.</strong><br><br></p>

            <p id="mi_detector">consola  >> <span id="esta-es"></span> </p><br></br>`
            return;


        default:
            return `Comando "${command}" no reconocido. Escribe "help" para obtener ayuda.`;
    }
}






const maxConsolas = 9;
let numConsolas = 0;


function crearNuevaConsola() {
  if (numConsolas <= maxConsolas) {
    const consolasUl = document.getElementById("consolas_ul");
    const nuevaConsolaLi = document.createElement("li");
    nuevaConsolaLi.setAttribute("id", `console_add${numConsolas}`);
    nuevaConsolaLi.innerHTML = `
      <div id="mi_flex">
        <button id="nombre${numConsolas}">
          <input type="text" id="input${numConsolas}">
        </button>

        <button id="yes" onclick="guardarNombre(${numConsolas})">
          Guardar
        </button>

        <button id="no">
          <svg id="flex_icon" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill="#8b5cf6" d="m12.12 10l3.53 3.53l-2.12 2.12L10 12.12l-3.54 3.54l-2.12-2.12L7.88 10L4.34 6.46l2.12-2.12L10 7.88l3.54-3.53l2.12 2.12z"/>
          </svg>
        </button>
      </div>
    `;

    consolasUl.appendChild(nuevaConsolaLi);

    numConsolas++;

    Fccontador();

    const botonesNombre = document.querySelectorAll(`#nombre${numConsolas}`);
    botonesNombre.forEach(boton => {
      boton.addEventListener('click', function() {
        ventana_nueva.textContent = boton.textContent;
      });
    });
  }
}

function guardarNombre(num) {
  const li = document.getElementById(`console_add${num}`);
  const input = li.querySelector('input');
  const nombre = li.querySelector(`#nombre${num}`);
  const inputValue = input.value.trim();
  const yesButton = li.querySelector('#yes');
  const noButton = li.querySelector('#no');

  nombre.textContent = inputValue || 'Sin nombre';
  yesButton.style.display = 'none';
  noButton.style.display = 'none';
}  

function cancelarGuardar(num) {
  const li = document.getElementById(`console_add${num}`);
  const nombre = li.querySelector(`#nombre${num}`);
  const yesButton = li.querySelector('#yes');
  const noButton = li.querySelector('#no');
  nombre.textContent = '';
  yesButton.style.display = 'inline-block';
  noButton.style.display = 'inline-block';
}

function Fccontador() {
const numero = numConsolas;
  
    cero.innerHTML = `${numero}/10`;

    const nombre0 = document.getElementById('nombre0')
const nombre1 = document.getElementById('nombre1')
const nombre2 = document.getElementById('nombre2')
const nombre3 = document.getElementById('nombre3')
const nombre4 = document.getElementById('nombre4')
const nombre5 = document.getElementById('nombre5')
const nombre6 = document.getElementById('nombre6')
const nombre7 = document.getElementById('nombre7')
const nombre8 = document.getElementById('nombre8')
const nombre9 = document.getElementById('nombre9')

const ventana_nueva = document.getElementById('ventana_nueva');
const mi_detector = document.getElementById('mi_detector')
const esta_es = document.getElementById('esta-es')


nombre0.addEventListener('click', function() {
  ventana_nueva.textContent = nombre0.textContent
  mi_detector.style.display = 'block'
  esta_es.innerHTML = nombre0.textContent
})

nombre1.addEventListener('click', function() {
  ventana_nueva.textContent = nombre1.textContent
  mi_detector.style.display = 'block'
  esta_es.innerHTML = nombre1.textContent
})

nombre2.addEventListener('click', function() {
  ventana_nueva.textContent = nombre2.textContent
  mi_detector.style.display = 'block'
  esta_es.innerHTML = nombre2.textContent
})

nombre3.addEventListener('click', function() {
  ventana_nueva.textContent = nombre3.textContent
  mi_detector.style.display = 'block'
  esta_es.innerHTML = nombre3.textContent
})

nombre4.addEventListener('click', function() {
  ventana_nueva.textContent = nombre4.textContent
  mi_detector.style.display = 'block'
  esta_es.innerHTML = nombre4.textContent
})

nombre5.addEventListener('click', function() {
  ventana_nueva.textContent = nombre5.textContent
  mi_detector.style.display = 'block'
  esta_es.innerHTML = nombre5.textContent
})

nombre6.addEventListener('click', function() {
  ventana_nueva.textContent = nombre6.textContent
  mi_detector.style.display = 'block'
  esta_es.innerHTML = nombre6.textContent
})

nombre7.addEventListener('click', function() {
  ventana_nueva.textContent = nombre7.textContent
  mi_detector.style.display = 'block'
  esta_es.innerHTML = nombre7.textContent
})

nombre8.addEventListener('click', function() {
  ventana_nueva.textContent = nombre8.textContent
  mi_detector.style.display = 'block'
  esta_es.innerHTML = nombre8.textContent
})

nombre9.addEventListener('click', function() {
  ventana_nueva.textContent = nombre9.textContent
  mi_detector.style.display = 'block'
  esta_es.innerHTML = nombre9.textContent
})


}





const pequen = document.getElementById('pequen');
const interfaz = document.querySelector('.interfaz')
const nombre0 = document.getElementById('nombre0')
const nombre1 = document.getElementById('nombre1')
const nombre2 = document.getElementById('nombre2')
const nombre3 = document.getElementById('nombre3')
const nombre4 = document.getElementById('nombre4')
const nombre5 = document.getElementById('nombre5')
const nombre6 = document.getElementById('nombre6')
const nombre7 = document.getElementById('nombre7')
const nombre8 = document.getElementById('nombre8')
const nombre9 = document.getElementById('nombre9')


let new_ul = document.querySelector('.new_ul')

const input0 = document.getElementById('input0')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')
const input4 = document.getElementById('input4')
const input5 = document.getElementById('input5')
const input6 = document.getElementById('input6')
const input7 = document.getElementById('input7')
const input8 = document.getElementById('input8')
const input9 = document.getElementById('input9')



