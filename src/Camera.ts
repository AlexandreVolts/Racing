/// <reference path="Utils.ts" />

class Camera
{
	public static readonly HEIGHT:number = 1000;
	public static readonly FOV:number = 50;
	public static readonly FOCAL_LENGTH:number = 1 / Math.tan(Utils.toRadians(Camera.FOV) / 2);
	private position:Vector3 = new Vector3(0, Camera.HEIGHT, 0);
	private zSpeed:number = 0;

	constructor()
	{
	}

	public accelerate(delta:number):void
	{
		this.zSpeed += Utils.ACCELERATION * delta;
		if (this.zSpeed > Utils.MAX_SPEED)
			this.zSpeed = Utils.MAX_SPEED;
	}
	public break(delta:number):void
	{
		this.zSpeed += Utils.BREAKING * delta;
		if (this.zSpeed < 0)
			this.zSpeed = 0;
	}
	public moveForward(delta:number):void
	{
		this.zSpeed *= Utils.FRICTION;
		this.position.z += this.zSpeed * delta;
	}
	public projectPoint(point:Vector3, target:Vector2 = new Vector2()):Vector2
	{
		let perspective:number = Camera.FOCAL_LENGTH / (point.z - this.position.z);
		
		target.x = point.x + this.position.x;
		target.y = point.y + this.position.y;
		if (perspective < 0)
			perspective = 1;
		return (target.scale(perspective, true));
	}
	public projectShape(points:Array<Vector3>, target:Array<Vector2>):void
	{
		if (points.length < target.length)
			return;
		for (let i:number = points.length - 1; i >= 0; i--) {
			this.projectPoint(points[i], target[i]);
		}
	}
	public getPosition():Vector3
	{
		return (this.position);
	}
}