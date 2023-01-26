console.log('FUNCTIONS.JS')


let flechaUp = document.getElementById("flecha-5");
flechaUp.addEventListener('click', function(){
  console.log('Hola');
  setScroll(1);

});


let flechas = document.getElementsByClassName("fa-chevron-down");
for (var i = 0; i < flechas.length; i++) {
  if(flechas[i].id == 'flecha-1'){
    flechas[i].addEventListener('click', function(){
      setScroll(810);
    });
  }

  if(flechas[i].id == 'flecha-2'){
    flechas[i].addEventListener('click', function(){
      setScroll(1697);
    });
  }

  if(flechas[i].id == 'flecha-3'){
    flechas[i].addEventListener('click', function(){
      setScroll(2583);
    });
  }

  if(flechas[i].id == 'flecha-4'){
    flechas[i].addEventListener('click', function(){
      setScroll(3468);
    });
  }
}

function setScroll(s){
  window.scroll({
    top: s,
    behavior: 'smooth'
  });
}

let btn_snow = document.getElementById("btn-snow");
btn_snow.addEventListener('click', function(){
  console.log('SNOW!');
  var snow = document.getElementById("snow");
  snow.classList.toggle("snow-none");
  btn_snow.classList.toggle("color-white");
})

let btn_book = document.getElementById("btn-book");
btn_book.addEventListener('click', function(){
  console.log('BOOK!');
  
})