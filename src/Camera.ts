/// <reference path="Utils.ts" />

class Camera
{
	public static readonly HEIGHT:number = 1000;
	public static readonly FOV:number = 50;
	public static readonly FOCAL_LENGTH:number = 1 / Math.tan(Utils.toRadians(Camera.FOV) / 2);
	private keyboard:Keyboard;
	private position:Vector3 = new Vector3(0, Camera.HEIGHT, 1);
	private speed:Vector3 = new Vector3();

	constructor()
	{
	}

	private accelerate(delta:number):void
	{
		this.speed.z += Utils.ACCELERATION * delta;
		if (this.speed.z > Utils.MAX_SPEED)
			this.speed.z = Utils.MAX_SPEED;
	}
	private break(delta:number):void
	{
		this.speed.z += Utils.BREAKING * delta;
		if (this.speed.z < 0)
			this.speed.z = 0;
	}
	
	public moveHorizontally(delta:number, dir:number):void
	{
		this.position.x += this.speed.z * delta * dir;
	}
	public update(delta:number):void
	{
		if (!this.keyboard)
			return;
		if (this.keyboard.isKeyDown(Key.UP))
			this.accelerate(delta);
		if (this.keyboard.isKeyDown(Key.DOWN))
			this.break(delta);
		this.speed.scale(Utils.FRICTION, true);
		this.position.add(this.speed.scale(delta), true);
	}
	public projectPoint(point:Vector3, target:Vector2 = new Vector2()):Vector2
	{
		let perspective:number = this.getPerspectiveRatio(point.z);
		
		target.x = point.x - this.position.x;
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
	public getPerspectiveRatio(point:Vector3|number):number
	{
		if (typeof point == "number")
			return (Camera.FOCAL_LENGTH / (point - this.position.z));
		return (Camera.FOCAL_LENGTH / (point.z - this.position.z));
	}
	public getPosition():Vector3
	{
		return (this.position);
	}
	public getSpeed():Vector3
	{
		return (this.speed);
	}
	public setKeyboard(keyboard:Keyboard):void
	{
		this.keyboard = keyboard;
	}
}