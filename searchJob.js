






let menu = document.getElementById('menu')
let menuback = document.querySelector('.menu')
let miLista = document.querySelector('.ul10')
let barrera = document.querySelector('.interLinee')
let nose = document.querySelector('.ul11')
let helpbtn = document.getElementById('helpbtn')
let bolablue = document.getElementById('bolablue')
let bienvenido = document.getElementById('bienvenido')

menu.addEventListener('click',function() {
  bolablue.style.left = '495px'
  bienvenido.style.left = '320px'
  bienvenido.style.transition = '0.3s'
  bolablue.style.transition = '0.3s'
    menuback.style.width = '600px'
    miLista.style.marginLeft = '260px'
    barrera.style.marginLeft = '300px'
    nose.style.marginLeft = '240px'
    cruz.style.marginLeft = '290px'   
    helpbtn.style.marginLeft = '305px'
    helpbtn.style.transition = '0.3s'
    miLista.style.transition = '0.3s'
    cruz.style.transition = '0.3s'
    nose.style.transition = '0.3s'
    barrera.style.transition = '0.3s'
    menuback.style.transition = '0.3s'
    
})

let cruz = document.getElementById('cerrar')

cruz.addEventListener('click', function() {
  menuback.style.width = '0px'
  document.documentElement.style.overflowY = 'auto'
  barrera.style.marginLeft = '-260px'
    nose.style.marginLeft = '-240px'
    cruz.style.marginLeft = '-290px' 
    miLista.style.marginLeft = '-260px'
    helpbtn.style.marginLeft = '-265px' 
    helpbtn.style.transition = '0.4s'
    miLista.style.transition = '0.4s'
    cruz.style.transition = '0.4s'
    nose.style.transition = '0.4s'
    barrera.style.transition = '0.4s'
    menuback.style.transition = '0.6s'
    bolablue.style.left = '-300px'
  bolablue.style.transition = '0.4s'
  bienvenido.style.left = '-300px'
  bienvenido.style.transition = '0.4s'
})


let exp = document.getElementById('exp1')
let soft = document.getElementById('software')
let cur = document.getElementById('arrastrar')
let apli = document.getElementById('le')
let flecha = document.getElementById('flechaa')
var menos = false;


exp.addEventListener('click',function() {

  if(menos) {
    soft.style.height = '450px'
    cur.style.display = 'none'
    apli.style.display = 'none'
    mass.innerHTML = 'más'
    flecha.innerHTML = 'expand_more'
    menos = false;
    
  } else {
    soft.style.height = '700px'
    cur.style.display = 'block'
    apli.style.display = 'block'
    mass.innerHTML = 'menos'
    flecha.innerHTML = 'expand_less'
    menos = true;
  }
  
})

let exp1 = document.getElementById('exp2')
let soft1 = document.getElementById('software1')
let cur1 = document.getElementById('arrastrar1')
let apli1 = document.getElementById('le1')
var menos1 = false;
let mass = document.getElementById('mass')
let flechaa1 = document.getElementById('flechaa1')
let loco = document.getElementById('loco')


exp1.addEventListener('click',function() {

  if(menos1) {
    soft1.style.height = '450px'
    cur1.style.display = 'none'
    apli1.style.display = 'none'
    loco.innerHTML = 'más'
    flechaa1.innerHTML = 'expand_more'
    menos1 = false;
  } else {
    soft1.style.height = '700px'
    cur1.style.display = 'block'
    apli1.style.display = 'block'
    loco.innerHTML = 'menos'
    flechaa1.innerHTML = 'expand_less'

    menos1 = true;
  }
  
})

let agre = document.getElementById('agre')
let ag = document.getElementById('ag')
let azulbola = document.getElementById('bolanotifi')
let softwaresaved = document.getElementById('softwaresaved')
var adnoti = false;
var cliked = 0;

var HECLICKEADO = false;

agre.addEventListener('click', function() {

  if(adnoti) {
  ag.innerHTML = 'bookmark_add'
  azulbola.style.display = 'none'
 
   adnoti = false;
   HECLICKEADO = false;

   cliked--;

   recogerClicks()

  } else {
    ag.innerHTML = 'bookmark_added'
    azulbola.style.display = 'block'
    adnoti = true;
    HECLICKEADO = true;

    cliked++;
    
    
    
    recogerClicks()
  }

  if(HECLICKEADO) {
    softwaresaved.style.display = 'block'

HECLICKEADO = false;
  } else {
    softwaresaved.style.display = 'none'

    HECLICKEADO = true;
  }
})

