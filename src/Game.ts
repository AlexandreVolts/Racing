class Game
{
	private camera:Camera = new Camera();
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
		let dx:number = delta * 2 * (this.camera.getSpeed() / Utils.MAX_SPEED);
		let speedVariation:number = (-Utils.ACCELERATION);

		this.player.setState(0);
		this.player.reverse(this.keyboard.isKeyDown(Key.LEFT));
		if (this.keyboard.isKeyDown(Key.LEFT)) {
			this.camera.moveHorizontally(-dx);
			this.player.setState(1);
		}
		if (this.keyboard.isKeyDown(Key.RIGHT)) {
			this.player.setState(1);
		}
		speedVariation = this.keyboard.isKeyDown(Key.UP) ? Utils.ACCELERATION : speedVariation;
		speedVariation = this.keyboard.isKeyDown(Key.DOWN) ? Utils.BREAKING : speedVariation;
		this.camera.updateSpeed(speedVariation * delta);
	}
	private renderPlayer():void
	{
		let bouncing:number = -1 + Math.random() * 2;
		
		this.player.draw(this.ctx, new Vector2(200, 200 + bouncing), new Vector2(100, 100));
	}
	private render = ():void =>
	{
		let delta:number = this.clock.getElapsedTime();

		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.update(delta);
		this.road.draw(this.ctx, this.camera);
		this.renderPlayer();
		this.clock.restart();
		window.requestAnimationFrame(this.render);
	}
}