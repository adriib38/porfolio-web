console.log('FUNCTIONS.JS')



let flechaUp = document.getElementById("flecha-5");
flechaUp.addEventListener('click', function(){
  console.log('Hola');
  setScroll(1);

});


let flechas = document.getElementsByClassName("fa-chevron-down");
console.log(flechas);
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

/** 
for (var i = 0; i < flechas.length; i++) {
  (function(index) {
    flechas[index].addEventListener("click", function() {
      console.log('Scrolleando');
      let s = window.scrollY + 850;
      setScroll(s);
    })
  })(i);
}
*/
  
/**

var scrollPos = 0;
window.addEventListener('scroll', function(){
  if ((document.body.getBoundingClientRect()).top > scrollPos){
    // ARRIBA
    let scroll = window.scrollY - 600;
    setScroll(scroll);
  }else{
    // ABAJO
    let scroll = window.scrollY + 600;
    setScroll(scroll);
  }
  console.log(window.scrollY);

});

*/


function setScroll(s){
  window.scroll({
    top: s,
    behavior: 'smooth'
  });
}