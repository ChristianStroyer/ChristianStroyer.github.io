console.log("Working")

var player;


var score = 0


var enemy_list = []

for(var i = 0; i < 5; i++) {
enemy_list.push("enemy")
}
	



var shots = [];

var enemy_Shot = [];



function setup () {
	createCanvas(500,500)
	player = new Player(250,400)

	for(var i = 0; i < enemy_list.length; i++) {
		enemy_list[i] = new Enemy(i)
	}



	

}




var skud_cooldown = 0




var nye_enemy = 3



function draw () {
	background(120)










	if (skud_cooldown > 0){
		skud_cooldown --
	}

	

	if (enemy_list.length<3){
		
		for(var i = 0; i < nye_enemy; i++) {
			enemy_list.push(new Enemy(enemy_list.length))
		}
		

		nye_enemy += 1

	}


	
		
		player.move();
		
		player.edge()
		player.shoot()

		player.show();

	for(var i = 0; i < enemy_list.length; i++) {
		var enemy = enemy_list[i];
		enemy.show();
		enemy.shot_cooldown();

	}




	for (var i = 0; i < shots.length; i++) {
		if(shots) {
			var shot = shots[i];
			shot.show();
			shot.move();
			shot.colision();
			shot.edge();
		}

	}

		for (var i = 0; i < enemy_Shot.length; i++) {
		if(enemy_Shot) {
			var shot_enemy = enemy_Shot[i];
			shot_enemy.Enemy_Shot_show();
			shot_enemy.Enemy_Shot_move();
			shot_enemy.Enemy_Shot_colision();
			shot_enemy.Enemy_Shot_edge();
		}

	}




		textSize(32);

	fill(0, 102, 153);
	text('made by Sebastian', 10, 30);
	fill(0, 102, 153, 51);
	text('made by Sebastian', 10, 35);


	fill(0, 102, 153);
	text('Score: ' + score, 10, 70);
	fill(0, 102, 153, 51);
	text('Score: ' + score, 10, 75);

}



class Player {
	constructor(x, y) {
		this.pos = createVector(x, y);
		this.s = 20;
		this.r = this.s/2 + 1;
		this.speed = 5;
	}

	show() {
		noStroke();
		fill(0,255,0)
		ellipse(this.pos.x, this.pos.y, this.s, this.s)
	}

	move () {
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
	edge() {
		this.pos.x = constrain(this.pos.x, 0+this.r+1 , 500-this.r-1 )
		this.pos.y = constrain(this.pos.y, 300+this.r+1 , 500-this.r-1 )
	}


	shoot() {



		if (keyIsDown(32)) {
			

			if (skud_cooldown == 0){
				shots.push(new Shot(this.pos.x,this.pos.y));
				skud_cooldown = 25
			}
		}	
	}

	player_pos(){
		return(this.pos)
	}



}





class Enemy {
	constructor(i) {
		this.pos = createVector(random(20, 480), (random(20, 200)));
		this.s = (20)
		this.r = this.s/2 + 1;
		this.hp = 10
		this.i = i
		this.enemy_skud_cooldown = Math.floor(Math.random() * (50 - 0) ) + 0;

		this.color = [0,0,0]
		this.time_to_normal_coller = 0
	}

	show() {
		noStroke();
		fill(this.color[0],this.color[1],this.color[2])
		ellipse(this.pos.x, this.pos.y, this.s, this.s)
		this.time_to_normal_coller--
		if (this.time_to_normal_coller < 0){
			this.color = [0,0,0]
		}
	}

	shot(bullet_hp){

		this.hp = this.hp - bullet_hp

		if (this.hp < 0){
			this.dead()
		}

		this.color = [100,0,0]
		this.time_to_normal_coller = 5

		return (-this.hp)

	}

	enemy_pos(){
		var return_enemy_pos = [this.pos,this.r]

		return (return_enemy_pos)
	}


	dead(){
		
		var index = enemy_list.indexOf(this)
		enemy_list.splice( index, 1 );

		score++
		console.log(score)
	}


	shot_cooldown(){
		
		this.enemy_skud_cooldown--

		if (this.enemy_skud_cooldown <= 0){
				enemy_Shot.push(new Enemy_Shot(this.pos.x,this.pos.y));
				this.enemy_skud_cooldown = Math.floor(Math.random() * (50 - 40) ) + 40
			}
	}
}





class Shot {
	constructor(pos_x,pos_y) {
		this.pos = createVector(pos_x,pos_y)
		this.s = 10
		this.r = this.s/2
		this.hp = 3
	}

	show() {
		fill(0);
		ellipse(this.pos.x, this.pos.y, this.s, this.s);
	}

	move() {
			this.pos.y -= 10;
	}

	colision(){

		for(var i = 0; i < enemy_list.length; i++) {

			var enemy_pos = enemy_list[i].enemy_pos();


			if(dist(this.pos.x,this.pos.y,enemy_pos[0].x,enemy_pos[0].y)   <    this.r + enemy_pos[1]   ){
				this.hp = enemy_list[i].shot(this.hp)
				this.dead()
			}
		}


	}

	edge(){
		if(this.pos.y<0){
		var index = shots.indexOf(this)
		shots.splice( index, 1 );
		}

	}

	dead(){
		if(this.hp<0){
		var index = shots.indexOf(this)
		shots.splice( index, 1 );

		}
	}


}






class Enemy_Shot {
	constructor(pos_x,pos_y,target_x,target_y) {
		this.pos = createVector(pos_x,pos_y)
		this.s = 10
		this.r = this.s/2
		this.hp = 3
		this.target = createVector(target_x,target_y)
	}

	Enemy_Shot_show() {
		fill(0);
		ellipse(this.pos.x, this.pos.y, this.s, this.s);
	}

	Enemy_Shot_move() {
			this.pos.y += 5;
	}

	Enemy_Shot_colision(){

		/*
		for(var i = 0; i < enemy_list.length; i++) {

			var enemy_pos = enemy_list[i].enemy_pos();


			if(dist(this.pos.x,this.pos.y,enemy_pos[0].x,enemy_pos[0].y)   <    this.r + enemy_pos[1]   ){
				this.hp = enemy_list[i].shot(this.hp)
				this.Enemy_Shot_dead()
			}
		}
	*/

	}

	Enemy_Shot_edge(){
		if(this.pos.y>500){
		var index = enemy_Shot.indexOf(this)
		enemy_Shot.splice( index, 1 );
		}

	}

	Enemy_Shot_dead(){
		if(this.hp<0){
		var index = enemy_Shot.indexOf(this)
		enemy_Shot.splice( index, 1 );

		}
	}


}