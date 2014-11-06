var bg;

function setup(){
createCanvas(1000,1000);
bg = loadImage("bg.jpg");
background(255);
ellipse(250,250,50,50);
}

function draw(){
noStroke();
background(bg);

fill(211,53,53);
ellipse(width/2,height/2,400,400);

drawCircle();


var duration3 = 3000;
var timing3 = (new Date()%duration3)/duration3;

var duration4 = 1000;
var timing4 = (new Date()%duration4)/duration4;

//달1
/*fill(200,200,200);
ellipse(250 + Math.cos(timing*2*PI)*50,                         
        250 + Math.sin(timing*2*PI)*50, 
        50,                                  
        50); */
//달2
var duration2 = 4000;
var timing2 = (new Date()%duration2)/duration2;

fill(150,150,150);
ellipse(500+Math.cos(timing3*2*PI)*300 + Math.cos(timing2*4*PI)*70,                         
        500+Math.sin(timing3*2*PI)*300 + Math.sin(timing2*4*PI)*70, 
        10,                                  
        10);   
//달3
fill(0);
ellipse(500+Math.cos(timing3*2*PI)*300 + Math.cos(timing4*2*PI)*80,                         
        500+Math.sin(timing3*2*PI)*300 + Math.sin(timing4*2*PI)*80, 
        30,                                  
        30);
        
//지구
var duration = 3000;
var timing = (new Date()%duration)/duration;

fill(5,130,173);
ellipse(500 + Math.cos(timing3*2*PI)*300,500 + Math.sin(timing3*2*PI)*300 ,100,100); 

}

function drawCircle(){
noFill();
stroke(255);
ellipse(width/2,height/2,600,600);
}
