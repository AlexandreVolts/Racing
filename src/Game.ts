class Game
{
	private camera:Camera = new Camera();
	private canvas:HTMLCanvasElement;
	private clock:Clock = new Clock();
	private ctx:CanvasRenderingContext2D;
	private keyboard:Keyboard = new Keyboard();
	private player:Player;
	private road:Road = new Road();
	private spriteLoader:SpriteLoader;
	
	constructor(canvas:HTMLCanvasElement)
	{
		this.canvas = canvas;
		this.ctx = canvas.getContext("2d");
		this.ctx.imageSmoothingEnabled = false;
		this.camera.setKeyboard(this.keyboard);
		this.spriteLoader = new SpriteLoader(["assets/daisy.png"], this.initialise);
	}

	private initialise = ():void =>
	{
		this.player = new Player(this.spriteLoader.get("assets/daisy.png"));
		this.render();
	}
	private update(delta:number):void
	{
		let dir:number = 0;
		
		dir += this.keyboard.isKeyDown(Key.LEFT) ? -1 : 0;
		dir += this.keyboard.isKeyDown(Key.RIGHT) ? 1 : 0;
		this.camera.moveHorizontally(delta, dir);
		this.camera.update(delta);
		this.road.project(this.camera);
		this.player.turn(dir);
		this.player.move(this.camera);
		this.player.project(this.camera);
	}
	private draw():void
	{
		this.ctx.fillStyle = "rgb(0, 128, 0)";
		this.ctx.fillRect(-this.canvas.width / 2, 0, this.canvas.width, this.canvas.height);
		this.road.draw(this.ctx);
		this.player.draw(this.ctx);
	}
	private render = ():void =>
	{
		let delta:number = this.clock.getElapsedTime();

		this.update(delta);
		this.draw();
		this.clock.restart();
		window.requestAnimationFrame(this.render);
	}
}