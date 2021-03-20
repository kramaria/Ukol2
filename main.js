// ukol na lekci
let odstavec = document.querySelector('p');
console.log(odstavec);
function priNajeti() {
  odstavec.classList.add("tucny");
} 

function priOdjeti() {

  odstavec.classList.remove("tucny");
}

// 1.ukol
function zmenBarvuNaCervenu() {
  odstavec.classList.toggle("cervena");
}


// 2.ukol
function zvetsi() {
  let style = window.getComputedStyle(odstavec, null).getPropertyValue('font-size');
let fontSize = parseInt(style); 
  odstavec.style.fontSize = (fontSize + 1) + 'px';
}
 // 3.ukol
/**  Funkce, ktera prehraje dany prvek.
* @param {string} elementSelector
*/

 let zvuk = document.querySelector("#js-audio");
function prehraj (elementSelector) {
  let audioElement = document.querySelector(elementSelector);
  audioElement.play();
}
// Funkce, ktera zastavi dany prvek.
function stopni (elementSelector) {
  let audioElement = document.querySelector(elementSelector);
  audioElement.pause();
}
function ztisit(elementSelector) {
  let audioElement = document.querySelector(elementSelector);
  audioElement.volume = 0;
}
  
function hlasitostAkorat(elementSelector) {
  let audioElement = document.querySelector(elementSelector);
  audioElement.volume = 0.5;
}

function hlasitostMaximum(elementSelector) {
  let audioElement = document.querySelector(elementSelector);
  audioElement.volume = 1;
}

function nastavZacatek(elementSelector) {
  let audioElement = document.querySelector(elementSelector);
  audioElement.currentTime = 0;
  audioElement.play();
}