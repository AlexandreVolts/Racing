class Camera
{
	public static readonly HEIGHT:number = 1000;
	public static readonly FOV:number = 100;
	public static readonly DEPTH:number = 1 / Math.tan(Camera.FOV / 2);
	private x:number = 0;
	private z:number = 0;
	private speed:number = 0;

	constructor()
	{

	}

	public updateSpeed(ratio:number)
	{
		this.speed += ratio;
		if (this.speed > Utils.MAX_SPEED)
			this.speed = Utils.MAX_SPEED;
	}
	public moveForward():void
	{
		this.z += this.speed;
	}
	public moveHorizontally(inc:number):void
	{
		this.x += inc;
	}
	public getSpeed():number
	{
		return (this.speed);
	}
	public getPosition():Vector3
	{
		return (new Vector3(this.x, Camera.HEIGHT, this.z));
	}
}