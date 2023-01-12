'use strict'

const icon = document.querySelector('.icon-box');
const UnOrdbox = document.querySelector('.icon-ul-box');
const iconclose = document.querySelector('.icon-close');

icon.addEventListener('click', function () {
  UnOrdbox.classList.toggle('visible')
})

 iconclose.addEventListener('click', function (e) {
    UnOrdbox.classList.toggle('visible');
 });