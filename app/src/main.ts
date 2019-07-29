function main():void
{
	let canvas:HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
	let game = new Game(canvas);

	window.addEventListener("resize", game.resize);
}

document.addEventListener("DOMContentLoaded", main);