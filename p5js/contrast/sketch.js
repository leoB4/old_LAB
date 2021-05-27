
let couleur;
let squarres = [];
function setup(){
    createCanvas(innerWidth, innerHeight);
    background(45);
    for (let sq = 0; sq < 1000; sq++) {
        squarres.push(new Squarre(-100,random(0,innerHeight+1000),random(1,4),random(1,4),0));
      }
}

function draw(){
    
    for(i=0; i<squarres.length ;i++){

        squarres[i].move();
        squarres[i].goBack();
        squarres[i].show();
        
    }
}

class Squarre {
    constructor(x,y,wdth,hght, col){
        this.x = x;
        this.y = y;
        this.wdth = wdth;
        this.hght = hght; 
        this.col = col;
    }
    
    move(){
        this.x = this.x + 7;
    }
    
    goBack(){
        if(this.x > innerWidth + 100 && this.y > -100){
            this.x = -100;
            this.y = random(0,innerHeight+1000);
        }
    }
    
    show(){
        
        couleur = map(this.x, -50, innerWidth+50, this.col, this.col+255);
        
        stroke(0);
        strokeWeight(2);
        fill(couleur);
        rectMode(CENTER);
        rect(this.x, this.y, this.wdth * random(1,10), this.hght * random(1,10));
    }
}