let agre1 = document.getElementById('agre1')
let ag1 = document.getElementById('ag1')
let softwaresaved1 = document.getElementById('softwaresaved1')

var adnoti1 = false;

var HECLICKEADO1 = false;

agre1.addEventListener('click', function() {
  if(adnoti1) {
    ag1.innerHTML = 'bookmark_add'
    azulbola.style.display = 'none'

    adnoti1 = false;

    HECLICKEADO1 = false;
    cliked--;

    recogerClicks()

    } else {
      ag1.innerHTML = 'bookmark_added'
      azulbola.style.display = 'block'
      

      HECLICKEADO1 = true;
      adnoti1 = true;
      cliked ++;

      recogerClicks()
    }

    if(HECLICKEADO1) {
      softwaresaved1.style.display = 'block'
  
  HECLICKEADO1 = false;
    } else {
      softwaresaved1.style.display = 'none'
  
      HECLICKEADO1 = true;
    }
})

function recogerClicks() {
  bolablue.innerHTML = cliked.toString()


const imgtra = document.getElementById('how')
const parraf = document.getElementById('parrafo4')

if (cliked.toString() === '0') {
  imgtra.style.display = 'block'
  parraf.style.display = 'block'
} else {
  imgtra.style.display = 'none'
  parraf.style.display = 'none'
}
}



window.addEventListener('scroll', function() {
  const Bajar = window.pageYOffset || document.documentElement.scrollTop;
  let minav = document.querySelector('.nav1')

  if (Bajar >= 100) {
    minav.classList.add('navcss')
    buscarlupa.style.display = 'block'
    siono.innerHTML = 'search'

  
  }

  if(Bajar < 10) {
    minav.classList.remove('navcss')
    buscarlupa.style.display = 'none'
    input0.style.display = 'none'
    siono.innerHTML = 'search'

    
  }
})



var buscarlupa = document.getElementById('buscarlupa');
var input0 = document.getElementById('input0');
var tucar = document.getElementById('tucar')
var ini = document.getElementById('ini')
var untechab = document.getElementById('untechab')
var siono = document.getElementById('siono')

var buscarno = false;

buscarlupa.addEventListener('click', function() {

  if(buscarno) {

    input0.style.display = 'none'
    siono.innerHTML = 'search'

    buscarno = false;

  } else {
    input0.style.border = '2px solid #4285F4'
    input0.style.display = 'block'
  input0.style.width = '600px';
  siono.innerHTML = 'close'

  buscarno = true;
  }

  
});


let encTraP = document.getElementById('encTraP');
let miperfil = document.querySelector('.miperfiledit')
let trabajos = document.querySelector('.trabajos')
let inicioS = document.getElementById('inicioS')
let trabajosguardados = document.querySelector('.trabajosguardados')
let encTraQ = document.getElementById('encTraQ')

encTraP.addEventListener('click', function() {
  miperfil.style.display = 'block'
  trabajos.style.display = 'none'
  trabajosguardados.style.display = 'none'
  notificaciones.style.display = 'none'
  encTraP.style.borderLeft = '4px solid #4285F4'
  inicioS.style.borderLeft = '0px solid #4285F4'
  encTraQ.style.borderLeft = '0px solid #4285F4'
  encTraX.style.borderLeft = '0px solid #4285F4'
  encTraP.style.color = '#4285F4'
  encTraQ.style.color = 'black'
  inicioS.style.color = 'black'
  encTraX.style.color = 'black'
  encTraP.style.transition = '0s'
  bolablue.style.left = '495px'
  bolablue.style.transition = '0s'
})

inicioS.addEventListener('click', function() {
  miperfil.style.display = 'none'
  trabajos.style.display = 'block'
  trabajosguardados.style.display = 'none'
  notificaciones.style.display = 'none'
  inicioS.style.borderLeft = '4px solid #4285F4'
  encTraP.style.borderLeft = '0px solid #4285F4'
  encTraQ.style.borderLeft = '0px solid #4285F4'
  encTraX.style.borderLeft = '0px solid #4285F4'
  encTraP.style.color = 'black'
  encTraQ.style.color = 'black'
  inicioS.style.color = '#4285F4'
  encTraX.style.color = 'black'
  inicioS.style.transition = '0s'
  bolablue.style.left = '495px'
  bolablue.style.transition = '0s'
})

