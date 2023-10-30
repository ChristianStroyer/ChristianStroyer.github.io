console.log ("Working")
var bold;

function setup () {
	createCanvas(1000,1000).parent('content')
	bold = new Bold();

}

function draw () {
	background(250)
	
	bold.show()
	bold.movement()
	bold.eage()


}







class Bold {
	constructor(){
		this.pos 	= createVector(250,250);
		this.s 		= 20;
		this.r 		= this.s/2;
		this.speed 	= 25;
		this.color  = [0,175,275]
	}

	show() {
		stroke(0);
		fill(this.color[0],this.color[1],this.color[2]); // red green blue
		ellipse(this.pos.x, this.pos.y, this.s, this.s)
	}

	movement() {
		if (keyIsDown(68)) {
			this.pos.x += this.speed;
		}
		if (keyIsDown(65)) {
			this.pos.x -= this.speed;
		}
		if (keyIsDown(87)) {
			this.pos.y -= this.speed;
		}
		if (keyIsDown(83)) {
			this.pos.y += this.speed;
		} 
	}

	eage() {
		this.pos.x = constrain(this.pos.x, 0+this.r+1 , 1000-this.r-1 )
		this.pos.y = constrain(this.pos.y, 0+this.r+1 , 1000-this.r-1 )
	}
}

function keyPressed() {
	if(keyCode === 32 && bold.color[2] === 275){
		bold.color = [275,0,0];
	}else if(keyCode === 32 && bold.color[0] === 275){
		bold.color = [0,175,275];
		}
	}