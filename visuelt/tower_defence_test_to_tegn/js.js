console.log ("tower defence Working")


var pos = 0


var vej = []



var monster

var monster_findes = false

function setup () {
	createCanvas(500,500)
 

	
	
}



function draw () {

	background(120)


	if (vej.length > 1 && monster_findes == false) {
		monster = new Monster
		monster_findes = true
	}
	






	stroke(10);
	for (var i = 0; i < vej.length - 1; i++) {
		line(vej[i].x,vej[i].y,vej[i+1].x,vej[i+1].y)
	}

	
	if (monster_findes == true){	
		monster.goal()
		monster.move()
		monster.show()
		}






	//	if ()

}



function mouseClicked() {
  //ellipse(mouseX, mouseY, 5, 5);

  vej.push(createVector(mouseX, mouseY))

  // prevent default
  return false;
}





function go_to_point (x_pos,y_pos,x_target,y_target,speed) {
	var distance = dist(x_pos,y_pos,x_target,y_target)
	if(distance < speed ) {
		return (createVector(x_target,y_target))
	}

	var steps = distance/speed

	var x_distance = x_target - x_pos
	var y_distance = y_target - y_pos

	var x_step = x_distance / steps
	var y_step = y_distance / steps

	return ( createVector(x_pos+x_step,y_pos+y_step) )
}




class Monster {
	constructor(){
		this.pos = createVector(vej[0].x,vej[0].y)
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
			this.nr = 0
		}
	}
	




		
}




class Vave {
	constructor(list_monstre){

	}
}
