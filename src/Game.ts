class Game
{
	private canvas:HTMLCanvasElement;
	private ctx:CanvasRenderingContext2D | null;
	private clock:Clock = new Clock();
	private keyboard:Keyboard = new Keyboard();
	private player:Player = new Player();
	private spriteLoader:SpriteLoader;
	
	constructor(canvas:HTMLCanvasElement)
	{
		this.canvas = canvas;
		this.ctx = canvas.getContext("2d");
		this.spriteLoader = new SpriteLoader(["assets/bowser.png"], this.initialise);
	}

	private initialise = ():void =>
	{
		this.render();		
	}
	private update = (delta:number):void =>
	{
		let dx:number = delta * 2 * (this.player.getSpeed() / Utils.MAX_SPEED);
		let speedVariation:number = (-Utils.ACCELERATION);

		if (this.keyboard.isKeyDown(Key.LEFT))
			this.player.moveX(-dx);
		if (this.keyboard.isKeyDown(Key.RIGHT))
			this.player.moveX(dx);
		speedVariation = this.keyboard.isKeyDown(Key.UP) ? Utils.ACCELERATION : speedVariation;
		speedVariation = this.keyboard.isKeyDown(Key.DOWN) ? Utils.BREAKING : speedVariation;
		this.player.updateSpeed(speedVariation * delta);
	}
	private render = ():void =>
	{
		let delta:number = this.clock.getElapsedTime();

		this.update(delta);
		this.clock.restart();
		window.requestAnimationFrame(this.render);
	}
}