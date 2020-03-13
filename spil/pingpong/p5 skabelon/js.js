var collor_et = 200
var collor_to = 10
var collor_tre = 100

var crazy_collor = false

var knab_crazy_collor

var auto_play_et = false
var auto_play_to = false

var knab_auto_play_et
var knab_auto_play_to




function setup () {
	createCanvas(600,400)

	bold = new Bold
	spiller_et = new Spiller_et(bold)
	spiller_to = new Spiller_to(bold)






	knab_auto_play_et = createButton("auto_play");
	knab_auto_play_et.position(30,150)
	knab_auto_play_et.mousePressed(invert_auto_play_et)
	
	knab_auto_play_to = createButton("auto_play");
	knab_auto_play_to.position(510,150)
	knab_auto_play_to.mousePressed(invert_auto_play_to)

	knab_crazy_collor = createButton("crazy_collor");
	knab_crazy_collor.position(260,150)
	knab_crazy_collor.mousePressed(invert_crazy_collor)

}

// knabe functioner


function invert_auto_play_et () {
	auto_play_et = !auto_play_et
}

function invert_auto_play_to () {
	auto_play_to = !auto_play_to
}



function invert_crazy_collor () {
	crazy_collor = !crazy_collor
}





function draw () {

	collor_et = 200
	collor_to = 10
	collor_tre = 100

if (crazy_collor == true) {
	collor_et = color( Math.floor(Math.random() * (255 - 0)) + 1 , Math.floor(Math.random() * (255 - 0)) + 1 , Math.floor(Math.random() * (255 - 0)) + 1 )
	collor_to = color( Math.floor(Math.random() * (255 - 0)) + 1 , Math.floor(Math.random() * (255 - 0)) + 1 , Math.floor(Math.random() * (255 - 0)) + 1 )
	collor_tre = color( Math.floor(Math.random() * (255 - 0)) + 1 , Math.floor(Math.random() * (255 - 0)) + 1 , Math.floor(Math.random() * (255 - 0)) + 1 )
}

	background(collor_et)

	bold.show()
	bold.move()

	spiller_et.show()
	spiller_et.move()
	
	if (auto_play_et == true) {
		spiller_et.auto_play()
	}


	spiller_to.show()
	spiller_to.move()
	
	if (auto_play_to == true) {
		spiller_to.auto_play()
	}
}

class Bold {
	constructor() {
		this.pos = createVector(300, 200);
		this.retning = createVector(2, 1);
		this.s = 25;
		this.r = this.s/2 + 1;
		this.speed = 5;
	}
	show() {
		noStroke();
		fill(collor_to)
		ellipse(this.pos.x, this.pos.y, this.s, this.s)
	}
	move () {
		this.pos.x = this.pos.x + this.retning.x
		this.pos.y = this.pos.y + this.retning.y

		if (this.pos.x > 600) {
			this.pos.x = 600
			this.retning.x = this.retning.x - this.retning.x * 2
		}
		if (this.pos.x < 0) {
			this.pos.x = 0
			this.retning.x = this.retning.x - this.retning.x * 2
		}

		if (this.pos.y > 400) {
			this.pos.y = 400
			this.retning.y = this.retning.y - this.retning.y * 2
		}
		if (this.pos.y < 0) {
			this.pos.y = 0
			this.retning.y = this.retning.y - this.retning.y * 2
		}
	}
	spiller_intearagsion (top_venstre_x,top_venstre_y,bund_hojre_x,bund_hojre_y) {

		var midt_af_spiller = top_venstre_y + (bund_hojre_y - top_venstre_y) / 2

		if (this.pos.x > top_venstre_x && this.pos.y > top_venstre_y && this.pos.x < bund_hojre_x && this.pos.y < bund_hojre_y) {
			this.retning = createVector(this.retning.x - this.retning.x * 2,this.retning.y)

			this.retning = createVector(this.retning.x, -1 * (midt_af_spiller - this.pos.y) / 10)


		}
	}
}


class Spiller_et {
	constructor( bold ){
		this.bold = bold
		this.pos = createVector(0,0)
		this.x = 0
		this.y = 0
	}
	show() {
		fill(collor_tre)
		beginShape();
		vertex(25+this.x,150+this.y)
		vertex(50+this.x,150+this.y)
		vertex(50+this.x,250+this.y)
		vertex(25+this.x,250+this.y)
		endShape(CLOSE);
	}
	move() {
		if(keyIsDown(87)) {
			this.y-=3
		}
		if(keyIsDown(83)) {
			this.y+=3
		}
		if (this.y < -150) {
			this.y = -150
		} else if (this.y > 150) {
			this.y = 150
		}

		this.bold.spiller_intearagsion(25+this.x,150+this.y,50+this.x,250+this.y)

	}

		auto_play() {

		if(this.bold.pos.y > this.y + 200) {
			this.y+=3
		}
		if(this.bold.pos.y < this.y + 200) {
			this.y-=3
		}

	}


}

class Spiller_to {
	constructor(bold){
		this.bold = bold
		this.pos = createVector(0,0)
		this.x = 0
		this.y = 0
	}
	show() {
		fill(collor_tre)
		beginShape();
		vertex(550+this.x,150+this.y)
		vertex(575+this.x,150+this.y)
		vertex(575+this.x,250+this.y)
		vertex(550+this.x,250+this.y)
		endShape(CLOSE);
	}
	move() {
		if(keyIsDown(38)) {
			this.y-=3
		}
		if(keyIsDown(40)) {
			this.y+=3		
		}
		if (this.y < -150) {
			this.y = -150
		} else if (this.y > 150) {
			this.y = 150
		}

		this.bold.spiller_intearagsion(550+this.x,150+this.y,575+this.x,250+this.y)

	}

	auto_play() {

		if(this.bold.pos.y > this.y + 200) {
			this.y+=3
		}
		if(this.bold.pos.y < this.y + 200) {
			this.y-=3
		}

	}

}