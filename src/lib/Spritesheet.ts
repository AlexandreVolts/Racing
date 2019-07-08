class Spritesheet
{
	private img:HTMLImageElement;
	private onLoad:Function;
	private size:Vector2 = new Vector2();
	private state:number = 0;
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

	public reverse = (isReversed:boolean) =>
	{
		this.isReversed = isReversed;
	}
	public draw(ctx:CanvasRenderingContext2D, pos:Vector2, size:Vector2)
	{
		let width:number = (this.size.x / 12);

		ctx.save();
		if (this.isReversed)
			pos.x += size.x;
		ctx.translate(pos.x, pos.y);
		if (this.isReversed)
			ctx.scale(-1, 1);
		ctx.drawImage(this.img, this.state * width, 0, width, this.size.y, 0, 0, size.x, size.y);
		ctx.restore();
	}
	public setState(state:number)
	{
		if (state < 12)
			this.state = state;
	}
}