class Player
{
	private x:number;
	private z:number;
	private speed:number = 0;
	
	constructor()
	{

	}

	public updateSpeed(ratio:number)
	{
		this.speed += ratio;
	}
	public moveX(inc:number):void
	{
		this.x += inc;
	}
	public draw(ctx:CanvasRenderingContext2D)
	{
		
	}
	public getSpeed():number
	{
		return (this.speed);
	}
}