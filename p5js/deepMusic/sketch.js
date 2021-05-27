let song, analyzer;
let cubes = [];

function preload() {
  song = loadSound('assets/NUNCA_Ballistique.mp3');
  
}

function setup() {
  createCanvas(innerWidth, innerHeight, WEBGL);

  song.loop();

  analyzer = new p5.Amplitude();

  analyzer.setInput(song);

}

function rmsChange(){
  if(analyzer.getLevel() > 0.5){
    let c = new Cube(10);
    cubes.push(c);
  }
}
function draw() {
  background(45);
  
  let rms = analyzer.getLevel();
  push();
  rotateZ(frameCount * -0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * -0.01);
  box(70 + rms * 100, 70 + rms * 100, 70 + rms * 100);
  
  rmsChange();
  
  for (let i=0; i < cubes.length; i++){
    //cubes[i].move();
    cubes[i].show();
  }
  
  pop();
}



class Cube {
  constructor(wdth){
    this.wdth = wdth;
    
  }
  move(){
    translate(random(-innerWidth/2 , innerWidth/2), random(-innerHeight/2,innerHeight/2));
  }

  show(){
    let rms = analyzer.getLevel();
    push();
    translate(random(-innerWidth/4,innerWidth/4),random(-innerHeight/4,innerHeight/4));
    //rotateZ(frameCount * -0.01);
    rotateX(frameCount * 0.0001);
    //rotateY(frameCount * -0.01);
    sphere(this.wdth + rms * 200);
    pop();
  }
}