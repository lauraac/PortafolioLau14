var texto="Laura Alfonso";
var i = 0;
function maquina(){
 if(i < texto.length){
  document.getElementById('centrado').innerHTML+=texto.charAt(i);
  i++;
 }
}

setInterval(maquina, 80);

var texto1="About me";
let box1 = 0;
function maquinaescribir1(){
 if(box1 < texto1.length){
  document.getElementById('titulo-about').innerHTML+=texto1.charAt(box1);
  box1++;
 }
}

setInterval(maquinaescribir1, 80);

var texto2="Proyects";
let box2 = 0;
function maquinaescribir2(){
 if(box2 < texto2.length){
  document.getElementById('titulo-proyectos').innerHTML+=texto2.charAt(box2);
  box2++;
 }
}

setInterval(maquinaescribir2, 80);



var texto3="Courses";
let box3 = 0;
function maquinaescribir3(){
 if(box3 < texto2.length){
  document.getElementById('titulo-cursos').innerHTML+=texto3.charAt(box3);
  box3++;
 }
}

setInterval(maquinaescribir3, 80);





var texto4="Skills";
let box4 = 0;
function maquinaescribir4(){
 if(box4 < texto4.length){
  document.getElementById('titulo-skills').innerHTML+=texto4.charAt(box4);
  box4++;
 }
}

setInterval(maquinaescribir4, 80);





var texto5="Contact";
let box5 = 0;
function maquinaescribir5(){
 if(box5 < texto5.length){
  document.getElementById('titulo-contact').innerHTML+=texto5.charAt(box5);
  box5++;
 }
}

setInterval(maquinaescribir5, 80);



