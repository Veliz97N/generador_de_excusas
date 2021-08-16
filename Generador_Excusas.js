function generateRandom(array){    
    let rango_maximo= array.length;
    let aleatorio=Math.floor(Math.random()*(rango_maximo-0)+0);    
    return aleatorio;
}

function generarOracion(){
    let who=["Mi perro","Mi gato","Mi tigre","Mi dragón","Mi mamá","Mi papá","Chuck Norris"];
    let action=["comio","rompio","rajo","quemo","le disparo con un rasho laser a"];
    let what = ["mi tarea","mi trabajo","las llaves","la casa","el departamento","el auto"];
    let when = ["antes de clases","antes del trabajo","cuando caminaba","durante el almuerzo","mientras oraba"];
    let oracion = who[generateRandom(who)]+" "+action[generateRandom(action)]+" "+what[generateRandom(what)]+" "+when[generateRandom(when)];
    return oracion;
}
const boton = document.getElementById("boton");
let contador=0;

window.onload= function(){    
    document.querySelector("#Generador").innerHTML = generarOracion();
};

boton.onclick= function(){        
    contador+=1;
    if(contador>=5){
        alert("No hay mas excusas mi niño");
        document.querySelector('#Generador').innerHTML = "Muchas excusas por el dia papi";
        boton.innerText="No hay mas excusas";    
        boton.disabled=true;       
        
    }
    else{
        alert("Hoy llevas: " +contador+ " excusas");
        document.querySelector('#Generador').innerHTML = generarOracion();        
    }    
};



