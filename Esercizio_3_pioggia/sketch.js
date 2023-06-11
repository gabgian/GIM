let x1 = 10;
let y1 = 20;
let y2 = y1 + 10;
let vel= 0.01;

var drop = [];

function setup(){
	createCanvas(windowWidth, windowHeight);
	for(let i=0; i<200; i++){
		drop[i] = new Drop();
		
	}
	
};

function draw(){
	background(0);
	for(let i=0; i<200; i++){
		drop[i].show();
		drop[i].update();;
	}
	
	
}

function Drop(){
	this.x= random(0, width);
	this.y= random(0, -height);

	this.show  = function(){
		stroke(231,220,255);
		 line(this.x,this.y, this.x, this.y+10)

	}
	 
	this.update= function(){
		this.speed = random(15, 50);
		this.gravity = 1.50;
		this.y = this.y + this.speed * this.gravity;
		
		if (this.y > height){
			this.y = random(0, -height);
			this.gravity = 0;
		}
		
		
	}
	
}
