class Player
{
	private x:number;
	private z:number;
	private speed:number = 0;
	private skin:Spritesheet;
	
	constructor(skin:Spritesheet)
	{
		this.skin = skin;
	}

	public updateSpeed(ratio:number)
	{
		this.speed += ratio;
	}
	public moveX(inc:number):void
	{
		this.skin.setState(inc != 0 ? 1 : 0);
		this.skin.reverse(inc > 0);
		this.x += inc;
	}
	public draw(ctx:CanvasRenderingContext2D)
	{
		let bouncing:number = -1 + Math.random() * 2;
		
		this.skin.draw(ctx, new Vector2(200, 200 + bouncing), new Vector2(100, 100));
	}
	public getSpeed():number
	{
		return (this.speed);
	}
}