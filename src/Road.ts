class Road
{
	private static readonly WIDTH:number = 2000;
	private static readonly LENGTH:number = 500;
	private static readonly RUMBLE_LENGTH:number = 3;
	private static readonly VISIBILITY:number = 5 * Road.RUMBLE_LENGTH;
	private segments:Array<Segment> = new Array<Segment>();

	constructor()
	{
		let color:string;

		for (let i:number = 0; i < Road.LENGTH; i++) {
			color = (~~(i / Road.RUMBLE_LENGTH) % 2 == 0) ? "gray" : "darkgray";
			this.segments.push(new Segment(i, color));
		}
	}

	private getSegmentIndex(z:number):number
	{
		return (~~(z / Segment.SIZE) % this.segments.length);
	}
	
	public draw(ctx:CanvasRenderingContext2D, camera:Camera)
	{
		let cameraPosition:Vector3 = camera.getPosition();
		let start:number = this.getSegmentIndex(camera.getPosition().z);

		cameraPosition.z *= Road.WIDTH;
		for (let i:number = start; i < start + Road.VISIBILITY; i++) {
			this.segments[i].draw(ctx, cameraPosition);
		}
	}
}

class Segment
{
	public static readonly SIZE:number = 200;
	private start:Vector3 = new Vector3();
	private end:Vector3 = new Vector3();
	public readonly COLOR:string;

	constructor(index:number, color:string)
	{
		this.start.z = index * Segment.SIZE;
		this.end.z = this.start.z + Segment.SIZE;
		this.COLOR = color;
	}

	public draw(ctx:CanvasRenderingContext2D, cameraPosition:Vector3)
	{
		let screenSize:Vector2 = new Vector2(window.innerWidth, window.innerHeight);
		let p1:Vector2 = Utils.project(this.start, cameraPosition, screenSize);
		let p2:Vector2 = Utils.project(this.end, cameraPosition, screenSize);
	}
}