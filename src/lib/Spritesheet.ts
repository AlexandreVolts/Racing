class Spritesheet
{
	private img:HTMLImageElement;
	private onLoad:Function;
	private size:Vector2 = new Vector2();
	private isReversed:boolean = false;
	
	constructor(path:string, onLoad:Function)
	{
		this.onLoad = onLoad;
		this.img = new Image();
		this.img.src = path;
		this.img.onload = this.load;
	}

	private load = () =>
	{
		this.size = new Vector2(this.img.width, this.img.height);
		this.onLoad();
	}

	public reverse = (dir:number) =>
	{
		this.isReversed = dir < 0;
	}
	public draw(ctx:CanvasRenderingContext2D, pos:Vector2)
	{
		ctx.drawImage(this.img, pos.x, pos.y);
	}
}