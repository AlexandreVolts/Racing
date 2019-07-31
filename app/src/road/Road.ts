class Road implements Projectable
{
	public static readonly WIDTH:number = 2000 * 2;
	public static readonly RUMBLE_LENGTH:number = 3;
	private static readonly VISIBILITY:number = 50 * Road.RUMBLE_LENGTH;
	public static readonly LENGTH:number = Road.VISIBILITY;
	private previous:number = 0;
	private current:number = 0;
	private roadMode:RoadMode;
	private segments:Array<Segment> = new Array<Segment>();

	constructor()
	{
		for (let i:number = 0; i < Road.LENGTH; i++) {
			this.segments.push(new Segment(i));
		}
		this.roadMode = new RoadMode(this.segments[Road.LENGTH - 1]);
	}

	private getSegmentIndex(z:number):number
	{
		return (~~(z / Segment.DEPTH) % this.segments.length);
	}
	
	public draw(ctx:CanvasRenderingContext2D):void
	{
		for (let i:number = 0; i < Road.VISIBILITY; i++) {
			this.segments[(this.current + i) % this.segments.length].draw(ctx);
		}
	}
	public project(camera:Camera):void
	{
		this.current = this.getSegmentIndex(camera.getPosition().z);
		for (let i:number = this.previous; i < this.current; i++)
			this.roadMode.updateSegment(this.segments[i]);
		this.previous = this.current; 
		for (let i:number = 0; i < Road.VISIBILITY; i++) {
			this.segments[(this.current + i) % this.segments.length].project(camera);
		}
	}
	public getSegmentCurve(z:number):number
	{
		return (this.segments[this.getSegmentIndex(z)].getCurve());
	}
}