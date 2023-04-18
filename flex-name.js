//Nos ayuda a no dejar pasar ningun errror
'use strict'
/*Pedimos el numero de cuadro donde escribir hola*/
var cuadro=prompt("Diga que cuadro quiere saludar","");
cuadro= parseInt(cuadro)
var cuadroActual="";
switch(cuadro){
    case 1:
        cuadroActual=document.getElementById("div"+cuadro);
        break;
    case 2:
        cuadroActual=document.getElementById("div"+cuadro);
        break;
    case 3:
        cuadroActual=document.getElementById("div"+cuadro);
        break;
    case 4:
            cuadroActual=document.getElementById("div"+cuadro);
            break;
    case 5:
        cuadroActual=document.getElementById("div"+cuadro);
        break;
    default:
        alert("Numero mal introducido")
}
var color=prompt("Ingrese el color que desea:"+
                "<br> a: blue"+
                "<br> b: red"+
                "<br> c: green")
switch(color){
    case "a":
        cuadroActual.style.color="blue";
        cuadroActual.style.color="blue";
        break;
    case "b":
        cuadroActual.style.color="red";
        break;    
    case "c":
        cuadroActual.style.color="green";
        break;
    default:
        alert("Eleccion incorrecta, COLOR POR DEFECTO")
}
//CUadro sera una variable numerica del 1-5
var tamaño=3;
var ret="";
for(var i=0;i<tamaño;i++){
    if(i==0){
        ret+="--o--"+'<br>'
    }else if(i==1){
        ret+="-ooo-"+'<br>'
    }else if(i==2){
        ret+="ooooo"
    }
}
cuadroActual.innerHTML=ret;