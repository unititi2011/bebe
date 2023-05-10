som="";
status2 ="";
objetos=[];
objetodetectato="";
function preload() {
    som=loadSound("buzzer_alarm.mp3")
}
function setup() {
    canvas=createCanvas(380,380);
    canvas.center();
video=createCapture(VIDEO);
video.size(380,380);
video.hide();
    
}
function inicio() {
    objetodetectato=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("sta").innerHTML="Status detectando objetos"
}
function modelLoaded() {
    console.log("modeloCarregado")
    status2="true";
    objetodetectato.detect(img,gotResult);
}
function draw() {
    image(video,0,0,380,380);
    if (status2!=" ") {
        for(i=0;i<objetos.length;i++){
            document.getElementById("sta").innerHTML="Objeto detectado"
            fill("red")
            porcentagem=floor(objetos[i].confidence*100);
            text(objetos[i].label+" "+porcentagem+"%",objetos[i].x+15,objetos[i].y+15);  
             
        }
    }
    }
function gotResult(error,results) {
    if(error){
        console.error(error);
    }
    else{console.log(results);
    objetos=results;
    }
}