let htmlEntero = document.getElementById('sobre-n')


let oscuro1 = document.getElementById('oscuro1')
let oscuro2 = document.getElementById('oscuro2')







let menu = document.getElementById('menu')
let menuback = document.querySelector('.menu')
let miLista = document.querySelector('.ul10')
let barrera = document.querySelector('.interLinee')
let nose = document.querySelector('.ul11')

menu.addEventListener('click',function() {

  oscuro1.style.opacity = '0.5'
  oscuro2.style.opacity = '0.5'
  htmlEntero.style.overflowY = 'hidden'

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
  oscuro2.style.opacity = '1'
  htmlEntero.style.overflowY = 'auto'
})


window.addEventListener('scroll', function() {
  let scroll = window.pageYOffset || document.documentElement.scrollTop;
  let cuadrado = document.querySelector('.cuadrado')

  if(scroll >= 100) {
    cuadrado.style.backgroundColor = 'rgba(128,134,139,0.2)'
  }

  if(scroll < 100) {
    cuadrado.style.backgroundColor = 'white'
    cuadrado.style.color = 'black'
  }
})


let segundo = document.getElementById('segundo')
let tercero = document.getElementById('tercero')
let cuarto = document.getElementById('cuarto')
let quinto = document.getElementById('quinto')
let sexto = document.getElementById('sexto')

window.addEventListener('scroll', function(colores) {

  let scroll1 = this.window.pageYOffset || document.documentElement.scrollTop

  if(scroll1 > 100 ) {
    segundo.style.backgroundColor = '#001133'
    segundo.style.color = 'white'
    tercero.style.color = 'rgb(160, 155, 155)'
    cuarto.style.color = 'rgb(160, 155, 155)'
    quinto.style.color = 'rgb(160, 155, 155)'
    sexto.style.color  = 'rgb(160, 155, 155)'
    tercero.style.backgroundColor = 'rgb(248,249,250)'
    cuarto.style.backgroundColor = 'rgb(248,249,250)'
    quinto.style.backgroundColor = 'rgb(248,249,250)'
    sexto.style.backgroundColor = 'rgb(248,249,250)'

  }

  if(scroll1 >= 400) {
    segundo.style.backgroundColor = 'rgb(248,249,250)'
    tercero.style.backgroundColor = '#001133'
    tercero.style.color = 'white'
    segundo.style.color = 'rgb(160, 155, 155)'
    cuarto.style.color = 'rgb(160, 155, 155)'
    quinto.style.color = 'rgb(160, 155, 155)'
    sexto.style.color  = 'rgb(160, 155, 155)'
    cuarto.style.backgroundColor = 'rgb(248,249,250)'
    quinto.style.backgroundColor = 'rgb(248,249,250)'
    sexto.style.backgroundColor = 'rgb(248,249,250)'
  }

  if(scroll1 >= 1400) {
    segundo.style.backgroundColor = 'rgb(248,249,250)'
    tercero.style.backgroundColor = 'rgb(248,249,250)'
    cuarto.style.backgroundColor = '#001133'
    cuarto.style.color = 'white'
    segundo.style.color = 'rgb(160, 155, 155)'
    tercero.style.color = 'rgb(160, 155, 155)'
    quinto.style.color = 'rgb(160, 155, 155)'
    sexto.style.color  = 'rgb(160, 155, 155)'
    quinto.style.backgroundColor = 'rgb(248,249,250)'
    sexto.style.backgroundColor = 'rgb(248,249,250)'
  }

  if(scroll1 >= 2100) {
    segundo.style.backgroundColor = 'rgb(248,249,250)'
    tercero.style.backgroundColor = 'rgb(248,249,250)'
    cuarto.style.backgroundColor = 'rgb(248,249,250)'
    quinto.style.backgroundColor = '#001133'
    quinto.style.color = 'white'
    segundo.style.color = 'rgb(160, 155, 155)'
    cuarto.style.color = 'rgb(160, 155, 155)'
    tercero.style.color = 'rgb(160, 155, 155)'
    sexto.style.color  = 'rgb(160, 155, 155)'
    sexto.style.backgroundColor = 'rgb(248,249,250)'
  }

  if(scroll1 >= 3000) {
    segundo.style.backgroundColor = 'rgb(248,249,250)'
    tercero.style.backgroundColor = 'rgb(248,249,250)'
    cuarto.style.backgroundColor = 'rgb(248,249,250)'
    quinto.style.backgroundColor = 'rgb(248,249,250)'
    sexto.style.backgroundColor = '#001133'
    sexto.style.color = 'white'
    segundo.style.color = 'rgb(160, 155, 155)'
    cuarto.style.color = 'rgb(160, 155, 155)'
    quinto.style.color = 'rgb(160, 155, 155)'
    tercero.style.color  = 'rgb(160, 155, 155)'
  }

  
})
