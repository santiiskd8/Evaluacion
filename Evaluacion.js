//circulo 1:
let cx1= 350;
let cy1= 540;
let vx1= 3; 
let vy2=3;
let variable = 255;
//circulo 2:
let cx2= 40;
let cy2= 550;
let vx3= 5; 
let vy4= 5;
let variable2 = 255;

function setup() {
  createCanvas(600,600);
}


function draw() {
  
  background(1);
  //Circulo 1:azul
  noStroke();
  fill(0,0,variable);
  ellipse(cx1,cy1,40,40);
 
  if(cx1 < 20 || cx1 > 580){
   vx1 = vx1 * (-1);
  }
 
  cx1 = cx1 + vx1;
  
  if(cy1 < 20 || cy1 > 580){
   vy2 = vy2 * (-1);
  } 
   
  cy1 = cy1 + vy2;
 
  if(cy1 >=580){
   Opacidad();
  }
        
  //Circulo 2:rojo
  noStroke();
  fill(variable2,0,0);
  ellipse(cx2,cy2,40,40);
  
  if(cx2 < 20 || cx2 > 580){
   vx3 = vx3 * (-1);
  }
 
  cx2 = cx2 + vx3;
  
  if(cy2 < 20 || cy2 > 580){
   vy4 = vy4 * (-1);
  }
 
  cy2 = cy2 + vy4;
  
   if(cy2 <= 20){
    Opacidad2();
  }

 
}
//resta la variable G del rgb hasta que sea menor o igual a 120 y vuelve a dejar la variable en 255 que es su estado inicial
function Opacidad(){
  variable = variable - 15;
  if(variable <= 120){
     variable = 255;
  }
}
//tuve que hacer la misma funcion pero cambiando la "variable" a "variable2" por que antes no me lo tomaba
function Opacidad2(){
  variable2 = variable2 - 15;
  if(variable2 <= 120){
     variable2 = 255;
  }
}
