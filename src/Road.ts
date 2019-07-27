class Road
{
	public static readonly WIDTH:number = 2000 * 2;
	public static readonly RUMBLE_LENGTH:number = 3;
	private static readonly LENGTH:number = 250;
	private static readonly VISIBILITY:number = 50 * Road.RUMBLE_LENGTH;
	private segments:Array<Segment> = new Array<Segment>();
	private current:number = 0;

	constructor()
	{
		for (let i:number = 0; i < Road.LENGTH; i++) {
			this.segments.push(new Segment(i));
		}
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
		for (let i:number = 0; i < Road.VISIBILITY; i++) {
			this.segments[(this.current + i) % this.segments.length].project(camera);
		}
	}
}