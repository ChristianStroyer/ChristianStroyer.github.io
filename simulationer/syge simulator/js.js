console.log ("sim working")

var antal_personer = 50
var personer = []

var sice = 15


var tid_til_rask = 8
 

var input_antal_personer
var input_sice
var input_tid_til_rask


function setup () {

var td1 = createElement('td','antal personer');
	var td2 = createElement('td','størelse');
	var td3 = createElement('td','tid til imunitet');
	var tr1 = createElement('tr');
	tr1.child(td1)
	tr1.child(td2)
	tr1.child(td3)

	var td1 = createElement('td');
	
	input_antal_personer = createInput();
	input_antal_personer.size(100,20)
	input_antal_personer.value(50)
	var inp1 = input_antal_personer
	td1.child(inp1)
	

	var td2 = createElement('td');
	input_sice = createInput();
	input_sice.size(100,20)
	input_sice.value(15)
	var inp2 = input_sice
	td2.child(inp2)
	


	var td3 = createElement('td');
	input_tid_til_rask = createInput();
	input_tid_til_rask.size(100,20)
	input_tid_til_rask.value(8)
	var inp3 = input_tid_til_rask
	td3.child(inp3)



	var tr2 = createElement('tr');
	tr2.child(td1)
	tr2.child(td2)
	tr2.child(td3)

	var td1 = createElement('td');
	var td2 = createElement('td');
	button = createButton("run");
	button.size(100,20)
	button.mousePressed(start);
	var runButton = button
	td2.child(runButton)	
	
	var td3 = createElement('td');
	var tr3 = createElement('tr');
	tr3.child(td1)
	tr3.child(td2)
	tr3.child(td3)

	var table = createElement('table');
	table.child(tr1)
	table.child(tr2)
	table.child(tr3)




	createCanvas(500,500)



}


function start (){

antal_personer = input_antal_personer.value()
sice = input_sice.value()
tid_til_rask = input_tid_til_rask.value() * 30


	personer = []
	for(var i = 0; i < antal_personer; i++) {
		if (i == 0){

			personer.push(new Person(sice,random(10,490),random(10,490),random(-2,2),random(-2,2),"smitet",i))

			continue
		}
		personer.push(new Person(sice,random(10,490),random(10,490),random(-2,2),random(-2,2),"ikke_smitet",i))
	}
}


function draw () {

	background(120)

	for(var i = 0; i < personer.length; i++) {
		personer[i].tilstand()
		personer[i].show()
		personer[i].move()
		personer[i].eadge()
		personer[i].tjek_andre()
		personer[i].teller()
		personer[i].imunitet_om(tid_til_rask)

	}
	
}



class Person{
	constructor(s,x_pos,y_pos,x_retning,y_retning,sygetilstand,nr){
		this.s = s
		this.r = s / 2
		this.x_pos = x_pos
		this.y_pos = y_pos
		this.x_retning = x_retning
		this.y_retning = y_retning
		this.sygetilstand = sygetilstand	/* "ikke_smitet" "smitet"  (måske død)  "rask_igen" */
		this.color = [5,25,250]
		this.nr = nr
		this.tal_til_teller = -10
		


	}
	tilstand(){
		if (this.sygetilstand == "ikke_smitet"){
			this.color = [5,25,250]
		}
		if (this.sygetilstand == "smitet"){
			this.color = [20,150,20]
		}
		if (this.sygetilstand == "rask_igen"){
			this.color = [255,153,51]
		}
	}
	show(){
		stroke(0);
		fill(this.color[0],this.color[1],this.color[2]); // red green blue
		ellipse(this.x_pos, this.y_pos, this.s, this.s)
	}
	move(){
		this.x_pos += this.x_retning
		this.y_pos += this.y_retning
	}
	eadge(){
		if (this.x_pos < 0){
			this.x_pos = 0
			this.x_retning *= -1
			//this.y_retning += random(0.1,-0,1)
		}
		if (this.x_pos > 500){
			this.x_pos = 500
			this.x_retning *= -1
			//this.y_retning += random(0.1,-0,1)
		}


		if (this.y_pos < 0){
			this.y_pos = 0
			this.y_retning *= -1
			//this.x_retning += random(0.1,-0,1)
		}
		if (this.y_pos > 500){
			this.y_pos = 500
			this.y_retning *= -1
			//this.x_retning += random(0.1,-0,1)
		}
	}
	ny_retning(){
		this.x_retning =	random(-2,2)
		this.y_retning =	random(-2,2)
	}
	return_pos(){
		return(this.x_pos,this.y_pos)
	}
	colision(x,y,r,syge_tilstand){


		var x = x
		var y = y
		var r = r
		var syge_tilstand = syge_tilstand

		if(dist(x,y,this.x_pos,this.y_pos) < this.r + r){
			this.ny_retning()
			if (syge_tilstand == "smitet" && this.sygetilstand != "rask_igen"){
				this.sygetilstand = "smitet"
			}
		}
	}
	tjek_andre(){


		for(var i = 0; i < personer.length; i++) {
			if(i == this.nr){
				continue
			}
			personer[i].colision(this.x_pos,this.y_pos,this.r,this.sygetilstand)
		}
	}
	teller(){
		if (this.tal_til_teller > -5){
			this.tal_til_teller--
		}
	}
	imunitet_om(tid){
		if (this.sygetilstand == "smitet" && this.tal_til_teller < -8){
			this.tal_til_teller = tid
				
		}
		if (this.tal_til_teller > -10 && this.tal_til_teller < 0){
				this.sygetilstand = "rask_igen"
		
		}

	}
}




