class Player {
	constructor() {
		this.pos = createVector(30,30);
		this.s = 10;
		this.touch = false;
		this.speed = [0,0];
		this.speedPar = 3;
	}

	show() {
		fill(0);
		ellipse(this.pos.x, this.pos.y, this.s, this.s);
	}

	move() {
		this.pos.x += this.speed[0];
		this.pos.y += this.speed[1];

		if(keyIsDown(87)) {
			this.speed[0] = 0;
			this.speed[1] = -this.speedPar;
		}

		if(keyIsDown(68)) {
			this.speed[1] = 0; 
			this.speed[0] = this.speedPar;
		}

		if(keyIsDown(83)) {
			this.speed[0] = 0;
			this.speed[1] = this.speedPar;
		}

		if(keyIsDown(65)) {
			this.speed[1] = 0;
			this.speed[0] = -this.speedPar;
		}
	}
}