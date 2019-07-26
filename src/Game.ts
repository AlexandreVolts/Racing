class Game
{
	private canvas:HTMLCanvasElement;
	private clock:Clock = new Clock();
	private ctx:CanvasRenderingContext2D;
	private keyboard:Keyboard = new Keyboard();
	private player:Spritesheet;
	private road:Road = new Road();
	private spriteLoader:SpriteLoader;
	
	constructor(canvas:HTMLCanvasElement)
	{
		this.canvas = canvas;
		this.ctx = canvas.getContext("2d");
		this.spriteLoader = new SpriteLoader(["assets/daisy.png"], this.initialise);
	}

	private initialise = ():void =>
	{
		this.player = this.spriteLoader.get("assets/daisy.png");
		this.render();
	}
	private update(delta:number):void
	{

	}
	private render = ():void =>
	{
		let delta:number = this.clock.getElapsedTime();

		this.ctx.fillStyle = "rgb(0, 128, 0)";
		this.ctx.fillRect(-this.canvas.width / 2, 0, this.canvas.width, this.canvas.height);
		this.update(delta);
		this.road.draw(this.ctx);
		this.clock.restart();
		window.requestAnimationFrame(this.render);
	}
}