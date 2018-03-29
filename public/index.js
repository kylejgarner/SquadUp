var socket;

function setup(){
	socket = io.connect('http://localhost:3000')
	socket.on('mouse', newDrawing);
}

function newDrawing(data){
	console.log("another client displayed this")
}

function mouseEvent(){
	console.log("this was clicked")
	var data = {
		x:'thisworked',
		y:'sonicely'
	}
	socket.emit('mouse', data);
}