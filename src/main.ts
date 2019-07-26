function main():void
{
	new Game(createCanvas());
}

function createCanvas():HTMLCanvasElement
{
	let canvas:HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	canvas.getContext("2d").translate(canvas.width / 2, canvas.height / 2);
	window.addEventListener("resize", () =>
	{
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		canvas.getContext("2d").translate(canvas.width / 2, canvas.height / 2);
	});
	return (canvas);
}

document.addEventListener("DOMContentLoaded", main);