encTraQ.addEventListener('click' ,function() {
  trabajosguardados.style.display = 'block'
  miperfil.style.display = 'none'
  trabajos.style.display = 'none'
  notificaciones.style.display = 'none'
  encTraQ.style.transition = '0s'
  inicioS.style.borderLeft = '0px solid #4285F4'
  encTraP.style.borderLeft = '0px solid #4285F4'
  encTraQ.style.borderLeft = '4px solid #4285F4'
  encTraX.style.borderLeft = '0px solid #4285F4'
  encTraP.style.color = 'black'
  encTraQ.style.color = '#4285F4'
  inicioS.style.color = 'black'
  encTraX.style.color = 'black'
  bolablue.style.left = '500px'
  bolablue.style.transition = '0s'
})


const botonCrearPerfil = document.getElementById('envi');
const cargando = document.querySelector('.cargando')
const formulario_sub = document.getElementById('formulario_sub')
const formulario_done = document.getElementById('formulario_done')
const quehacer = document.querySelector('.quehacer')
const FAQ = document.querySelector('.FAQ')

botonCrearPerfil.addEventListener('click', function() {
  event.preventDefault();

  const nombre = document.getElementById('input1').value;
  const correo = document.getElementById('correo').value;
  const pais = document.getElementById('pais').value;
  const telnum1 = document.getElementById('telnum1').value;
  const mi_nombre = document.getElementById('mi_nombre');
  const mi_correo = document.getElementById('mi_correo');
  const mi_pais = document.getElementById('mi_pais');
  const mi_numero = document.getElementById('mi_numero');
  const nope = document.getElementById('nope');
  const cerrar_no_bien = document.getElementById('cerrar_no-bien');
  const editar_mi_perfil = document.getElementById('editar_mi_perfil')

  cerrar_no_bien.addEventListener('click', function() {
    nope.style.display = 'none';
  });

  editar_mi_perfil.addEventListener('click', function() {
    formulario_done.style.display = 'none'
    formulario_done.style.visibility = 'hidden'
    formulario_sub.style.display = 'block'
    formulario_sub.style.visibility = 'visible'
    quehacer.style.display = 'none'
    FAQ.style.display = 'none'
  })

  let camposVacios = false;

  if (nombre === '') {
    camposVacios = true;
  }
  
  if (correo === '') {
    camposVacios = true;
  }

  if (pais === '') {
    camposVacios = true;
  }

  if (camposVacios) {
    nope.style.display = 'block';
    formulario_sub.style.display = 'block';
    formulario_done.style.visibility = 'hidden';
  } else {
    bienvenido.textContent = `¡Bienvenido/a, ${nombre}! 👋`;
    formulario_sub.style.display = 'none';

    cargando.style.display = 'block';
    cargando.style.animationPlayState = 'running';

    setTimeout(function() {
      cargando.style.display = 'none';
      cargando.style.animationPlayState = 'paused';

      VisibleEdit();

    }, 700);

   
    function VisibleEdit() {
      mi_nombre.style.animationPlayState = 'running';
      mi_correo.style.animationPlayState = 'running';
      mi_pais.style.animationPlayState = 'running';
      mi_numero.style.animationPlayState = 'running';
      formulario_done.style.visibility = 'visible';
      formulario_done.style.display = 'block';
      quehacer.style.display = 'block'
      FAQ.style.display = 'block'
      mi_nombre.textContent = `¡Nos alegra verte, ${nombre}! 😄`;
      mi_correo.textContent = `Correo: ${correo}`;
      mi_pais.textContent = `País: ${pais}`;
      mi_numero.textContent = `Número de teléfono: ${telnum1}`;
    }
  }
});




let borrardire = document.getElementById('borrardire');










let agre2 = document.getElementById('agre2')
let soft2 = document.getElementById('software2')
let ag2 = document.getElementById('ag2')
let exp3 = document.getElementById('exp3')
let loco1 = document.getElementById('loco1')
let flechaa2 = document.getElementById('flechaa2')
let arrastrar2 = document.getElementById('arrastrar2')
let enviar1 = document.getElementById('enviar1');
let softwaresaved2 = document.getElementById('softwaresaved2')

