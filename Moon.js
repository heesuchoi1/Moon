var bg;
var r, g, b;

function setup(){
createCanvas(1000,1000);
bg = loadImage("bg.jpg");
	r = random(255);
    g = random(255);
    b = random(255);

ellipse(250,250,50,50);
}

function draw(){
noStroke();
background(bg);



fill(211,53,53);
ellipse(width/2,height/2,400,400);




var duration3 = 3000;
var timing3 = (new Date()%duration3)/duration3;

var duration4 = 1000;
var timing4 = (new Date()%duration4)/duration4;

strokeWeight(2);
    noStroke();
    fill(r, g, b, 127);
    ellipse(500, 500, 400,400);
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
fill(255);
ellipse(500+Math.cos(timing3*2*PI)*300 + Math.cos(timing4*2*PI)*80,                         
        500+Math.sin(timing3*2*PI)*300 + Math.sin(timing4*2*PI)*80, 
        30,                                  
        30);
        
//지구
var duration = 3000;
var timing = (new Date()%duration)/duration;

fill(5,130,173);
ellipse(500 + Math.cos(timing3*2*PI)*300,500 + Math.sin(timing3*2*PI)*300 ,100,100); 
	

	//별//
	fill(Math.random()*255,Math.random()*255,Math.random()*255,100);
    var y;
    y=300;
     
    ellipse(20,180,10,10);
    ellipse(120,80,15,15);
    ellipse(190,50,5,5);
    ellipse(300,150,10,10);
    ellipse(600,300,5,5);
    ellipse(380,400,10,10);
    ellipse(50,90,15,15);
    ellipse(255,40,5,5);
    ellipse(115,75,10,10);
    ellipse(345,55,5,5);
    ellipse(275,85,10,10);
    ellipse(655,100,15,15);
    ellipse(220,110,5,5);
    ellipse(105,615,5,5);
    ellipse(900,150,10,10);
    ellipse(35,165,15,15);
    ellipse(75,210,5,5);
    ellipse(30,700,10,10);
    ellipse(800,250,7,7);
    ellipse(25,800,5,5);
    ellipse(290,845,5,5);
    ellipse(365,140,10,10);
    ellipse(955,200,7,7);
    ellipse(390,270,15,15);
    ellipse(340,300,10,10);
    ellipse(350,365,3,3);
    ellipse(900,395,5,5);
    ellipse(170,370,10,10);
    ellipse(115,355,6,6);
    ellipse(60,335,15,15);
    ellipse(80,280,5,5);

drawCircle();
drawCircle1();
}

function drawCircle(){
noFill();
stroke(255);
ellipse(width/2,height/2,600,600);
}

function drawCircle1(){
noFill();
stroke(255);
ellipse(width/2,height/2,750,750);
}

function mousePressed(){
	var d = dist(mouseX,mouseY, 360,200);
	if(d<800){
		r=random(255);
		g=random(255);
		b=random(255);
	}
}