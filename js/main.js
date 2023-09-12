'use strict'


// Dark Mood
const btnDark = document.querySelector('.dark__btn')
const bodyDark = document.querySelector('body')


//BurgetBtn



///////////////////////////////////////////////////////////////

btnDark.addEventListener('click', function () {
  btnDark.classList.toggle('active');
  const isDark = document.body.classList.toggle('dark-bg');

  if (isDark) {
    localStorage.setItem('darkMode', 'dark-bg')
  } else {
    localStorage.setItem('darkMode', 'light');
  }
})
//1.Проверка тёмной темы на уровне системных настроек

// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark-bg)').matches) {
//   btnDarkMode.classList.add('active');
//   document.body.classList.add('dark-bg');
// }

//2. Проверка тёмной темы в localStorage

if (localStorage.getItem('darkMode') === 'dark-bg') {
  btnDark.classList.add('active');
  document.body.classList.add('dark-bg');
} else if (localStorage.getItem('darkMode') === 'light') {
  btnDark.classList.remove('active');
  document.body.classList.remove('dark-bg');
}




// Если меняются системные настройки, меняем тему

// window.matchMedia('(prefers-color-scheme: dark-bg)').addEventListener('change', (event) => {
//   const newColorScheme = event.matches ? 'dark-bg' : 'light';


//   if (newColorScheme === 'dark-bg') {
//     btnDark.classList.add('active');
//     document.body.classList.add('dark-bg');
//     localStorage.setItem('darkMode', 'dark-bg');


//   } else {
//     btnDark.classList.remove('active');
//     document.body.classList.remove('dark-bg');
//     localStorage.setItem('darkMode', 'light');
//   }
// })



const buttBurg = document.querySelector('.burger');
const navMenu = document.querySelector('.nav__menu')
const navX = document.querySelector('.burger__x')
const xSS = document.querySelector('.xss')
// console.log(navX);

// console.log(buttBurg);

buttBurg.addEventListener('click', function () {
  navMenu.classList.toggle('nav__menu--active')
  buttBurg.classList.add('hidden')
  navX.classList.add('active')
  xSS.classList.add('xlink')
})

navX.addEventListener('click', function () {
  navMenu.classList.toggle('nav__menu--active')
  buttBurg.classList.remove('hidden')
  xSS.classList.remove('xlink')
})

xSS.addEventListener('click', function () {
  xSS.classList.remove('xlink')
  navMenu.classList.toggle('nav__menu--active')
  buttBurg.classList.remove('hidden')
})