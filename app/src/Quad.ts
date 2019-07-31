class Quad implements Projectable
{
	protected points:Array<Vector3> = new Array<Vector3>(4);
	private readonly COLOR:string;
	private projection:Array<Vector2> = new Array<Vector2>(4);
	
	constructor(position:Vector3, size:Vector3, color:string)
	{
		this.COLOR = color;
		this.points[0] = position;
		this.points[1] = new Vector3(position.x + size.x, position.y, position.z);
		this.points[2] = new Vector3(position.x + size.x, position.y, position.z + size.z);
		this.points[3] = new Vector3(position.x, position.y, position.z + size.z);
		for (let i:number = 0; i < 4; i++) {
			this.projection[i] = new Vector2();
		}
	}

	public draw(ctx:CanvasRenderingContext2D):void
	{
		Render.polygon(ctx, this.projection, this.COLOR);
	}
	public move(dest:Vector3):void
	{
		for (let i:number = 0; i < 4; i++) {
			this.points[i].add(dest, true);
		}
	}
	public project(camera:Camera):void
	{
		camera.projectShape(this.points, this.projection);
	}
	public getPosition():Vector3
	{
		return (this.points[0]);
	}
}