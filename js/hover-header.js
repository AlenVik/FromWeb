// 'use strict'

// // const nav = document.querySelector('.nav');


// // const navLinksHoverAnimation = function (e, opacity) {
// //   if (e.target.classList.contains('nav__menu-link')) {
// //     const linkOver = e.target;
// //     const siblingLinkst = linkOver.closest('.nav__menu').querySelectorAll('.nav__menu-link');
// //     const logo = linkOver.closest('.nav').querySelector('.logo')
// //     const logoText = linkOver.closest('.nav').querySelector('.logo-bold');

// //     siblingLinkst.forEach(el => {
// //       if (el !== linkOver) el.style.opacity = opacity;
// //     })
// //     logo.style.opacity = opacity;
// //     logoText.style.opacity = opacity;
// //   }
// // }


// // nav.addEventListener('mouseover', function (e) {
// //   navLinksHoverAnimation(e, 0.4)
// // })

// // nav.addEventListener('mouseout', function (e) {
// //   navLinksHoverAnimation(e, 1)
// // })

// const nav = document.querySelector('.nav');

// const navLinksHoverAnimation = function (e) {
//   if (e.target.classList.contains('nav__menu-link')) {
//     const linkOver = e.target;
//     const siblingLinkst = linkOver.closest('.nav__menu').querySelectorAll('.nav__menu-link');

//     siblingLinkst.forEach(el => {
//       if (el !== linkOver) el.style.opacity = this;
//     })
//   }
// }

// nav.addEventListener('mouseover', navLinksHoverAnimation.bind(0.4))
// nav.addEventListener('mouseout', navLinksHoverAnimation.bind(1))