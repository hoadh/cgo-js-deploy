var myContext;

var startPosition = 5;
var incrementPixel = 30;
var spacePaxel = 5;

var squares = [];

function makeSquare(color) {
	startPosition += incrementPixel + spacePaxel;
  var myGamePiece = new component(30, 30, color, startPosition, 120);
  squares.push(myGamePiece);
}

var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function() {
    this.canvas.width = 480;
    this.canvas.height = 270;
    myContext = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function() {
    myContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function() {
    ctx = myContext;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

function updateGameArea() {
  myGameArea.clear();
  for (let i = 0; i < squares.length; i++) {
  	squares[i].update();
  }
}

