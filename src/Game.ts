class Game
{
	private canvas:HTMLCanvasElement;
	private ctx:CanvasRenderingContext2D | null;
	private clock:Clock = new Clock();
	
	constructor(canvas:HTMLCanvasElement)
	{
		this.canvas = canvas;
		this.ctx = canvas.getContext("2d");
		this.render();
	}

	private render = ():void =>
	{
		let delta:number = this.clock.getElapsedTime();

		
		this.clock.restart();
		window.requestAnimationFrame(this.render);
	}
}