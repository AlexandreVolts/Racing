function main():void
{
	new Game(createCanvas());
}

function createCanvas():HTMLCanvasElement
{
	let canvas:HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	window.addEventListener("resize", () =>
	{
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	});
	return (canvas);
}

document.addEventListener("DOMContentLoaded", main);