var guardar = false;
var cambiarletra = false;

var HECLICKEADO2 = false;

agre2.addEventListener('click', function() {

  if(guardar) {
    ag2.innerHTML = 'bookmark_add'
    azulbola.style.display = 'none'
    guardar = false;

    cliked--;

    HECLICKEADO2 = false;

    recogerClicks()
  } else {

    ag2.innerHTML = 'bookmark_added'
    azulbola.style.display = 'block'
    guardar = true;

    cliked++;

    HECLICKEADO2 = true;
    recogerClicks()
  }

  if(HECLICKEADO2) {
    softwaresaved2.style.display = 'block'

HECLICKEADO2 = false;
  } else {
    softwaresaved2.style.display = 'none'

    HECLICKEADO2 = true;
  }
})

exp3.addEventListener('click', function() {

  if(cambiarletra) {
    loco1.innerHTML = 'más'
    flechaa2.innerHTML = 'expand_more'
    soft2.style.height = '450px'
    arrastrar2.style.display = 'none'
    enviar1.style.display = 'none'

    cambiarletra = false;
  } else {

    loco1.innerHTML = 'menos'
    flechaa2.innerHTML = 'expand_less'
    soft2.style.height = '730px'
    arrastrar2.style.display = 'block'
    enviar1.style.display = 'block'

    cambiarletra = true;
  }
})

let borrardire0 = document.getElementById('borrardire')
let borrardire1 = document.getElementById('borrardire1')
let borrardire2 = document.getElementById('borrardire2')

borrardire.addEventListener('click', function() {
  softwaresaved.style.display = 'none'
  ag.innerHTML = 'bookmark_add'
  adnoti1 = false;
  adnoti = false;
  guardar = false;

  cliked--;
  
  recogerClicks()
})

borrardire1.addEventListener('click', function() {
  softwaresaved1.style.display = 'none' 
  ag1.innerHTML = 'bookmark_add'
  adnoti1 = false;
  adnoti = false;
  guardar = false;

  cliked--;
  
  recogerClicks()
})

borrardire2.addEventListener('click', function() {
  softwaresaved2.style.display = 'none'
  ag2.innerHTML = 'bookmark_add'
  adnoti1 = false;
  adnoti = false;
  guardar = false;

  cliked--;
  
  recogerClicks()
})



let cancelar = document.getElementById('cancelar');

cancelar.addEventListener('click', function() {
  miperfil.style.display = 'none'
  trabajos.style.display = 'block'
})

let notificaciones = document.querySelector('.notificaciones')
let encTraX = document.getElementById('encTraX')

encTraX.addEventListener('click', function() {
  notificaciones.style.display = 'block'
  trabajos.style.display = 'none'
  trabajosguardados.style.display = 'none'
  miperfil.style.display = 'none'
  encTraX.style.borderLeft = '4px solid #4285F4'
  encTraP.style.borderLeft = '0px solid #4285F4'
  inicioS.style.borderLeft = '0px solid #4285F4'
  encTraQ.style.borderLeft = '0px solid #4285F4'
  encTraX.style.transition = '0s'
  encTraP.style.color = 'black'
  encTraQ.style.color = 'black'
  inicioS.style.color = 'black'
  encTraX.style.color = '#4285F4'
  bolablue.style.left = '495px'
  bolablue.style.transition = '0s'
})

let mas = document.getElementById('mas')
let filtros = document.querySelector('.filtros')
let cerrarfiltros = document.getElementById('cerrarfiltros')

mas.addEventListener('click', function() {
document.documentElement.style.background = 'rgba(0, 0, 0, 0.5)'
filtros.style.display = 'block'
})

cerrarfiltros.addEventListener('click', function() {
  filtros.style.display = 'none'
  document.documentElement.style.background = '#fff'
})



let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
const tex_to = document.getElementById('tex_to')
const ul6 = document.querySelector('.ul6')
const ul7 = document.querySelector('.ul7')
const ul8 = document.querySelector('.ul8')



var hacien = false;
var hacien2 = false;
var hacien3 = false;

btn1.addEventListener('mouseover', function() {
  btn1.classList.add('sombrasperfil')
})

