var x = 250
var y = 0

var kordinats  = [30 + x, 20 + y, 85 + x, 20 + y, 85 + x, 74 + y , 50 + x , 50 + y, 30 + x, 75 + y]
var plus_minus = [true ,true ,true ,true ,true ,true ,true ,true ,true ,true]

function setup () {
	createCanvas(500,500)
}

function draw () {

//	background(Math.floor(Math.random() * (255 - 0)) + 1 , Math.floor(Math.random() * (255 - 0)) + 1 , Math.floor(Math.random() * (255 - 0)) + 1)
	background(200)

	for (var i = 0; i < kordinats.length; i++) {
		
		if(plus_minus[i] == true) {
			kordinats[i] = kordinats[i] + Math.floor(Math.random() * (10 - 1)) + 1;
		} else {
			kordinats[i] = kordinats[i] - Math.floor(Math.random() * (10 - 1)) + 1;
		}

		if (kordinats[i] > 500) {
			plus_minus[i] = false
		} else if (kordinats[i] < 0) {
			plus_minus[i] = true
		}
		
	}



//fill(Math.floor(Math.random() * (255 - 0)) + 1 , Math.floor(Math.random() * (255 - 0)) + 1 , Math.floor(Math.random() * (255 - 0)) + 1)
	beginShape();

	for (var i = 0; i < kordinats.length; i = i + 2) {
		vertex(kordinats[0 + i], kordinats[1 + i]);
	}

	endShape(CLOSE);

}








