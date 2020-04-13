var bold;
var obstacle;
var d;

var bil_venstre
var bil
var bil_hoejre

var visbil

function preload(){

 bil_venstre	= loadImage("Low_poly_2D_Car_Sprite_Pack_update1.3/carYellow/carYellow_0005.png")
 bil 			= loadImage("Low_poly_2D_Car_Sprite_Pack_update1.3/carYellow/carYellow_0006.png")
 bil_hoejre		= loadImage("Low_poly_2D_Car_Sprite_Pack_update1.3/carYellow/carYellow_0007.png")


 visbil = bil
}


function setup () {
	createCanvas(500,600).parent('content')
	bold = new Bold(250,500)
	obstacle = new Obstacle();
}

function draw () {
	background(240)

		bold.show();
		bold.move();
		bold.eage()

		obstacle.show();
		obstacle.move();
		obstacle.eage()

		var d = dist(bold.pos.x, bold.pos.y, obstacle.pos.x, obstacle.pos.y);

		if(d < bold.r + obstacle.r){
			console.log (true)
		}
}


class Bold {
	constructor(x, y) {
		this.pos = createVector(x, y);
		this.s = 70;
		this.r = this.s/2 + 1;
		this.speed = 5;
	}

	show() {
		noStroke();
		fill(0,255,0)
		image(visbil, this.pos.x - 155, this.pos.y -125)
		//ellipse(this.pos.x, this.pos.y, this.s, this.s)
	}

	move () {
		if (keyIsDown(68)) {
			this.pos.x += this.speed;
			visbil  = bil_venstre
		} else if (keyIsDown(65)) {
			this.pos.x -= this.speed;
			visbil  = bil_hoejre
		} else {
 			visbil  = bil
		}
	}
	eage() {
		this.pos.x = constrain(this.pos.x, 0+this.r+1 , 500-this.r-1 )
		this.pos.y = constrain(this.pos.y, 0+this.r+1 , 500-this.r-1 )
	}
}


class Obstacle {
	constructor() {
		this.pos = createVector(random(20, 480), -50);
		this.s = 15;
		this.r = this.s/2 + 1;
		this.speed = 3
	}

	show() {
		noStroke();
		fill(0)
		ellipse(this.pos.x, this.pos.y, this.s, this.s/2)
	}

	move () {
		this.pos.y += this.speed;
		this.s += this.speed / 10;
		this.r = this.s/2 + 1;
	}
	eage() {
		this.pos.x = constrain(this.pos.x, 0+this.r+1 , 500-this.r-1 )
		if (this.pos.y > 500 + 200) {
			this.pos = createVector(random(20, 480), -100);
			this.s = 15;
			this.speed += 0.2;
		}
	}
}
