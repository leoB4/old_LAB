function setup() {
    createCanvas(innerWidth, innerHeight, WEBGL);
}

function draw() {
    background(250);
    rotateY(frameCount * 0.001);
  
    for (let j = 0; j < 20; j++) {
      push();
      for (let i = 0; i < 50; i++) {
        translate(
          cos(frameCount * -0.01 + j) * 50,
          sin(frameCount * -0.00001 + j) * 10,
          i * 2
        );
        rotateZ(frameCount * 0.002);
        push();
        box(10);
        pop();
      }
      pop();
    }
  }
  