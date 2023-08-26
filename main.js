const frases = ["Simplifica tu vida con tecnología de vanguardia.", "Explora el poder de la innovación tecnológica.", "Construyendo soluciones tecnológicas a medida.", "Navega hacia el futuro con nuestra tecnología puntera.", "Descubre un mundo de posibilidades tecnológicas.", "Impulsando tu éxito con soluciones tecnológicas eficientes.", "Haciendo posible lo imposible a través de la tecnología.", "Conectando personas a través de la tecnología."];
const fraseElement = document.getElementById("frase");
let index = 0;
let intervalo;

function escribirFrase() {
  const fraseActual = frases[index];
  const palabras = fraseActual.split(" ");
  let i = 0;

  intervalo = setInterval(function() {
    if (i < palabras.length - 1) {
      fraseElement.innerHTML += palabras[i] + " ";
      i++;
    } else if (i === palabras.length - 1) {
      const ultimaPalabra = palabras[i];
      fraseElement.innerHTML += `<span style="color: ${getRandomColor()}">${ultimaPalabra}</span> `;
      clearInterval(intervalo);
      setTimeout(borrarFrase, 1000); 
    }
  }, 100); 
}

function borrarFrase() {
  let fraseActual = fraseElement.innerHTML;
  let i = fraseActual.length - 1;

  intervalo = setInterval(function() {
    if (i >= 0) {
      fraseActual = fraseActual.slice(0, -1);
      fraseElement.innerHTML = fraseActual;
      i--;
    } else {
      clearInterval(intervalo);
      fraseElement.innerHTML = "";
      index = (index + 1) % frases.length; 
      setTimeout(escribirFrase, 100); 
    }
  }, 50); 
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

escribirFrase();


window.addEventListener('scroll', function() {
  var elemento = document.getElementById('titulo');
  var elemento2 = document.getElementById('parrafotitulo')
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var elemento3 = document.getElementById('titulo2')
  var elemento4 = document.getElementById('parrafotitulo2')
  var elemento5 = document.querySelector('.ul3')
  var subelemento = elemento5.children[0]
  var subelemento2 = elemento5.children[1]
  var subelemento3 = elemento5.children[2]
  var elemento6 = document.getElementById('opciones_ele1')
  var elemento7 = document.getElementById('opciones')
  var elemento8 = document.querySelector('.ul4')
  var subelemento4 = elemento8.children[0]
  var subelemento5 = elemento8.children[1]
  var subelemento6 = elemento8.children[2]
  var elemento9 = document.getElementById('subline_servicios')
  var elemento10 = document.getElementById('subline2_servicios')
  


  if (scrollTop >= 200) {
    elemento2.classList.add('aparecer')
    elemento.classList.add('aparecer');
  }

  if(scrollTop >= 1500) {
    elemento3.classList.add('aparecer')
    elemento4.classList.add('aparecer')
  }


  if(scrollTop >= 2000) {
    subelemento2.classList.add('smoot_aparicion_2')
    subelemento.classList.add('smoot_aparicion_1')
    subelemento3.classList.add('smoot_aparicion_3')
    elemento6.classList.add('scale_menu_line')
    elemento7.classList.add('inicio_menus')
    subelemento4.classList.add('scalesopcion1')
    subelemento5.classList.add('scalesopcion2')
    subelemento6.classList.add('scalesopcion3')
  }

  if(scrollTop >= 2400) {
    elemento9.classList.add('left-to-right')
    elemento10.classList.add('right-to-left')
  }
  
});




let numeros = document.querySelector('.ul6')
let numeros2 = document.querySelector('.ul7')
let numeros3 = document.querySelector('.ul8')
let HTMLcode = document.getElementById('htmlcode')
let CSScode = document.getElementById('csscode')
let JScode = document.getElementById('jscode')

let buttonHTML = document.getElementById('html')
let buttonCSS = document.getElementById('css')
let buttonJS = document.getElementById('js')

buttonHTML.addEventListener('click', function() {
  numeros.style.display = 'block'
  HTMLcode.style.display = 'block'
  buttonHTML.style.backgroundColor = 'orange'
  buttonCSS.style.backgroundColor = 'white'
  buttonJS.style.backgroundColor = 'white'
  numeros2.style.display = 'none'
  CSScode.style.display = 'none'
  numeros3.style.display = 'none'
  JScode.style.display = 'none'
})

buttonCSS.addEventListener('click', function() {
  numeros.style.display = 'none'
  HTMLcode.style.display = 'none'
  buttonHTML.style.backgroundColor = 'white'
  buttonCSS.style.backgroundColor = 'rgb(66, 141, 240)'
  buttonJS.style.backgroundColor = 'white'
  numeros2.style.display = 'block'
  CSScode.style.display = 'block'
  numeros3.style.display = 'none'
  JScode.style.display = 'none'
})

buttonJS.addEventListener('click', function() {
  buttonHTML.style.backgroundColor = 'white'
  buttonCSS.style.backgroundColor = 'white'
  buttonJS.style.backgroundColor = 'yellow'
  numeros.style.display = 'none'
  HTMLcode.style.display = 'none'
  numeros2.style.display = 'none'
  CSScode.style.display = 'none'
  numeros3.style.display = 'block'
  JScode.style.display = 'block'
})



let aprender = document.getElementById('aprender')
let diagonal = document.getElementById('diag')
let saber = document.getElementById('learn')
let resenas = document.getElementById('rese')
let agregar = document.getElementById('adds')



aprender.addEventListener('mouseover', function() {
  diagonal.style.marginLeft = '10px'
  diagonal.style.marginTop = '-10px'
  
})



aprender.addEventListener('mouseout', function() {
  diagonal.style.marginLeft = '0px'
  diagonal.style.marginTop = '0px'
})

resenas.addEventListener('mouseover', function() {
  agregar.style.rotate = '360deg'
})

resenas.addEventListener('mouseout', function() {
  agregar.style.rotate = '0deg'
})



let btneste1 = document.getElementById('btneste1')
let btneste2 = document.getElementById('btneste2')
let btneste3 = document.getElementById('btneste3')
let btneste4 = document.getElementById('btneste4')
let btneste5 = document.getElementById('btneste5')
let estrella1 = document.getElementById('estrella1')
let estrella2 = document.getElementById('estrella2')
let estrella3 = document.getElementById('estrella3')
let estrella4 = document.getElementById('estrella4')
let estrella5 = document.getElementById('estrella5')
let cerrar = document.getElementById('cerrar')
let opiniones = document.getElementById('opiniones')


btneste1.addEventListener('click', function() {
  estrella1.style.backgroundColor = 'yellow'
  estrella2.style.backgroundColor = 'white'
  estrella3.style.backgroundColor = 'white'
  estrella4.style.backgroundColor = 'white'
  estrella5.style.backgroundColor = 'white'
})

btneste2.addEventListener('click', function() {
  estrella1.style.backgroundColor = 'yellow'
  estrella2.style.backgroundColor = 'yellow'
  estrella3.style.backgroundColor = 'white'
  estrella4.style.backgroundColor = 'white'
  estrella5.style.backgroundColor = 'white'
})

btneste3.addEventListener('click', function() {
  estrella1.style.backgroundColor = 'yellow'
  estrella2.style.backgroundColor = 'yellow'
  estrella3.style.backgroundColor = 'yellow'
  estrella4.style.backgroundColor = 'white'
  estrella5.style.backgroundColor = 'white'
})

btneste4.addEventListener('click', function() {
  estrella1.style.backgroundColor = 'yellow'
  estrella2.style.backgroundColor = 'yellow'
  estrella3.style.backgroundColor = 'yellow'
  estrella4.style.backgroundColor = 'yellow'
  estrella5.style.backgroundColor = 'white'
})

btneste5.addEventListener('click', function() {
  estrella1.style.backgroundColor = 'yellow'
  estrella2.style.backgroundColor = 'yellow'
  estrella3.style.backgroundColor = 'yellow'
  estrella4.style.backgroundColor = 'yellow'
  estrella5.style.backgroundColor = 'yellow'
})

cerrar.addEventListener('click', function(close) {
  opiniones.style.display = 'none'
  untech.style.overflowY = 'visible'
  estrella1.style.backgroundColor = 'white'
  estrella2.style.backgroundColor = 'white'
  estrella3.style.backgroundColor = 'white'
  estrella4.style.backgroundColor = 'white'
  estrella5.style.backgroundColor = 'white'
})

let resena = document.getElementById('rese')

resena.addEventListener('click',function() {
  opiniones.style.display = 'block'
  opiniones.classList.add('apear')
  untech.style.overflowY = 'hidden'
})



let untech = document.getElementById('untech')