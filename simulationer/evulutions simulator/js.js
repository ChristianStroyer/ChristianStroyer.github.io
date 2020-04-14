var global_evulutions_simulator = {
	"antal_start_figure": 25,
	"alle_figure": [],

	"antal_start_mad": 50,
	"all_mad": []
}




function setup () {
	createCanvas(1000,500).parent('content')




	start()	
	ny_dag()
}


function start (){
	global_evulutions_simulator.alle_figure = []


	for (var i = 0; i < global_evulutions_simulator.antal_start_figure; i++) {
		global_evulutions_simulator.alle_figure.push(new Figur(random(0,250),random(0,250)))
	}
}

function ny_dag(){
	global_evulutions_simulator.all_mad = []


	for (var i = 0; i < global_evulutions_simulator.antal_start_mad; i++) {
		global_evulutions_simulator.all_mad.push(new Mad())
	}
}





function draw () {

	background(120)
	
	// venstre

	stroke(0);
	fill(120,120,120)
	rect(0,0,500,500);



	for (var i = 0; i < global_evulutions_simulator.all_mad.length; i++) {
		mad = global_evulutions_simulator.all_mad[i]
		mad.show()		
	}



	for (var i = 0; i < global_evulutions_simulator.alle_figure.length; i++) {
		figur = global_evulutions_simulator.alle_figure[i]
		figur.spis()
		figur.move()
		figur.ny_retning()
		


		figur.eadge()

		figur.show_in_world()
	}


global_evulutions_simulator.alle_figure[0].tegn_vektore()


	// højre

	stroke(0);
	fill(100,100,100)
	rect(500,0,500,500);

	

		for (var i = 0; i < global_evulutions_simulator.alle_figure.length; i++) {
		figur = global_evulutions_simulator.alle_figure[i]

		figur.show_on_graph()
	}

}




	







class Figur {
	constructor(agrasivitet,hastighed){
		this.agrasivitet = agrasivitet
		this.hastighed = hastighed

		this.pos = createVector(random(10,490),random(10,490))
		
		this.retning = createVector(random(-1,1),random(-1,1))



		this.s = 25
		this.r = this.s/2


		this.spisse_point = 0



	}
	//venstre
	show_in_world(){

		stroke(0);
		fill(this.agrasivitet,this.hastighed,0); // red green blue
		ellipse(this.pos.x, this.pos.y, this.s, this.s)
	}
	spis(){

		for (var i = 0; i < global_evulutions_simulator.all_mad.length; i++) {
			let mad = global_evulutions_simulator.all_mad[i]
			if(dist(this.pos.x,this.pos.y,mad.pos.x,mad.pos.y) < this.r + mad.r){
				this.spisse_point++
				global_evulutions_simulator.all_mad.splice(i,1)
			}
		}


		for (var i = 0; i < global_evulutions_simulator.alle_figure.length; i++) {
			let anden_figur = global_evulutions_simulator.alle_figure[i]
			if(anden_figur != this){
				if(dist(this.pos.x,this.pos.y,anden_figur.pos.x,anden_figur.pos.y) < this.r + anden_figur.r){
					if (this.agrasivitet > anden_figur.agrasivitet){
						this.spisse_point += 10
						global_evulutions_simulator.alle_figure.splice(i,1)
					}
				}
			}
		}
	}
	eadge(){
		if(this.pos.x > 500){
			this.pos.x = 500
		}
		if(this.pos.x < 0){
			this.pos.x = 0
		}
		if(this.pos.y > 500){
			this.pos.y = 500
		}
		if(this.pos.y < 0){
			this.pos.y = 0
		}
	}
	move(){
		this.pos.add(this.retning)
	}
	ny_retning(){

		let samenlagt_vektor_figure = createVector()

		for (var i = 0; i < global_evulutions_simulator.alle_figure.length; i++) {
			let anden_figur = global_evulutions_simulator.alle_figure[i]
			
			if(anden_figur != this){

				let afstand = dist(this.pos.x,this.pos.y,anden_figur.pos.x,anden_figur.pos.y)


				let tiltrekningskraft = 0.0001

				let retning_skal_invertes = tiltrekningskraft * this.agrasivitet * (anden_figur.agrasivitet / 10/*-this.agrasivitet*/) / (afstand * afstand)

				let afstand_retning = createVector( anden_figur.pos.x - this.pos.x, anden_figur.pos.y - anden_figur.pos.x  )

				let vektor_fra_figure = afstand_retning.normalize().mult( retning_skal_invertes )

				samenlagt_vektor_figure = samenlagt_vektor_figure.add(vektor_fra_figure)


				
			}
		}


		this.retning = samenlagt_vektor_figure.normalize().mult(this.hastighed/100)
	}
	tegn_vektore(){
		line(this.pos.x,this.pos.y,(this.pos.x + this.retning.x) * 1.2,(this.pos.y + this.retning.y) * 1.2)
	}





	//højre
	show_on_graph(){
		stroke(0);
		fill(this.agrasivitet,this.hastighed,0); // red green blue
		ellipse(this.agrasivitet * 1.5 + 550, this.hastighed * 1.5 + 50, 10, 10)
	}
}




class Mad {
	constructor(){

		this.pos = createVector(random(10,490),random(10,490))

		this.s = 10
		this.r = this.s/2


	}
	//venstre
	show(){
		stroke(0);
		fill(250,250,0); // red green blue
		//ellipse(this.pos.x, this.pos.y, this.s, this.s)
		rect(this.pos.x - this.r,this.pos.y - this.r,this.s,this.s);
	}

}


