



let HTMLEntero = document.querySelector('.mi_HTML');



const INICIO = document.getElementById('inicio')
const que_e = document.getElementById('que-e')
const consola_nav = document.getElementById('consola_nav')

INICIO.addEventListener('mouseover', function() {
    const casa = document.getElementById('casa')

    casa.style.visibility = 'visible'
})

INICIO.addEventListener('mouseout', function() {
    const casa = document.getElementById('casa')

    casa.style.visibility = 'hidden'
})


que_e.addEventListener('mouseover', function() {
    const faq = document.getElementById('faq')
    
    faq.style.visibility = 'visible'
})

que_e.addEventListener('mouseout', function() {
    const faq = document.getElementById('faq')
    
    faq.style.visibility = 'hidden'
})


consola_nav.addEventListener('mouseover', function() {
    const consolaa = document.getElementById('consola_icon')

    consolaa.style.visibility = 'visible'
})

consola_nav.addEventListener('mouseout', function() {
    const consolaa = document.getElementById('consola_icon')

    consolaa.style.visibility = 'hidden'
})



let sol = document.getElementById('sol')
let ini = document.getElementById('ini')
let que = document.getElementById('que')
let cons = document.getElementById('cons')
let sobre_consola = document.getElementById('sobre-consola')
let sobre_consola2 = document.getElementById('sobre-consola2')
let julen = document.getElementById('julen')
let yo_mismo = document.getElementById('yo_mismo')

var LightMode = false;

sol.addEventListener('click', function() {
    if(LightMode) {
        sol.innerHTML = `<svg id="sol_icon" width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#ffffff" d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007s-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414l2.121-2.121l1.414 1.414zM16.242 6.344l2.122-2.122l1.414 1.414l-2.122 2.122zM6.344 7.759L4.223 5.637l1.415-1.414l2.12 2.122zm13.434 10.605l-1.414 1.414l-2.122-2.122l1.414-1.414z"/>
    </svg>`

    ini.style.color = '#fff'
    que.style.color = '#fff'
    cons.style.color = '#fff'
    sobre_consola.style.color = '#fff'
    sobre_consola2.style.color = '#fff'
    HTMLEntero.style.backgroundColor = '#040C14'
    julen.style.color = '#fff'
    yo_mismo.style.color = '#fff'
    comentario_user.classList.remove('comentario_css')
    comentario_user.style.backgroundColor = '#09121b'

    sol.setAttribute('title', 'Light Mode')

    LightMode = false;
    } else {
        sol.innerHTML = `<svg id="luna_icon" width="20" height="20" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <path fill="#000000" d="M235.54 150.21a104.84 104.84 0 0 1-37 52.91A104 104 0 0 1 32 120a103.09 103.09 0 0 1 20.88-62.52a104.84 104.84 0 0 1 52.91-37a8 8 0 0 1 10 10a88.08 88.08 0 0 0 109.8 109.8a8 8 0 0 1 10 10Z"/>
    </svg>`

    ini.style.color = '#000000'
    que.style.color = '#000000'
    cons.style.color = '#000000'
    sobre_consola.style.color = '#000000'
    sobre_consola2.style.color = '#000000'
    julen.style.color = '#000000'
    yo_mismo.style.color = '#000000'
    comentario_user.classList.add('comentario_css')
    comentario_user.style.backgroundColor = '#fff'
    HTMLEntero.style.backgroundColor = '#f2f2f2'

    sol.setAttribute('title', 'Dark Mode')

    LightMode = true;
    }
} )




let comentario_user = document.querySelector('.comentario_user');

comentario_user.addEventListener('mouseover', function() {
    comentario_user.classList.add('comentarios_sombras')
})

comentario_user.addEventListener('mouseout', function() {
    comentario_user.classList.remove('comentarios_sombras')
})


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
        output.innerHTML += `<p id='respuesta_consola'>${response}</p>`;
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
            return `Estos son los posible comandos: <br><br> <span id="colorazul">"untech hora"</span>
            <br><br> <span id="colorazul">"untech --version"</span>
            <br><br> <span id="colorazul">"untech cambiar(o) color/"</span>
            <br><br> <span id="colorazul">"untech remove (o) color/"</span>
            <br><br> <span id="colorazul">"clear"</span>`;


        case 'untech hora':
          return '<p id="ceroacien">Obteniendo Localización...</p> <div id="cienlinea"></div> <span id="lineacargar2">' + getDate() + '</span>'
    
          
         

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
            (c) Untechables Corporation. <strong>Todos los derechos reservados.</strong><br><br></p>`
            return;


        default:
            
            return `Comando "${command}" no reconocido. Escribe "help" para obtener ayuda.`;
    }
}

let cargadorGenerado = false;

function CargarLocalizacion() {

    if (cargadorGenerado) {
        getDate();
        return;
        
    }
    
    const cargarLocal = document.createElement('div')

    cargarLocal.setAttribute('id', 'lineacargar')

    const cargador = document.createElement('div')

    cargador.setAttribute('id', 'cienlinea')

    const numeroPorcentaje = document.createElement('p')

    numeroPorcentaje.setAttribute('id', 'ceroacien')

    const cargarLocal2 = document.createElement('span')

    cargarLocal2.setAttribute('id', 'lineacargar2')

    

    cargarLocal.appendChild(cargador)
    cargarLocal.appendChild(numeroPorcentaje)
    cargarLocal.appendChild(cargarLocal2)

    document.body.appendChild(cargarLocal);

    

    cienlinea.style.animationPlayState = 'running'

    cienlinea.addEventListener('animationend', () => {
        cienlinea.style.animationPlayState = 'paused'
        getDate();
    });

    cargadorGenerado = true;

}


    






let abrir_comandos = document.getElementById('abrir-comandos')
let div_comandos = document.getElementById('div_comandos')

var si = false


abrir_comandos.addEventListener('click', function() {
    div_comandos.classList.toggle('anchar');

    if(si) {
        abrir_comandos.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#ffffff" d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"/>
    </svg>`

    si = false;
    } else {
        abrir_comandos.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#ffffff" d="m4.431 12.822l13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z"/>
    </svg>`

    si = true;
    }

})











