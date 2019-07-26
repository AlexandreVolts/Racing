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
		return (~~(z / Segment.DEPTH) % this.segments.length);
	}
	
	public draw(ctx:CanvasRenderingContext2D)
	{
		for (let i:number = this.segments.length - 1; i >= 0; i--) {
			this.segments[i].project();
			this.segments[i].draw(ctx);
		}
	}
}