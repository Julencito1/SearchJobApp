let todoHTML = document.getElementById('careersHTML')









const input = document.getElementById('input');
const datalist = document.getElementById('trabajos');
const botonBuscar = document.getElementById('buscar');
let software = document.getElementById('puestos')
let front = document.getElementById('frontend')
let back = document.getElementById('backend')
let analist = document.getElementById('analist')
let cibersecurity = document.getElementById('cibersecurity')
let miimg = document.getElementById('goimg')




botonBuscar.addEventListener('click', function() {
  const selectedOption = Array.from(datalist.options).find(option => option.value === input.value);
  
  if (selectedOption && selectedOption.value === 'Software Engineer') {
    software.style.display = 'block'
    front.style.display = 'none'
    back.style.display = 'none'
    analist.style.display = 'none'
    cibersecurity.style.display = 'none'
    miimg.style.display = 'none'
    
  }
});

botonBuscar.addEventListener('click', function() {

  const selectedOption2 = Array.from(datalist.options).find(option => option.value === input.value)

  if (selectedOption2 && selectedOption2.value === 'Front End') {
    software.style.display = 'none'
    front.style.display = 'block'
    back.style.display = 'none'
    analist.style.display = 'none'
    cibersecurity.style.display = 'none'
    miimg.style.display = 'none'
  }

})

botonBuscar.addEventListener('click', function() {

  const selectedOption3 = Array.from(datalist.options).find(option => option.value === input.value)

  if (selectedOption3 && selectedOption3.value === 'Back End') {
    software.style.display = 'none'
    front.style.display = 'none'
    back.style.display = 'block'
    analist.style.display = 'none'
    cibersecurity.style.display = 'none'
    miimg.style.display = 'none'
  }

})

botonBuscar.addEventListener('click', function() {

  const selectedOption4 = Array.from(datalist.options).find(option => option.value === input.value)

  if (selectedOption4 && selectedOption4.value === 'Analist') {
    software.style.display = 'none'
    front.style.display = 'none'
    back.style.display = 'none'
    analist.style.display = 'block'
    cibersecurity.style.display = 'none'
    miimg.style.display = 'none'
  }

})

botonBuscar.addEventListener('click', function() {

  const selectedOption5 = Array.from(datalist.options).find(option => option.value === input.value)

  if (selectedOption5 && selectedOption5.value === 'Cibersecurity') {
    software.style.display = 'none'
    front.style.display = 'none'
    back.style.display = 'none'
    analist.style.display = 'none'
    cibersecurity.style.display = 'block'
    miimg.style.display = 'none'
  }

})

let menu = document.getElementById('menu')
let menuback = document.querySelector('.menu')
let miLista = document.querySelector('.ul10')
let barrera = document.querySelector('.interLinee')
let nose = document.querySelector('.ul11')
let oscuro1 = document.getElementById('oscuro1')

menu.addEventListener('click',function() {


  oscuro1.style.opacity = '0.5'
  todoHTML.style.overflowY = 'hidden'

  if(menuback.style.width === '300px') {
  menuback.style.width = '00px'
  menuback.style.marginLeft = '00px'
  } else {
    menuback.style.width = '300px'
    menuback.style.marginLeft = '-300px'
    miLista.style.display = 'block'
    barrera.style.display = 'block'
    nose.style.display = 'block'
  }
})

let cruz = document.getElementById('cerrar')

cruz.addEventListener('click', function() {
  menuback.style.width = '0px'
  menuback.style.marginLeft = '0px'
  oscuro1.style.opacity = '1'
  
  todoHTML.style.overflowY = 'auto'
})