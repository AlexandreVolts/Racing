function main():void
{
	new Game(createCanvas());
}

function resize(canvas:HTMLCanvasElement):void
{
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	canvas.getContext("2d").translate(canvas.width / 2, canvas.height / 2);
}
function createCanvas():HTMLCanvasElement
{
	let canvas:HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

	resize(canvas);
	window.addEventListener("resize", () =>
	{
		resize(canvas);
	});
	return (canvas);
}

document.addEventListener("DOMContentLoaded", main);