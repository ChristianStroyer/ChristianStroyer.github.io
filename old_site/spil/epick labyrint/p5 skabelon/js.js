console.log("hack: grid = 0")



let cols, rows;
let w 		  = 60;
let grid 	  = [];
let current;
let stack 	= [];

let go = false;

let score = 0;
let highscore = 0;

var player;

function setup() {
  createCanvas(600, 600).parent('content');
  cols = floor(width / w);
  rows = floor(height / w);

  player = new Player();

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      var tile = new Tile(i, j);
      grid.push(tile);
    }
  }

  current = grid[0]; 
}

function draw() {
  background(200);



  for (let i = 0; i < grid.length; i++) {
    grid[i].show();
  }

  current.visited = true;
  current.highlight();
  // STEP 1
  let next = current.checkNeighbor();
  if (next) {
    next.visited = true;

    // STEP 2
    stack.push(current);

    // STEP 3
    removeWalls(current, next);

    // STEP 4
    current = next;
  } else if (stack.length > 0) {
    current = stack.pop();
  }

  player.show();
  player.move();
  if(player.pos.x <= 5 ||player.pos.x >= 600 || player.pos.y <= 5 || player.pos.y >= 600) {
    end();
  }

  loka();
  win() 
  fill(0, 255,0, 255);
  rect(542.5, 542.5, 55, 55);

  if(current.i == 0 && current.j == 0) {
    go = true;
  }
}

function index(i, j) {
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return -1;
  }
  return i + j * cols;
}

function removeWalls(a, b) {
  let x = a.i - b.i;
  if (x === 1) {
    a.walls[3] = false;
    b.walls[1] = false;
  } else if (x === -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }
  let y = a.j - b.j;
  if (y === 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  } else if (y === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
}


function loka () {
  

  var iPos = floor(player.pos.x / 60);

  var jPos = floor(player.pos.y / 60);

  //top right bottom left
  for (var i = 0; i < grid.length; i++) {
    if(grid[i].i == iPos && grid[i].j == jPos) {
      if(grid[i].walls[0] === true) {
        var player_pos = player.pos.y-(player.s/2);
        var limit = grid[i].j * 60
        if(player_pos <= limit) {
          end();
        }
        
      } 
      if(grid[i].walls[3] === true) {
        var player_pos = player.pos.x-(player.s/2);
        var limit = grid[i].i * 60
        if(player_pos <= limit) {
          end();
        }
      }  
    }
  }
}


function end () {

  player.speed[0] = 0;
  player.speed[1] = 0;

  player.pos.x = 30;
  player.pos.y = 30;

  player.speedPar = 3




  score = 0
 }

function win() {



  if(player.pos.x > 540 && player.pos.y > 540) {

   player.speed[0] = 0;
   player.speed[1] = 0;

   player.pos.x = 30;
   player.pos.y = 30;

   grid = [];

   for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      var tile = new Tile(i, j);
      grid.push(tile);
    }
  }
  score++;
  player.speedPar += 0,33;

  topScore();
}


document.getElementById('score').innerHTML = "Score: "+ score;
}



topScore = () => {
	if(score > highscore) {
		highscore = score;
	}
}



