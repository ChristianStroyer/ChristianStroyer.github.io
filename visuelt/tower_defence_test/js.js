console.log ("tower defence Working")


var pos = 0


var vej = []



var monster

function setup () {
	createCanvas(500,500)
 	





 		
	vej.push(createVector(120,210))

	vej.push(createVector(300,210))
	vej.push(createVector(360,240))
	vej.push(createVector(390,300))
	vej.push(createVector(360,360))
	vej.push(createVector(300,390))
	vej.push(createVector(240,360))
	vej.push(createVector(210,300))

	vej.push(createVector(210,120))
	vej.push(createVector(180,60))
	vej.push(createVector(120,30))
	vej.push(createVector(60,60))
	vej.push(createVector(30,120))
	vej.push(createVector(60,180))
	vej.push(createVector(120,210))
	
	vej.push(createVector(300,210))
	vej.push(createVector(360,180))
	vej.push(createVector(390,120))
	vej.push(createVector(360,60))
	vej.push(createVector(300,30))
	vej.push(createVector(240,60))
	vej.push(createVector(210,120))
	
	vej.push(createVector(210,300))
	vej.push(createVector(180,360))
	vej.push(createVector(120,390))
	vej.push(createVector(60,360))
	vej.push(createVector(30,300))
	vej.push(createVector(60,240))	
	vej.push(createVector(120,210))



	monster = new Monster
	
}



function draw () {

	background(120)



	stroke(10);
	for (var i = 0; i < vej.length - 1; i++) {
		line(vej[i].x,vej[i].y,vej[i+1].x,vej[i+1].y)
	}

		monster.goal()
		monster.move()
		monster.show()
		

}








function go_to_point (x_pos,y_pos,x_target,y_target,speed) {
	var distance = dist(x_pos,y_pos,x_target,y_target)

	var steps = distance/speed

	var x_distance = x_target - x_pos
	var y_distance = y_target - y_pos

	var x_step = x_distance / steps
	var y_step = y_distance / steps

	return (createVector(x_pos+x_step,y_pos+y_step))
}




class Monster {
	constructor(){
		this.pos = createVector(120,210)
		this.nr = 1	
		this.speed = 5
	}

	show(){
		noStroke();
		fill(0,255,0)
		ellipse(this.pos.x, this.pos.y, 15, 15)
	}

	move(){
		
		

		this.pos = go_to_point(this.pos.x,this.pos.y,vej[this.nr].x,vej[this.nr].y,this.speed)

			if (dist(this.pos.x,this.pos.y,vej[this.nr].x,vej[this.nr].y) < this.speed+1){
				this.pos = createVector(vej[this.nr].x,vej[this.nr].y)

				this.nr++
	

			}
	}

	goal(){
		if (this.nr > vej.length - 1){
			this.nr = 1
		}
	}
	




		
}




class Vave {
	constructor(list_monstre){

	}
}