btn2.addEventListener('mouseover', function() {
  btn2.classList.add('sombrasperfil')
})

btn3.addEventListener('mouseover', function() {
  btn3.classList.add('sombrasperfil')
})

btn1.addEventListener('mouseout', function() {
  btn1.classList.remove('sombrasperfil')
})

btn2.addEventListener('mouseout', function() {
  btn2.classList.remove('sombrasperfil')
})

btn3.addEventListener('mouseout', function() {
  btn3.classList.remove('sombrasperfil')
})


btn1.addEventListener('click', function() {
  if (hacien) {
    btn2.classList.remove('scalehacer');
    btn3.classList.remove('scalehacer');
    btn1.classList.remove('scalemitad');
    btn2.classList.add('scaledejar')
    btn3.classList.add('scaledejar')
    btn1.classList.add('scaledejar')
    tex_to.classList.remove('textosanimaciones');
   
    hacien = false;
  } else {
    btn2.classList.add('scalehacer');
    btn3.classList.add('scalehacer');
    btn1.classList.add('scalemitad');
    btn1.classList.remove('scaledejar')
    btn2.classList.remove('scaledejar')
    btn3.classList.remove('scaledejar')
    tex_to.classList.add('textosanimaciones');
    hacien = true;
  }
});




btn2.addEventListener('click', function() {
  if(hacien2) {
    btn3.classList.remove('scalehacer')
  btn2.classList.remove('scalemitad')
  btn1.classList.remove('scalehacer')
  btn2.classList.add('scaledejar')
  btn3.classList.add('scaledejar')
  btn1.classList.add('scaledejar')
  ul6.classList.remove('textosanimaciones')
  ul7.classList.remove('textosanimaciones2')

  hacien2 = false;
  } else {
  btn3.classList.add('scalehacer')
  btn2.classList.add('scalemitad')
  btn1.classList.add('scalehacer')
  btn1.classList.remove('scaledejar')
  btn2.classList.remove('scaledejar')
  btn3.classList.remove('scaledejar')
  ul6.classList.add('textosanimaciones')
  ul7.classList.add('textosanimaciones2')


  hacien2 = true;
  }
})

btn3.addEventListener('click', function() {

  if(hacien3) {
    btn3.classList.remove('scalemitad')
  btn2.classList.remove('scalehacer')
  btn1.classList.remove('scalehacer')
  ul8.classList.remove('textosanimaciones')
  btn2.classList.add('scaledejar')
  btn3.classList.add('scaledejar')
  btn1.classList.add('scaledejar')

  hacien3 = false;
  } else {
  btn3.classList.add('scalemitad')
  btn2.classList.add('scalehacer')
  btn1.classList.add('scalehacer')
  ul8.classList.add('textosanimaciones')
  btn1.classList.remove('scaledejar')
  btn2.classList.remove('scaledejar')
  btn3.classList.remove('scaledejar')
  hacien3 = true;
  }
})





const FAQ1 = document.getElementById('FAQ1')
const FAQ2 = document.getElementById('FAQ2')
const FAQ3 = document.getElementById('FAQ3')
const FAQ4 = document.getElementById('FAQ4')
const FAQ5 = document.getElementById('FAQ5')
const respuesta_FAQ1 = document.getElementById('respuesta_FAQ1')
const respuesta_FAQ2 = document.getElementById('respuesta_FAQ2')
const respuesta_FAQ3 = document.getElementById('respuesta_FAQ3')
const respuesta_FAQ4 = document.getElementById('respuesta_FAQ4')
const respuesta_FAQ5 = document.getElementById('respuesta_FAQ5')
const expandir = document.getElementById('expandir')
const expandir2 = document.getElementById('expandir2')
const expandir3 = document.getElementById('expandir3')
const expandir4 = document.getElementById('expandir4')
const expandir5 = document.getElementById('expandir5')

var apr = false;
var apr2 = false;
var apr3 = false;
var apr4 = false;
var apr5 = false;

FAQ1.addEventListener('click', function() {
  if(apr) {
  respuesta_FAQ1.classList.remove('animacionesFAQ')
  respuesta_FAQ1.classList.add('animacionesFAQremove')
  expandir.classList.add('rotatearrowNO')
  expandir.classList.remove('rotatearrow')
  apr = false;
  } else {
    respuesta_FAQ1.classList.add('animacionesFAQ')
    respuesta_FAQ1.classList.remove('animacionesFAQremove')
    expandir.classList.add('rotatearrow')
    expandir.classList.remove('rotatearrowNO')
    apr = true;
  }
})

