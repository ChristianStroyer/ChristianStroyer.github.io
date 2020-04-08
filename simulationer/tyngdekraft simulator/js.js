var objekter = []
var antal_objekter = 100

var G = 0.005

// createVector()


function setup () {



	//var windowy = windowHeight - 25
	//var windowx = windowWidth - 25
	

	createCanvas(750, 750)


	//objekter.push(new objekt(createVector(random(750, 750),random(750, 750)),createVector(0,0),1000000,0))

	for(var i = 1; i < antal_objekter + 1; i++) {
		objekter.push(new objekt(createVector(random(0, windowx),random(0, windowy)),createVector(random(-2.5,2.5),random(-2.5,2.5)),random(1000, 5000),i))
	}
	

}
//var tid_til_ny = 60


var windowy = 750
var windowx = 750

function draw () {


	//var previous_windowy = windowy
	//var previous_windowx = windowx

	windowy = 750//windowHeight - 25
	windowx = 750//windowWidth - 25

	//if (previous_windowy != windowy || previous_windowx != windowx){
	//	resizeCanvas(windowx, windowy)
	//}







	background(120)

	/*if (tid_til_ny < 0) {
	objekter.push(new objekt(createVector(random(250, 1250),random(250, 1250)),createVector(random(-2.5,2.5),random(-2.5,2.5)),random(100, 1000),i))
	tid_til_ny = 60
	console.log("ny")
	} else {
		tid_til_ny -= 1
	}
	*/


	if (objekter.length < 100) {
		objekter.push(new objekt(createVector(random(0, windowx),random(0, windowx)),createVector(random(-1,1),random(-1,1)),random(1000, 2500),i))
	}




	for(var i = 0; i < objekter.length; i++) {
		let objekt = objekter[i]
		objekt.show()
		objekt.mowe()
		objekt.kolision()
		objekt.eadge()
	}



	


}



function tyngdekraft (x_et,y_et,mass_et,x_to,y_to,mass_to) {
	var distance = dist(x_et,y_et,x_to,y_to)


	if (distance < 5){
		return createVector(0,0)
	}


	var F = G * mass_et * mass_to / (distance * distance)

	var afstand_retning = createVector( x_to - x_et, y_to - y_et  )
	var force_vector = afstand_retning.normalize().mult( F )

	return force_vector;
}


class objekt{
	constructor(pos,retning,mass,nr){
		this.pos = pos
		this.retning = retning
		this.endre_retning = createVector(0,0)
 		this.mass = mass 
		this.nr = nr
		this.s = Math.pow(this.mass, 1/3) / windowx * 1000
		this.r = this.s / 2
	}
	show(){
		stroke(0);
		fill(200); 
		ellipse(this.pos.x, this.pos.y, this.s, this.s)
	}
	mowe(){
		this.ny_retning()
		this.retning.add(this.endre_retning)
		this.pos.add(this.retning)
	}
	ny_retning(){

		var resultat = createVector(0,0)

		for(var i = 0; i < objekter.length; i++) {
			if (i == this.nr) {
				continue
			}


			resultat.add(tyngdekraft(this.pos.x,this.pos.y,this.mass,objekter[i].pos.x,objekter[i].pos.y,objekter[i].mass))


		}

		this.endre_retning = resultat.mult(1/this.mass)
		//console.log(this.mass+"  \t:  ("+this.endre_retning.x+","+this.endre_retning.y+")")

	}

	kolision(){
		for(var i = 0; i < objekter.length; i++) {
			if (objekter[i] == this) {
				continue
			}


			 if (dist( this.pos.x , this.pos.y , objekter[i].pos.x , objekter[i].pos.y ) < this.r + objekter[i].r){
			 	if (this.mass > objekter[i].mass){
			 		var new_mass = this.mass + objekter[i].mass

			 		//var impuls = this.retning.normalize().mult(this.mass)
			 		//var other_impuls = objekter[i].retning.normalize().mult(objekter[i].mass)
			 		//var new_retning = impuls.add( other_impuls ).mult( 1/new_mass )

			 		objekter.splice(i,1)

					//this.retning = new_retning
			 		this.mass = new_mass
			 		this.s = Math.pow(this.mass, 1/3)
					this.r = this.s / 2
			 	}

			 }




		}
	}
	eadge(){
		if (this.pos.x < -this.r * 2 || this.pos.x > windowx + this.r * 2){
			var idx = objekter.indexOf(this)
			if(idx>=0)
				objekter.splice(idx,1)
		}
		if (this.pos.y < -this.r * 2 || this.pos.y > windowy + this.r * 2){
			var idx = objekter.indexOf(this)
			if(idx>=0)
				objekter.splice(idx,1)
		}
	}

}

