class Segment
{
	private static readonly LIGHT:string = "rgb(150, 150, 150)";
	private static readonly DARK:string = "rgb(100, 100, 100)";
	private static readonly WIDTH:number = 2000 * 2;
	public static readonly DEPTH:number = 20;
	private hasLanes:boolean = false;
	private shape:Quadrilateral;

	constructor(index:number)
	{
		const POSITION:Vector3 = new Vector3(-Segment.WIDTH / 2, 0, index * Segment.DEPTH);
		const SIZE:Vector3 = new Vector3(Segment.WIDTH, 0, Segment.DEPTH);
		const COLOR:string = index % 2 == 0 ? Segment.DARK : Segment.LIGHT;
		
		this.hasLanes = index % 2 == 0;
		this.shape = new Quadrilateral(POSITION, SIZE, COLOR);
	}
	
	public draw(ctx:CanvasRenderingContext2D)
	{
		this.shape.draw(ctx);
	}
	public project(camera:Camera):void
	{
		this.shape.project(camera);
	}
}