FAQ2.addEventListener('click', function() {
  if(apr2) {
  respuesta_FAQ2.classList.remove('animacionesFAQ')
  respuesta_FAQ2.classList.add('animacionesFAQremove')
  expandir2.classList.add('rotatearrowNO')
  expandir2.classList.remove('rotatearrow')
  apr2 = false;
  } else {
    respuesta_FAQ2.classList.add('animacionesFAQ')
    respuesta_FAQ2.classList.remove('animacionesFAQremove')
    expandir2.classList.add('rotatearrow')
    expandir2.classList.remove('rotatearrowNO')
    apr2 = true;
  }
})

FAQ3.addEventListener('click', function() {
  if(apr3) {
  respuesta_FAQ3.classList.remove('animacionesFAQ')
  respuesta_FAQ3.classList.add('animacionesFAQremove')
  expandir3.classList.add('rotatearrowNO')
  expandir3.classList.remove('rotatearrow')
  apr3 = false;
  } else {
    respuesta_FAQ3.classList.add('animacionesFAQ')
    respuesta_FAQ3.classList.remove('animacionesFAQremove')
    expandir3.classList.add('rotatearrow')
    expandir3.classList.remove('rotatearrowNO')
    apr3 = true;
  }
})

FAQ4.addEventListener('click', function() {
  if(apr4) {
  respuesta_FAQ4.classList.remove('animacionesFAQ')
  respuesta_FAQ4.classList.add('animacionesFAQremove')
  expandir4.classList.add('rotatearrowNO')
  expandir4.classList.remove('rotatearrow')
  apr4 = false;
  } else {
    respuesta_FAQ4.classList.add('animacionesFAQ')
    respuesta_FAQ4.classList.remove('animacionesFAQremove')
    expandir4.classList.add('rotatearrow')
    expandir4.classList.remove('rotatearrowNO')
    apr4 = true;
  }
})

FAQ5.addEventListener('click', function() {
  if(apr5) {
  respuesta_FAQ5.classList.remove('animacionesFAQ')
  respuesta_FAQ5.classList.add('animacionesFAQremove')
  expandir5.classList.add('rotatearrowNO')
  expandir5.classList.remove('rotatearrow')
  apr5 = false;
  } else {
    respuesta_FAQ5.classList.add('animacionesFAQ')
    respuesta_FAQ5.classList.remove('animacionesFAQremove')
    expandir5.classList.add('rotatearrow')
    expandir5.classList.remove('rotatearrowNO')
    apr5 = true;
  }
})



const softwaresaved3 = document.getElementById('softwaresaved3')
const iradire3 = document.getElementById('iradire3')
const borrardire3 = document.getElementById('borrardire3')
const software3 = document.getElementById('software3')
const exp4 = document.getElementById('exp4')
const loco2 = document.getElementById('loco2')
const flechaa3 = document.getElementById('flechaa3')
const curric2 = document.getElementById('curric2')
const agre3 = document.getElementById('agre3')
const ag3 = document.getElementById('ag3')
const enviar2 = document.getElementById('enviar2')
const arrastrar3 = document.getElementById('arrastrar3')

var cambiarletra2 = false;


exp4.addEventListener('click', function() {

  if(cambiarletra2) {
    loco2.innerHTML = 'más'
    flechaa3.innerHTML = 'expand_more'
    software3.style.height = '450px'
    arrastrar3.style.display = 'none'
    enviar2.style.display = 'none'
    
    cambiarletra2 = false;
  } else {

    loco2.innerHTML = 'menos'
    flechaa3.innerHTML = 'expand_less'
    software3.style.height = '730px'
    arrastrar3.style.display = 'block'
    enviar2.style.display = 'block'
    
    cambiarletra2 = true;
  }
})

var guardarDUDA = false;
var HECLICKEADO3 = false;
var adnoti3 = false;

borrardire3.addEventListener('click', function() {
  softwaresaved3.style.display = 'none'
  ag3.innerHTML = 'bookmark_add'
  adnoti1 = false;
  adnoti = false;
  guardarDUDA = false;

  guardar = false;
  cliked--;

  recogerClicks()
})


