class Segment
{
	private static readonly WIDTH:number = 100;
	public static readonly DEPTH:number = 50;
	public readonly COLOR:string;
	private points:Array<Vector3> = new Array<Vector3>(4);
	private projection:Array<Vector2> = new Array<Vector2>(4);

	constructor(index:number, color:string)
	{
		this.COLOR = color;
		for (let i:number = 0; i < 4; i++) {
			this.projection[i] = new Vector2();
		}
		this.createPoints(index);
	}

	private createPoints(index:number):void
	{
		this.points[0] = new Vector3(-Segment.WIDTH, Camera.HEIGHT, index * Segment.DEPTH);
		this.points[1] = new Vector3(-Segment.WIDTH, Camera.HEIGHT, this.points[0].z + Segment.DEPTH);
		this.points[2] = new Vector3(Segment.WIDTH, Camera.HEIGHT, this.points[1].z);
		this.points[3] = new Vector3(Segment.WIDTH, Camera.HEIGHT, this.points[0].z);
		this.project();
	}
	
	public project():void
	{
		for (let i:number = this.points.length - 1; i >= 0; i--) {
			Utils.project(this.points[i], this.projection[i]);
		}
	}
	public draw(ctx:CanvasRenderingContext2D)
	{
		for (let i:number = 0; i < 4; i++)
			this.points[i].z--;
		if (this.points[0].z > -300)
			Render.polygon(ctx, this.projection, this.COLOR);
	}
}