agre3.addEventListener('click', function() {

  if(guardarDUDA) {
    ag3.innerHTML = 'bookmark_add'
    azulbola.style.display = 'none'
    guardarDUDA = false;

    cliked--;

    HECLICKEADO3 = false;

    recogerClicks()
  } else {

    ag3.innerHTML = 'bookmark_added'
    azulbola.style.display = 'block'
    guardarDUDA = true;

    cliked++;

    HECLICKEADO3 = true;
    recogerClicks()
  }

  if(HECLICKEADO3) {
    softwaresaved3.style.display = 'block'

HECLICKEADO3 = false;
  } else {
    softwaresaved3.style.display = 'none'

    HECLICKEADO3 = true;
  }
})


const cruz_cerrar = document.getElementById('cruz_cerrar')
const posibles_ajustes = document.getElementById('posibles_ajustes')
const config = document.getElementById('config')

config.addEventListener('click', function() {
  posibles_ajustes.style.display = 'block'
})

cruz_cerrar.addEventListener('click', function() {
  posibles_ajustes.style.display = 'none'
})

const toggleButton = document.querySelector('.toggle-button');
const ball = document.querySelector('.ball');

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
  if (toggleButton.classList.contains('active')) {
    ball.style.transform = 'translateX(30px)';
  } else {
    ball.style.transform = 'translateX(0)';
  }
})



const toggleButton2 = document.querySelector('.toggle-button2');
const ball2 = document.querySelector('.ball2');

toggleButton2.addEventListener('click', () => {
  toggleButton2.classList.toggle('active2');
  if (toggleButton2.classList.contains('active2')) {
    ball2.style.transform = 'translateX(30px)';
  } else {
    ball2.style.transform = 'translateX(0)';
  }
})



const toggleButton3 = document.querySelector('.toggle-button3');
const ball3 = document.querySelector('.ball3');

toggleButton3.addEventListener('click', () => {
  toggleButton3.classList.toggle('active3');
  if (toggleButton3.classList.contains('active3')) {
    ball3.style.transform = 'translateX(30px)';
  } else {
    ball3.style.transform = 'translateX(0)';
  }
})



const toggleButton4 = document.querySelector('.toggle-button4');
const ball4 = document.querySelector('.ball4');

toggleButton4.addEventListener('click', () => {
  toggleButton4.classList.toggle('active4');
  if (toggleButton4.classList.contains('active4')) {
    ball4.style.transform = 'translateX(30px)';
  } else {
    ball4.style.transform = 'translateX(0)';
  }
})


const toggleButton5 = document.querySelector('.toggle-button5');
const ball5 = document.querySelector('.ball5');
const sexta = document.getElementById('sexta_opcion');
const septima = document.getElementById('septima_opcion');
const octava = document.getElementById('octava_opcion');
const novena = document.getElementById('novena_opcion');

toggleButton5.addEventListener('click', () => {
  toggleButton5.classList.toggle('active5');
  if (toggleButton5.classList.contains('active5')) {
    ball5.style.transform = 'translateX(30px)';
    sexta.style.visibility = 'visible';
    septima.style.visibility = 'visible';
    octava.style.visibility = 'visible';
    novena.style.visibility = 'visible';
  } else {
    sexta.style.visibility = 'hidden';
    septima.style.visibility = 'hidden';
    octava.style.visibility = 'hidden';
    novena.style.visibility = 'hidden';
    ball5.style.transform = 'translateX(0)';
  }
});




const toggleButton6 = document.querySelector('.toggle-button6');
const ball6 = document.querySelector('.ball6');

toggleButton6.addEventListener('click', () => {
  toggleButton6.classList.toggle('active6');
  if (toggleButton6.classList.contains('active6')) {
    ball6.style.transform = 'translateX(30px)';
  } else {
    ball6.style.transform = 'translateX(0)';
  }
})




const toggleButton7 = document.querySelector('.toggle-button7');
const ball7 = document.querySelector('.ball7');

toggleButton7.addEventListener('click', () => {
  toggleButton7.classList.toggle('active7');
  if (toggleButton7.classList.contains('active7')) {
    ball7.style.transform = 'translateX(30px)';
  } else {
    ball7.style.transform = 'translateX(0)';
  }
});
